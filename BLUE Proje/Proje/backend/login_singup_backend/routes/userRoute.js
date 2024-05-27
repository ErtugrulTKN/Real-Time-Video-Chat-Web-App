
const express = require("express"); // express modülünü yükler.
const { UserModel } = require("../models/userModel");   // Kullanıcı modelini yükler.
const userRoute = express.Router(); // Express'in Router yönlendiricisini oluşturur.
const bcrypt = require("bcrypt");   // bcrypt modülünü yükler.
const jwt = require("jsonwebtoken");    // jsonwebtoken modülünü yükler.
const { BlockModel } = require("../models/blockUser");  // BlockModel'i yükler.
require("dotenv").config(); // Ortam değişkenlerini kullanarak gizli bilgileri alır.

// Kullanıcı kaydı rotası
userRoute.post("/register", async (req, res) => {
    try {
        // İstek gövdesinden kullanıcı adı, e-posta ve şifreyi alır.
        const { name, email, password } = req.body;
        const database = await UserModel.find({ email });    // E-posta adresi veritabanında var mı diye kontrol eder.
        if (database.length > 0) {    // Eğer e-posta adresi veritabanında varsa, hata mesajı döndürür.
            res.status(400).json({ message: "User already exists" });
        } else {
            // Şifreyi bcrypt ile hashler.
            bcrypt.hash(password, 8, async (err, hash) => {
                if (err) {
                    res.status(401).send({ "error": err.message });
                } else {
                    // Yeni kullanıcı nesnesi oluşturur ve veritabanına kaydeder.
                    const user = new UserModel({ name, email, password: hash });
                    await user.save();
                    res.status(200).send({ "msg": "user created successful" });
                }
            });
        }
    } catch (error) {
        res.status(401).send({ "error": error.message });
    }
});

// Kullanıcı girişi ve token oluşturma rotası
userRoute.post("/login", async (req, res) => {
    try {
        
        const { email, password } = req.body;   // İstek gövdesinden e-posta ve şifreyi alır.
        const user = await UserModel.find({ email });   // E-posta adresine göre kullanıcıyı bulur.
        bcrypt.compare(password, user[0].password, (err, result) => {    // Şifreyi karşılaştırır ve doğruysa JWT token oluşturur.
            if (result) {
                var token = jwt.sign({ userId: user[0]._id }, process.env.accessKey, { expiresIn: "30m" });
                var reftoken = jwt.sign({ userId: user[0]._id }, process.env.refreshKey, { expiresIn: "1day" });
                                
                // console.log(token);
                // client.set(`accessToken${user[0]._id}`,JSON.stringify(token), { EX: 1800 })
                // client.set(`refToken${user[0]._id}`,JSON.stringify(reftoken), { EX: 1800 })
                
                res.cookie("token", token);
                res.cookie("reftoken", reftoken);
                res.status(200).json({ "success": "login successful", token });
            } else {
                res.status(401).json({ "err": "wrong credential" });
            }
        });
    } catch (err) {
        res.status(400).json({ "err": err.message });
    }
});

// Kullanıcı oturumu sonlandırma ve tokeni bloke etme rotası
userRoute.get("/logout", async (req, res) => {
    try {
        // Tokeni çıkarır ve bloke eder.
        const token = req.cookies.token;
        // client.set(token, "token", {
        //     EX: 1800
        // })        
        let block = new BlockModel({ token });
        await block.save();
        res.status(200).json({ "success": "user blocklisted" });
    } catch (error) {
        res.status(401).json({ 'error': error.message });
    }
});

// Erişim anahtarını tekrar oluşturma rotası
userRoute.get("/refresh", async (req, res) => {
    try {
        // Yenileme tokenini alır ve doğrular.
        const reftoken = req.cookies.reftoken;
        var decoded = jwt.verify(reftoken, process.env.refreshKey);
        if (decoded) {
            // Yeni bir erişim tokeni oluşturur.
            var token = jwt.sign({ userId: decoded.userId }, process.env.accessKey, { expiresIn: "30m" });
            // client.set(`accessToken${decoded.userId}`,JSON.stringify(token), { EX: 1800 })
            res.cookie("token", token);
            res.status(200).json({ token });
        } else {
            res.status(401).json({ err: "wrong credential" });
        }
    } catch (error) {
        res.status(401).json({ "err": error.message });
    }
});

// userRoute'ı dışa aktarır.
module.exports = { userRoute };
