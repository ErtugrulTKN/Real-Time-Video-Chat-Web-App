#BLUE#


Bu Proje Gerçek zamanlı bir görüntülü sohbet uygulamasıdır. 
Uygulama, kullanıcıların görüntülü sohbet odaları oluşturmasına ve diğer kullanıcılarla gerçek zamanlı olarak iletişim kurmasına olanak tanır.
Genel anlamda Discord veya Messenger uygulamaları tarzında Görüntülü sohbet, kamera paylaşımı, ekran paylaşımı, canlı chat gibi özellikler içeren bir yapıdadır.

Proje Aşağıdakiler kullanılarak geliştirilmiştir.
* Node.js
* Express.js
* MongoDB
* Redis
* Agora API
* Socket.io
* HTML
* CSS
* JavaScript

**Özellikleri**

* Bilgi ve görsellerin bulunduğu ana sayfa.
* Logo ve oturum açma/kaydolma düğmeleri içeren gezinme çubuğu.
* Kayıt olmak ve giriş yapmak için formların bulunduğu oturum açma ve kayıt sayfaları.
* Yetkilendirme, önbellek ve JWT belirteç sistemini depolamak ve belirteci yenilemek için Redis ile arka uçta gerçekleştirilir.
* MongoDB'de saklanan tüm veriler.
* Kullanıcıların başkalarıyla görüntülü sohbet yapmak için bir oda oluşturabilecekleri lobi sayfası.
* Katılımcıların listesini, video akışını ve sohbet oturumunu içeren ana açılış sayfası.
* Agora API video ve mesaj kısımları için kullanılmaktadır.
* Ana sayfaya yönlendirmek için oda oluşturma ve video akışı açılış sayfasındaki çıkış düğmesi.
* Katılımcı listesi, mevcut kullanıcı dahil odadaki tüm kullanıcıların adlarını görüntüler.
* Chatbot, odaya girdiğinde kullanıcının adının yer aldığı bir karşılama mesajı gönderir.
* Kullanıcılar tarayıcıda mikrofon ve kamera izni vererek yayına katılabilir.
* Kullanıcının videosu açılış sayfasının orta kısmında kare kutular içerisinde görüntülenir.
* Kamerayı açmak/kapatmak, sesi kapatmak/açmak, ekran paylaşımı ve yayından ayrılmak için dört seçenek (geçiş işlevleri) sağlanmıştır.
* Chatbot, kullanıcı odaya katıldığında veya odadan çıktığında mesaj gönderir.
* Bir kullanıcı sohbette mesaj gönderdiğinde, mesaj içeren kullanıcı adı sohbet bölümünde görüntülenir.
* Web sitesi tamamen duyarlı olacak ve çeşitli ekran boyutlarına göre optimize edilecek şekilde tasarlanmıştır.

* **Ana sayfa:** Ana sayfa tamamen duyarlı olacak ve çeşitli ekran boyutlarına göre optimize edilecek şekilde tasarlanmıştır. 
Resimler, metin ve gezinme çubuğu, ekran boyutuna sığacak şekilde dinamik olarak ayarlanır; gezinme çubuğu, daha küçük ekranlarda bir hamburger menüsüne dönüşür. 
Farklı ekran çözünürlüklerine uygun şekilde ölçeklendirilmiş resimlerle düzen temiz ve okunması kolaydır.

* **Oturum Açma/Kayıt sayfaları:** Oturum açma ve kaydolma sayfaları da tamamen duyarlı olacak ve farklı ekran boyutları için optimize edilecek şekilde tasarlanmıştır. 
Form alanları ve düğmeler farklı ekran çözünürlüklerine uygun şekilde ölçeklendirilerek formlar ve görüntüler ekran boyutuna uyacak şekilde dinamik olarak ayarlanır. 
Kullanıcıyı yönlendirecek açık talimatlar ve hata mesajları içeren sayfalarda gezinmek kolaydır ve kullanıcı dostudur.

