// mongoose modülünü yükler.
const mongoose = require('mongoose');

// Mongoose için bir şema tanımlar. Bu şemada kullanıcı için gerekli alanları belirtir.
const userSchema = mongoose.Schema({
    name: { type: String, required: true }, // Kullanıcının adı, bir metin ve zorunlu olmalıdır.
    email: { type: String, required: true }, // Kullanıcının e-posta adresi, bir metin ve zorunlu olmalıdır.
    password: { type: String, required: true } // Kullanıcının şifresi, bir metin ve zorunlu olmalıdır.
});

// "UserModel" adında bir mongoose modeli oluşturur. Bu model, "users" koleksiyonunda kullanılacak.
const UserModel = mongoose.model("users", userSchema);

// UserModel'i dışa aktarır, böylece başka dosyalarda da kullanılabilir.
module.exports = { UserModel };
