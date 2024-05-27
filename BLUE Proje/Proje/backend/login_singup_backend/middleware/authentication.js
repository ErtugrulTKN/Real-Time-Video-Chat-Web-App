// jsonwebtoken modülünü yükler.
const jwt = require("jsonwebtoken");

// BlockModel ve UserModel modellerini yükler.
const { BlockModel } = require("../models/blockUser");
const { UserModel } = require("../models/userModel");

// Ortam değişkenlerini kullanarak gizli bilgileri alır.
require("dotenv").config();

// fetch fonksiyonunu yükler. Eğer fetch global olarak tanımlanmamışsa, node-fetch modülünü yükler.
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Kimlik doğrulama işlevi
const authentication = async (req, res, next) => {
    // İstekteki token ve yenileme tokenini alır.
    const token = req.cookies.token;
    const refreshToken = req.cookies.reftoken;

    // Tokenin bloklandığına dair bir kayıt var mı diye kontrol eder.
    const isBlacklisted = await BlockModel.find({ token });
    if (isBlacklisted) {
        return res.status(401).send('Token is blacklisted');
    }

    // Eğer token yoksa, kullanıcıyı tekrar giriş yapması için yönlendirir.
    if (!token) {
        res.send("Login again");
        return;
    }

    // Eğer token varsa, JWT tokenini doğrular.
    if (token) {
        jwt.verify(token, process.env.accessKey, async (err, decode) => {
            if (decode) {
                // JWT'den çözülen kullanıcı kimliğini req.body içine ekler.
                req.body.userId = decode.userId;

                // Kullanıcı verisini veritabanından alır ve req.user içine ekler.
                const userData = await UserModel.findById({ _id: decode.userId });
                req.user = userData;

                // Eğer kullanıcı verisi bulunamazsa, yetkilendirme reddedilir.
                if (!userData) {
                    return res.status(401).json({ "err": "unauthorized" });
                }
                // Bir sonraki middleware'e geçer.
                next();
            } else {
                // Tokenin geçerliliği sona erdiyse, yenileme tokeni kullanarak yeni bir token almayı dener.
                const fetchdata = await fetch("https://wild-gold-betta-fez.cyclic.app/users/refresh", {
                    headers: {
                        cookie: `reftoken=${refreshToken}`
                    }
                }).then((res) => res.json());

                // Eğer yenileme tokeniyle alınan yeni token hatalıysa, kullanıcıyı tekrar giriş yapması için yönlendirir.
                if (fetchdata.err) {
                    res.send("login first");
                    return;
                }
                // Yeni tokeni doğrular ve kullanıcı verisini alır.
                jwt.verify(fetchdata.token, process.env.accessKey, async (err, decode) => {
                    if (decode) {
                        // Yeni tokeni kullanıcıya gönderir.
                        res.cookie("token", fetchdata.token);
                        req.body.userId = decode.userId;

                        // Kullanıcı verisini alır ve req.user içine ekler.
                        const userData = await UserModel.findById({ _id: decode.userId });
                        req.user = userData;

                        // Eğer kullanıcı verisi bulunamazsa, yetkilendirme reddedilir.
                        if (!userData) {
                            return res.status(401).json({ "err": "unauthorized" });
                        }
                        // Bir sonraki middleware'e geçer.
                        next();
                    } else {
                        // Tokenin geçerliliği sona erdiyse, kullanıcıyı tekrar giriş yapması için yönlendirir.
                        res.send("login first");
                        return;
                    }
                });
            }
        });
    } else {
        // Eğer token yoksa, kullanıcıyı giriş yapmaya yönlendirir.
        res.send({ "Msg": "Please login" });
    }
}

// authentication işlevini dışa aktarır.
module.exports = {
    authentication
}
