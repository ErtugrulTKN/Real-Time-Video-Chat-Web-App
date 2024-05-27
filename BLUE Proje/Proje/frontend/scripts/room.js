// Mesajların gösterildiği konteyneri seçer.
let messagesContainer = document.getElementById('messages');

// Mesajlar konteynerinin scrollunu en sona kaydırır.
messagesContainer.scrollTop = messagesContainer.scrollHeight;

// Üye listesi konteynerini ve butonunu seçer.
const memberContainer = document.getElementById('members__container');
const memberButton = document.getElementById('members__button');

// Sohbet konteynerini ve butonunu seçer.
const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

// Aktif üye konteynerinin durumunu izlemek için bir değişken tanımlar.
let activeMemberContainer = false;

// Üye butonuna bir tıklama olayı ekler.
memberButton.addEventListener('click', () => {
  // Eğer üye konteyneri aktifse, görünürlüğünü kapatır; değilse, görünürlüğünü açar.
  if (activeMemberContainer) {
    memberContainer.style.display = 'none';
  } else {
    memberContainer.style.display = 'block';
  }

  // Aktif üye konteyneri durumunu değiştirir.
  activeMemberContainer = !activeMemberContainer;
});

// Aktif sohbet konteynerinin durumunu izlemek için bir değişken tanımlar.
let activeChatContainer = false;

// Sohbet butonuna bir tıklama olayı ekler.
chatButton.addEventListener('click', () => {
  // Eğer sohbet konteyneri aktifse, görünürlüğünü kapatır; değilse, görünürlüğünü açar.
  if (activeChatContainer) {
    chatContainer.style.display = 'none';
  } else {
    chatContainer.style.display = 'block';
  }

  // Aktif sohbet konteyneri durumunu değiştirir.
  activeChatContainer = !activeChatContainer;
});

// Video çerçevesini göstermek için bir değişken tanımlar ve gerekli elementleri seçer.
let displayFrame = document.getElementById('stream__box');
let videoFrames = document.getElementsByClassName('video__container');
let userIdInDisplayFrame = null;

// Video çerçevesini genişleten bir fonksiyon tanımlar.
let expandVideoFrame = (e) => {
  // DisplayFrame'in içeriğini değiştirir ve boyutlandırma işlemlerini gerçekleştirir.
  let child = displayFrame.children[0];
  if(child){
      document.getElementById('streams__container').appendChild(child);
  }

  displayFrame.style.display = 'block';
  displayFrame.appendChild(e.currentTarget);
  userIdInDisplayFrame = e.currentTarget.id;

  for(let i = 0; videoFrames.length > i; i++){
    if(videoFrames[i].id != userIdInDisplayFrame){
      videoFrames[i].style.height = '100px';
      videoFrames[i].style.width = '100px';
    }
  }
}

// Her video çerçevesine bir tıklama olayı ekler.
for(let i = 0; videoFrames.length > i; i++){
  videoFrames[i].addEventListener('click', expandVideoFrame);
}

// Video çerçevesini gizleyen bir fonksiyon tanımlar.
let hideDisplayFrame = () => {
    userIdInDisplayFrame = null;
    displayFrame.style.display = null;

    let child = displayFrame.children[0];
    document.getElementById('streams__container').appendChild(child);

    for(let i = 0; videoFrames.length > i; i++){
      videoFrames[i].style.height = '300px';
      videoFrames[i].style.width = '300px';
  }
}

// DisplayFrame'e bir tıklama olayı ekler.
displayFrame.addEventListener('click', hideDisplayFrame);
