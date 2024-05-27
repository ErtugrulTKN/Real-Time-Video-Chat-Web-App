// mongoose modülünü yükler.
const mongoose = require("mongoose");

// Mongoose için bir şema tanımlar. Bu şemada blok için gerekli alanları belirtir.
const blockSchema = mongoose.Schema({
    token: { type: String, required: true } // Token alanı, bir metin ve zorunlu olmalıdır.
});

// "BlockModel" adında bir mongoose modeli oluşturur. Bu model, "blocks" koleksiyonunda kullanılacak.
const BlockModel = mongoose.model("blocks", blockSchema);

// BlockModel'i dışa aktarır, böylece başka dosyalarda da kullanılabilir.
module.exports = { BlockModel };
