
const express = require("express"); // express modülünü yükler.
const { connection } = require("./db"); // Veritabanı bağlantısını sağlamak için db dosyasından connection nesnesini alır.
const { authentication } = require("./middleware/authentication");  // Kimlik doğrulama işlevini sağlamak için middleware klasöründen authentication fonksiyonunu alır.
const { userRoute } = require("./routes/userRoute");    // Kullanıcı rotasını sağlamak için routes klasöründen userRoute objesini alır.
const cookieParser = require('cookie-parser');  // Cookie'leri işlemek için cookie-parser modülünü yükler.
const cors = require("cors"); // Frontend ile backend arasındaki bağlantı 
const app = express();  // Express uygulamasını oluşturur.


app.use(express.json());    // JSON verilerini işlemek için express'in json middleware'ini kullanır.
app.use(cors());    // CORS için cors middleware'ini kullanır.
app.use(cookieParser());    // Cookie'leri işlemek için cookie-parser middleware'ini kullanır.

const port = process.env.port;  // Ortam değişkenlerini kullanarak portu alır.
require('dotenv').config(); // Ortam değişkenlerini kullanarak gizli bilgileri alır.
const expressWinston = require("express-winston");  // expressWinston ve winston modüllerini yükler.
const winston = require("winston");
require("winston-mongodb");

// HTTP isteklerini ve yanıtlarını günlüğe kaydetmek için expressWinston.logger middleware'ini kullanır.
app.use(expressWinston.logger({
    transports: [
        
        // Yorum satırına alınmış kod, logların dosyaya kaydedilmesini sağlar.
        // new winston.transports.File({
        //   level:"info",
        //   json:true,
        //   filename:"alllogs.json"
        // }),

        // MongoDB'ye log kaydetmek için MongoDB taşıyıcısını kullanır.
        new winston.transports.MongoDB({
            level: "silly", // Log seviyesi
            db: process.env.mongoUrl, // MongoDB bağlantı URL'si
            json: true // Logların JSON formatında kaydedilmesini sağlar.
        })
    ],
    // Log formatını belirler. Burada logların renklendirilmesi ve JSON formatında kaydedilmesi sağlanır.
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
}));


app.get("/", (req, res) => {    // Ana sayfa rotası. Basit bir "Ana Sayfa" metni gönderir.
    res.send("home page");
});

app.use("/users", userRoute);   // Kullanıcı giriş ve kayıt rotalarını ekler.
app.use(authentication);    // Kimlik doğrulama işlevini tüm rotalar için kullanır.
app.get("/check", async (req, res) => { // Kontrol rotası. Sadece başarılı bir yanıt döndürür.
    try {
        res.status(200).send({ success: "successful" });
    } catch (error) {
        res.status(404).send({ err: error });
    }
});

// HTTP sunucusunu belirtilen portta dinler ve veritabanı bağlantısını oluşturur.
app.listen(port, async () => {
    try {
        await connection;
        console.log(`server is running at port ${port}`);
    } catch (error) {
        console.log({ "err": error });
    }
});
