const mongoose=require("mongoose")
require("dotenv").config()
const connection=mongoose.connect(process.env.mongoUrl);

module.exports={connection}

// mongoose modülünü yükler.
// dotenv modülünü yükler ve ortam değişkenlerini kullanarak gizli bilgileri alır.
// MongoDB veritabanına bağlantı oluşturur.
// process.env.mongoUrl, .env dosyasında tanımlanan "mongoUrl" değişkenini kullanır.
// connection değişkenini dışa aktarır, böylece başka dosyalarda da kullanılabilir.