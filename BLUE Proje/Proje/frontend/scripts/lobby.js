// HTML'de "lobby__form" id'ye sahip bir form elementini seçer ve bu form elementini form adlı bir değişkene atar.
let form = document.getElementById('lobby__form')

// Tarayıcıda, "display_name" adında bir oturum depolama alanında saklanan kullanıcı adını alır ve bu değeri displayName adlı bir değişkene atar.
let displayName = sessionStorage.getItem('display_name')

// Eğer displayName değişkeni doluysa (yoksa null veya undefined değilse), formdaki "name" alanının değerini displayName değeriyle doldurur.
if(displayName){
    form.name.value = displayName
}

// Form gönderildiğinde (submit olduğunda) gerçekleşecek olan olay dinleyicisini ekler. Bu olay dinleyicisi bir ok işareti fonksiyonunu alır.
form.addEventListener('submit', (e) => {
    // Arrow function, submit olayını yakalar ve varsayılan davranışını engeller (sayfanın yeniden yüklenmesini önler).
    e.preventDefault()

    // Kullanıcının girdiği ismi, "display_name" adında bir tarayıcı oturum depolama alanına kaydeder. Bu, kullanıcının bir sonraki ziyaretinde ismini hatırlamasını sağlar.
    sessionStorage.setItem('display_name', e.target.name.value)

    // Formdaki "room" alanının değerini alır ve inviteCode adlı bir değişkene atar.
    let inviteCode = e.target.room.value

    // Eğer kullanıcı bir oda daveti kodu girmemişse (yani "inviteCode" boşsa), rastgele bir daveti kodu oluşturur.
    // Bu kod, 0 ile 9999 arasında rastgele bir tamsayıdır.
    if(!inviteCode){
        inviteCode = String(Math.floor(Math.random() * 10000))
    }

    // Kullanıcıyı, daveti koduyla birlikte "room.html" adlı başka bir sayfaya yönlendirir.
    // Daveti kodunu URL'ye ekleyerek, bu kodun hedef sayfada kullanılmasını sağlar.
    window.location = `room.html?room=${inviteCode}`
})
