const { createClient } = require("redis")
require("dotenv").config()
const client = createClient();
client.connect({
    url: process.env.redis_url
});

module.exports = { client }

// redis modülünden createClient fonksiyonunu yükler.
// dotenv modülünü yükler ve ortam değişkenlerini kullanarak gizli bilgileri alır.
// Redis istemcisini oluşturur.
// Redis sunucusuna bağlanır.
// process.env.redis_url, .env dosyasında tanımlanan "redis_url" değişkenini kullanır.
// client değişkenini dışa aktarır, böylece başka dosyalarda da kullanılabilir.