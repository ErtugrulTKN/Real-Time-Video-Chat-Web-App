// Kaydolma formunu göstermek için "signup-toggle" id'ye sahip bir elementin tıklanma olayını dinler.
document.getElementById("signup-toggle").addEventListener("click", function(){
    // Giriş formunu gizler.
    document.getElementById("login-form").classList.remove("active");
    // Kaydolma formunu gösterir.
    document.getElementById("signup-form").classList.add("active");
});

// Giriş formunu göstermek için "login-toggle" id'ye sahip bir elementin tıklanma olayını dinler.
document.getElementById("login-toggle").addEventListener("click", function(){
    // Kaydolma formunu gizler.
    document.getElementById("signup-form").classList.remove("active");
    // Giriş formunu gösterir.
    document.getElementById("login-form").classList.add("active");
});

// Giriş formunu yakalar.
const loginForm = document.getElementById("login-form");

// Giriş formu gönderildiğinde gerçekleşecek olayı dinler.
loginForm.addEventListener("submit", function(event) {
    // Sayfanın yeniden yüklenmesini engeller.
    event.preventDefault(); 
    // Kullanıcı adı ve şifre alanlarını yakalar.
    const usernameInput = document.getElementById("loginemail");
    const passwordInput = document.getElementById("loginPassword");
    // Kullanıcı adı ve şifreyi alır.
    const username = usernameInput.value;
    const password = passwordInput.value;
    // Gönderilecek veriyi oluşturur.
    const data = {email: username, password: password};
    // Kullanıcı adı ve şifre alanlarının dolu olduğunu kontrol eder.
    if( password && username!=""){
        // Giriş isteği yapar.
        fetch("https://wild-gold-betta-fez.cyclic.app/users/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            // Hata mesajı varsa kullanıcıya bildirir.
            if(res.err){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'please check details',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }else{
                // Başarılı giriş durumunda kullanıcıya bilgi verir ve belirli bir süre sonra yönlendirir.
                Swal.fire(
                    'Good job!',
                    'Successfully LoggedIn',
                    'success'
                )
                setTimeout(()=>{
                    window.location.href="lobby.html"
                },2500)
            }
        })
        .catch(error => {
            // Hata durumunda kullanıcıya bilgi verir.
            console.error(error);
            alert("Invalid Credentials")
        });
    }else{
        // Kullanıcı adı veya şifre alanlarının boş olduğunu belirten bir mesaj gösterir.
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please fill all details',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
});

// Kaydolma formunu yakalar.
const signupForm = document.getElementById("signup-form");

// Kaydolma formu gönderildiğinde gerçekleşecek olayı dinler.
signupForm.addEventListener("submit", function(event) {
    // Sayfanın yeniden yüklenmesini engeller.
    event.preventDefault(); 
    // Kullanıcı adı, e-posta ve şifre alanlarını yakalar.
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("Password");
    // Kullanıcı adı, e-posta ve şifreyi alır.
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    // Gönderilecek veriyi oluşturur.
    const data = {name: username, email: email, password: password};
    // Kullanıcı adı, e-posta ve şifre alanlarının dolu olduğunu kontrol eder.
    if(email && password && username!=""){
        // Kaydolma isteği yapar.
        fetch("https://wild-gold-betta-fez.cyclic.app/users/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            // Hata mesajı varsa kullanıcıya bildirir.
            if(res.msg){
                Swal.fire(
                    'Good job!',
                    'Successfully Registered',
                    'success'
                )
                setTimeout(()=>{
                    window.location.href="login.html"
                },1500)
            }else{
                // Hata mesajı varsa kullanıcıya bildirir.
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'User Already Exists',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        })
        .catch(error => {
            // Hata durumunda kullanıcıya bilgi verir.
            console.error(error);
        });
    }else{
        // Kullanıcı adı, e-posta veya şifre alanlarının boş olduğunu belirten bir mesaj gösterir.
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please fill all details',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
});
