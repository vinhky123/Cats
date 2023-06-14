var catImage = document.getElementById("catImage");
var happyButton = document.getElementById("happyButton");
var catSound = document.getElementById("catSound");
var isHappy = false;
var isSoundPlaying = false;
var soundPosition = 0;

happyButton.addEventListener("click", function() {
  if (isHappy) {
    catImage.src = "./Source/HappyCat/HappyCatStop.gif";
    if (isSoundPlaying) {
      catSound.pause();
      soundPosition = catSound.currentTime;
      isSoundPlaying = false;
    }
    happyButton.textContent = "Happy";
    isHappy = false;
  } else {
    catImage.src = "./Source/HappyCat/HappyCat.gif";
    if (!isSoundPlaying) {
      catSound.currentTime = soundPosition;
      catSound.play();
      isSoundPlaying = true;
    }
    happyButton.textContent = "Stop";
    isHappy = true;
  }
});

catSound.addEventListener("pause", function() {
  isSoundPlaying = false;
});

catSound.addEventListener("play", function() {
  isSoundPlaying = true;
});

catSound.addEventListener("ended", function() {
  // Replay the sound from the beginning
  catSound.currentTime = 0;
  catSound.play();
});

var theRockCatImage = document.getElementById("theRockCatImage");
var susButton = document.getElementById("susButton");
var theRockSound = document.getElementById("theRockSound");
var isSUSPlaying = false;
var susSoundPosition = 0;

susButton.addEventListener("click", function() {
  if (!isSUSPlaying) {
    theRockSound.currentTime = susSoundPosition;
    theRockSound.play();
    isSUSPlaying = true;
    theRockCatImage.src = "./Source/TheRockCat/TheRockCat.gif";
    setTimeout(function() {
      theRockCatImage.src = "./Source/TheRockCat/TheRockCatPic.png";
      susButton.textContent = "SUS!";
      isSUSPlaying = false;
    }, 1500);
  }
});

theRockSound.addEventListener("ended", function() {
  // Reset the state
  theRockSound.pause();
  theRockSound.currentTime = 0;
  isSUSPlaying = false;
});


var cryingCatImage = document.getElementById("cryingCatImage");
var cryButton = document.getElementById("cryButton");
var cryingCatSound = document.getElementById("cryingCatSound");
var isCrying = false;
var isCryingSoundPlaying = false;
var cryingSoundPosition = 0;

cryButton.addEventListener("click", function() {
  if (isCrying) {
    cryingCatImage.src = "./Source/CryingCat/CryingCatRun.gif";
    if (isCryingSoundPlaying) {
      cryingCatSound.pause();
      cryingSoundPosition = cryingCatSound.currentTime;
      isCryingSoundPlaying = false;
    }
    cryButton.textContent = "Cry";
    isCrying = false;
  } else {
    cryingCatImage.src = "./Source/CryingCat/CryingCat.gif";
    if (!isCryingSoundPlaying) {
      cryingCatSound.currentTime = cryingSoundPosition;
      cryingCatSound.play();
      isCryingSoundPlaying = true;
    }
    cryButton.textContent = "Stop";
    isCrying = true;
  }
});

cryingCatSound.addEventListener("pause", function() {
  isCryingSoundPlaying = false;
});

cryingCatSound.addEventListener("play", function() {
  isCryingSoundPlaying = true;
});

cryingCatSound.addEventListener("ended", function() {
  // Replay the sound from the beginning
  cryingCatSound.currentTime = 0;
  cryingCatSound.play();
});


// ...existing code...

var tomChingChengCatImage = document.getElementById("tomChingChengCatImage");
var spinButton = document.getElementById("spinButton");
var chingChengSound = document.getElementById("tomChingChengSound");
var isSpinning = false;
var isChingChengSoundPlaying = false;
var chingChengSoundPosition = 0;

spinButton.addEventListener("click", function() {
  if (isSpinning) {
    tomChingChengCatImage.src = "./Source/TomChingCheng/TomChingChengPic.png";
    if (isChingChengSoundPlaying) {
      chingChengSound.pause();
      chingChengSoundPosition = chingChengSound.currentTime;
      isChingChengSoundPlaying = false;
    }
    spinButton.textContent = "Spin";
    isSpinning = false;
  } else {
    tomChingChengCatImage.src = "./Source/TomChingCheng/TomChingCheng.gif";
    if (!isChingChengSoundPlaying) {
      chingChengSound.currentTime = chingChengSoundPosition;
      chingChengSound.play();
      isChingChengSoundPlaying = true;
    }
    spinButton.textContent = "Stop";
    isSpinning = true;
  }
});

chingChengSound.addEventListener("pause", function() {
  isChingChengSoundPlaying = false;
});

chingChengSound.addEventListener("play", function() {
  isChingChengSoundPlaying = true;
});

chingChengSound.addEventListener("ended", function() {
  // Replay the sound from the beginning
  chingChengSound.currentTime = 0;
  chingChengSound.play();
});

// ...existing code...

var oiiaCatImage = document.getElementById("oiiaCatImage");
var oiiaButton = document.getElementById("oiiaSpinButton");
var oiiaCatSound = document.getElementById("oiiaCatSound");
var isOiiaSpinning = false;
var isOiiaSoundPlaying = false;
var oiiaSoundPosition = 0;

oiiaButton.addEventListener("click", function() {
  if (isOiiaSpinning) {
    oiiaCatImage.src = "./Source/OiiaCat/OiiaCat.png";
    if (isOiiaSoundPlaying) {
      oiiaCatSound.pause();
      oiiaSoundPosition = oiiaCatSound.currentTime;
      isOiiaSoundPlaying = false;
    }
    oiiaButton.textContent = "Spin";
    isOiiaSpinning = false;
  } else {
    oiiaCatImage.src = "./Source/OiiaCat/OiiaCatSpin.gif";
    if (!isCryingSoundPlaying) {
      oiiaCatSound.currentTime = oiiaSoundPosition;
      oiiaCatSound.play();
      isOiiaSoundPlaying = true;
    }
    cryButton.textContent = "Stop";
    isOiiaSpinning = true;
  }
});

oiiaCatSound.addEventListener("pause", function() {
  isOiiaSoundPlaying = false;
});

oiiaCatSound.addEventListener("play", function() {
  isOiiaSoundPlaying = true;
});

oiiaCatSound.addEventListener("ended", function() {
  // Replay the sound from the beginning
  oiiaCatSound.currentTime = 0;
  oiiaCatSound.play();
});