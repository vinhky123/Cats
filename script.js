window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  loader.style.opacity = "0"; // Mờ dần loader
  setTimeout(() => {
    loader.style.display = "none"; // Ẩn hẳn
    content.style.display = "block"; // Hiện nội dung
  }, 500); // Chờ 0.5s cho hiệu ứng
});

document.addEventListener("DOMContentLoaded", function () {
  // Preload assets
  const assets = [
    "./Source/HappyCat/HappyCatStop.gif",
    "./Source/TheRockCat/TheRockCatPic.png",
    "./Source/CryingCat/CryingCatRun.gif",
    "./Source/TomChingCheng/TomChingChengPic.png",
    "./Source/OiiaCat/OiiaCat.png",
    "./Source/PopCat/PopCatPic.gif",
    "./Source/HappyCat/HappyCat.gif",
    "./Source/TheRockCat/TheRockCat.gif",
    "./Source/CryingCat/CryingCat.gif",
    "./Source/TomChingCheng/TomChingCheng.gif",
    "./Source/OiiaCat/OiiaCatSpin.gif",
    "./Source/PopCat/PopCat.gif",
    "./Source/Cheems/2Cheems.png",
    "./Source/Cheems/Bonk!.png",
    "./Source/MaxwellCat/MaxwellCatPic.gif",
    "./Source/MaxwellCat/MaxwellCat.gif",
    "./Source/VibingCat/VibingCat.gif",
    "./Source/VibingCat/VibingCatPic.gif",
  ];

  const sounds = [
    "./Source/HappyCat/HappyHappyHappy.mp3",
    "./Source/CryingCat/Crying.mp3",
    "./Source/TheRockCat/TheRockSound.mp3",
    "./Source/TomChingCheng/ChingChengHanji.mp3",
    "./Source/OiiaCat/OiiaCat.mp3",
    "./Source/PopCat/PopCatSound.mp3",
    "./Source/Cheems/Bonk.mp3",
    "./Source/MaxwellCat/MaxwellSound.mp3",
    "./Source/VibingCat/VibingCatSound.mp3",
  ];

  preload(assets, sounds, initialize);

  function preload(assets, sounds, callback) {
    let loadedCount = 0;
    const totalAssets = assets.length + sounds.length;

    function assetLoaded() {
      loadedCount++;
      if (loadedCount === totalAssets) {
        callback();
      }
    }

    assets.forEach(function (src) {
      const img = new Image();
      img.onload = assetLoaded;
      img.src = src;
    });

    sounds.forEach(function (src) {
      const audio = new Audio();
      audio.oncanplaythrough = assetLoaded;
      audio.src = src;
    });
  }

  function initialize() {
    const catConfigs = [
      {
        buttonId: "happyButton",
        imageId: "catImage",
        activeSrc: "./Source/HappyCat/HappyCat.gif",
        inactiveSrc: "./Source/HappyCat/HappyCatStop.gif",
        soundId: "catSound",
        loopSound: true,
        toggleButtonText: ["Stop", "Happy"],
      },
      {
        buttonId: "cryButton",
        imageId: "cryingCatImage",
        activeSrc: "./Source/CryingCat/CryingCat.gif",
        inactiveSrc: "./Source/CryingCat/CryingCatRun.gif",
        soundId: "cryingCatSound",
        loopSound: true,
        toggleButtonText: ["Stop", "Cry"],
      },
      {
        buttonId: "spinButton",
        imageId: "tomChingChengCatImage",
        activeSrc: "./Source/TomChingCheng/TomChingCheng.gif",
        inactiveSrc: "./Source/TomChingCheng/TomChingChengPic.png",
        soundId: "tomChingChengSound",
        loopSound: true,
        toggleButtonText: ["Stop", "Spin"],
      },
      {
        buttonId: "susButton",
        imageId: "theRockCatImage",
        activeSrc: "./Source/TheRockCat/TheRockCat.gif",
        inactiveSrc: "./Source/TheRockCat/TheRockCatPic.png",
        soundId: "theRockSound",
        loopSound: false,
        toggleButtonText: ["SUS!", "SUS!"],
        autoRevertDelay: 1500, // revert after a short animation
      },
      {
        buttonId: "oiiaSpinButton",
        imageId: "oiiaCatImage",
        activeSrc: "./Source/OiiaCat/OiiaCatSpin.gif",
        inactiveSrc: "./Source/OiiaCat/OiiaCat.png",
        soundId: "oiiaCatSound",
        loopSound: true,
        toggleButtonText: ["Stop", "Spin"],
      },
      {
        buttonId: "maxwellSwingButton",
        imageId: "maxwellCatImage",
        activeSrc: "./Source/MaxwellCat/MaxwellCat.gif",
        inactiveSrc: "./Source/MaxwellCat/MaxwellCatPic.gif",
        soundId: "maxwellSound",
        loopSound: true,
        toggleButtonText: ["Stop", "Swing"],
      },
      {
        buttonId: "vibingButton",
        imageId: "vibingCatImage",
        activeSrc: "./Source/VibingCat/VibingCat.gif",
        inactiveSrc: "./Source/VibingCat/VibingCatPic.gif",
        soundId: "vibingCatSound",
        loopSound: true,
        toggleButtonText: ["Stop", "Vibe"],
      },
    ];

    // Special cats with continuous actions
    // popCat and cheems have a single action button and a continuous action button
    // We'll handle them separately for clarity.
    setupPopCat();
    setupCheems();

    // Set up all regular cats
    catConfigs.forEach(setupCat);

    function setupCat(config) {
      const button = document.getElementById(config.buttonId);
      const image = document.getElementById(config.imageId);
      const audio = document.getElementById(config.soundId);

      let isActive = false;
      let soundPosition = 0;
      let isSoundPlaying = false;

      if (audio && config.loopSound) {
        audio.addEventListener("ended", () => {
          audio.currentTime = 0;
          audio.play();
        });
      }

      button.addEventListener("click", function () {
        if (isActive) {
          // Deactivate
          image.src = config.inactiveSrc;
          if (audio && isSoundPlaying) {
            audio.pause();
            soundPosition = audio.currentTime;
            isSoundPlaying = false;
          }
          if (config.toggleButtonText) {
            button.textContent = config.toggleButtonText[1];
          }
          isActive = false;
        } else {
          // Activate
          image.src = config.activeSrc;
          if (audio && !isSoundPlaying) {
            audio.currentTime = soundPosition;
            audio.play();
            isSoundPlaying = true;
          }
          if (config.toggleButtonText) {
            button.textContent = config.toggleButtonText[0];
          }
          isActive = true;

          // If there's a set auto-revert (like The Rock Cat), revert after delay
          if (config.autoRevertDelay) {
            setTimeout(() => {
              image.src = config.inactiveSrc;
              if (audio && isSoundPlaying) {
                audio.pause();
                soundPosition = audio.currentTime;
                isSoundPlaying = false;
              }
              // The Rock Cat doesn't really toggle states, it just plays once
              if (config.toggleButtonText) {
                button.textContent = config.toggleButtonText[1];
              }
              isActive = false;
            }, config.autoRevertDelay);
          }
        }
      });

      if (audio) {
        audio.addEventListener("pause", () => {
          isSoundPlaying = false;
        });
        audio.addEventListener("play", () => {
          isSoundPlaying = true;
        });
      }
    }

    // Pop Cat setup (single pop and continuous)
    function setupPopCat() {
      const popCatImage = document.getElementById("popCatImage");
      const popButton = document.getElementById("popButton");
      const continuousPopButton = document.getElementById(
        "continuousPopButton"
      );
      const popCatSound = document.getElementById("popCatSound");
      let isContinuousPopping = false;
      let popInterval;

      popCatSound.volume = 1.0;

      function pop() {
        popCatImage.src = "./Source/PopCat/PopCat.gif";
        popCatSound.currentTime = 0;
        popCatSound.play();

        setTimeout(function () {
          popCatImage.src = "./Source/PopCat/PopCatPic.gif";
        }, popCatSound.duration * 600);
      }

      popButton.addEventListener("click", pop);

      continuousPopButton.addEventListener("click", function () {
        if (!isContinuousPopping) {
          isContinuousPopping = true;
          continuousPopButton.textContent = "Stop";
          pop();
          popInterval = setInterval(pop, popCatSound.duration * 1500);
        } else {
          isContinuousPopping = false;
          continuousPopButton.textContent = "Ultra Pop";
          clearInterval(popInterval);
        }
      });
    }

    // Cheems setup (single Bonk and continuous)
    function setupCheems() {
      const cheemsImage = document.getElementById("cheemsImage");
      const bonkButton = document.getElementById("bonkButton");
      const continuousBonkButton = document.getElementById(
        "continuousBonkButton"
      );
      const bonkSound = document.getElementById("bonkSound");
      let isContinuousBonking = false;
      let bonkInterval;

      bonkSound.volume = 1.0;

      function singleBonk() {
        cheemsImage.src = "./Source/Cheems/Bonk!.png";
        bonkSound.currentTime = 0;
        bonkSound.play();
        setTimeout(function () {
          cheemsImage.src = "./Source/Cheems/2Cheems.png";
        }, bonkSound.duration * 1000);
      }

      bonkButton.addEventListener("click", singleBonk);

      continuousBonkButton.addEventListener("click", function () {
        if (!isContinuousBonking) {
          isContinuousBonking = true;
          continuousBonkButton.textContent = "Stop";
          singleBonk();
          bonkInterval = setInterval(singleBonk, bonkSound.duration * 2000);
        } else {
          isContinuousBonking = false;
          continuousBonkButton.textContent = "Ultra Bonk";
          clearInterval(bonkInterval);
        }
      });
    }
  }
});
