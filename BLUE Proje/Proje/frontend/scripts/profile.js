// "EditText" sınıfına sahip tüm elementleri seçer.
let EditText = document.querySelectorAll('.EditText');

// Metin düzenleyiciyi temsil eden bir element seçer.
let textEditor = document.querySelector('.text-editor');

// Metin düzenleyiciyi kapatmak için bir çıkış düğmesi seçer.
let exitTxt  = document.querySelector('.exit-txt');

// Metin düzenleyiciyi iptal etmek için bir iptal düğmesi seçer.
let canselTxt = document.getElementById('canselTxt');

// Her "EditText" elementi için bir olay dinleyici ekler.
EditText.forEach((el) =>{
    el.addEventListener('click' , ()=>{
        // Metin düzenleyiciyi görünür hale getirir.
        textEditor.style['display'] = 'block';
    });
});

// Metin düzenleyiciyi kapatmak için çıkış düğmesine bir olay dinleyici ekler.
exitTxt.addEventListener('click' , ()=>{
    // Metin düzenleyiciyi gizler.
    textEditor.style['display'] = 'none';
});

// Metin düzenleyiciyi iptal etmek için iptal düğmesine bir olay dinleyici ekler.
canselTxt.addEventListener('click' , ()=>{
    // Metin düzenleyiciyi gizler.
    textEditor.style['display'] = 'none';
});

/*--  servisler */
// "EditSer" sınıfına sahip tüm elementleri seçer.
let EditSer = document.querySelectorAll('.EditSer');

// Servis düzenleyiciyi temsil eden bir element seçer.
let serviceEditor = document.querySelector('.service-editor');

// Servis düzenleyiciyi kapatmak için bir çıkış düğmesi seçer.
let exitSer = document.querySelector('.exit-ser');

// Servis düzenleyiciyi iptal etmek için bir iptal düğmesi seçer.
let canselSer = document.getElementById('canselSer');

// Her "EditSer" elementi için bir olay dinleyici ekler.
EditSer.forEach((el) =>{
    el.addEventListener('click' , ()=>{
        // Servis düzenleyiciyi görünür hale getirir.
        serviceEditor.style['display'] = 'block';
    });
});

// Servis düzenleyiciyi kapatmak için çıkış düğmesine bir olay dinleyici ekler.
exitSer.addEventListener('click' , ()=>{
    // Servis düzenleyiciyi gizler.
    serviceEditor.style['display'] = 'none';
});

// Servis düzenleyiciyi iptal etmek için iptal düğmesine bir olay dinleyici ekler.
canselSer.addEventListener('click' , ()=>{
    // Servis düzenleyiciyi gizler.
    serviceEditor.style['display'] = 'none';
});

/*--  projeler */
// "EditPro" sınıfına sahip tüm elementleri seçer.
let  EditPro = document.querySelectorAll('.EditPro');

// Proje düzenleyiciyi temsil eden bir element seçer.
let projectEditor = document.querySelector('.project-editor');

// Proje düzenleyiciyi kapatmak için bir çıkış düğmesi seçer.
let exitPro = document.querySelector('.exit-pro');

// Proje düzenleyiciyi iptal etmek için bir iptal düğmesi seçer.
let canselPro = document.getElementById('canselPro');

// Her "EditPro" elementi için bir olay dinleyici ekler.
EditPro.forEach((el) =>{
    el.addEventListener('click' , ()=>{
        // Proje düzenleyiciyi görünür hale getirir.
        projectEditor.style['display'] = 'block';
    });
});

// Proje düzenleyiciyi kapatmak için çıkış düğmesine bir olay dinleyici ekler.
exitPro.addEventListener('click' , ()=>{
    // Proje düzenleyiciyi gizler.
    projectEditor.style['display'] = 'none';
});

// Proje düzenleyiciyi iptal etmek için iptal düğmesine bir olay dinleyici ekler.
canselPro.addEventListener('click' , ()=>{
    // Proje düzenleyiciyi gizler.
    projectEditor.style['display'] = 'none';
});