* **Lobi sayfası:** Lobi sayfası tamamen duyarlı olacak ve farklı ekran boyutları için optimize edilecek şekilde tasarlanmıştır. 
Yeni bir oda oluşturma formu ve mevcut odaların listesi, farklı ekran çözünürlüklerine uygun şekilde ölçeklendirilmiş form alanları ve düğmelerle ekran boyutuna uyacak şekilde dinamik olarak ayarlanır. 
Açık talimatlar ve hata mesajları içeren sayfa temiz ve gezinmesi kolaydır.

* **Ana açılış sayfası:** Ana açılış sayfası da tamamen duyarlı olacak ve farklı ekran boyutları için optimize edilecek şekilde tasarlanmıştır. Video akışı ve sohbet oturumu, düzen ve biçimlendirmenin farklı ekran çözünürlüklerine uygun şekilde ölçeklendirilmesiyle ekran boyutuna uyacak şekilde dinamik olarak ayarlanır. Sayfanın sol tarafındaki katılımcı listesi de duyarlıdır; isimler ve avatarlar farklı ekran boyutlarına uygun şekilde ölçeklendirilmiştir. Kullanıcıyı yönlendirecek açık talimatlar ve hata mesajları içeren sayfada gezinmek kolaydır ve kullanıcı dostudur.

**Proje Kurulumu**

Bu projeye başlamak için şu adımları izleyin:

1. Depoyu klonlayın: `git clone https://github.com/ErtugrulTKN/internet-programciligi-2-proje`
2. Bağımlılıkları yükleyin: `npm install`
3. Ortam değişkenlerini ayarlayın:
    * `MONGODB_URI` - MongoDB bağlantı URI'si
    * `REDIS_URL` - Redis bağlantı URL'si
    * `JWT_SECRET` - JWT gizli anahtarı
    * `JWT_EXPIRY` - JWT jetonunun geçerlilik süresi (ör. "1 gün")
    * `AGORA_APP_ID `- Agora.io uygulama kimliği
4. Uygulamayı çalıştırın: `npm start`

**Kullanım**

1. Yeni bir hesap oluşturmak için ana sayfadaki "Kayıt Ol" butonuna tıklayın ve kayıt formunu adınızla doldurun. e-posta adresi ve şifre.

2. Hesabınızı oluşturmak için "Gönder" düğmesini tıklayın.

3. Hesabınıza giriş yapmak için ana sayfadaki "Oturum aç" butonuna tıklayın.

4. E-posta adresinizi ve şifrenizi girin, ardından "Oturum aç" düğmesini tıklayın.

5. Giriş yaptığınızda, bir oda oluşturabileceğiniz veya mevcut bir odaya katılabileceğiniz lobi sayfasına yönlendirileceksiniz.

6. Bir oda oluşturmak için bir oda adı girin ve "Oda Oluştur" düğmesini tıklayın. Odanın açılış sayfasına yönlendirileceksiniz.

7. Odaya girdiğinizde sayfanın sol tarafındaki katılımcı listesinde isminizin listelendiğini, sayfanın sağ tarafındaki sohbet bölümünde ise sohbet botundan gelen bir hoş geldiniz mesajını göreceksiniz.

8. Video akışına katılmak için "Yayına Katıl" düğmesini tıklayın. Tarayıcının mikrofonunuza ve kameranıza erişmesine izin vermeniz istenecektir.

9. İzin verdiğinizde videonuz, diğer katılımcıların videolarıyla birlikte açılış sayfasının ortasındaki kare bir kutuda görünecektir.

10. Sayfanın alt kısmında, geçiş işlevlerine sahip dört seçenek vardır: kamerayı aç/kapat, sesi kapat/aç, ekran paylaşımı ve yayından ayrıl. Sohbet sırasında videonuzu ve sesinizi kontrol etmek için bu seçenekleri kullanabilirsiniz.

11. Bir katılımcının odaya katılması veya odadan çıkması durumunda sohbet botu, sohbet bölümünde sizi bir mesajla bilgilendirecektir. Bir katılımcı sohbet bölümünde mesaj gönderirse kullanıcı adı ve mesajı görüntülenecektir.



