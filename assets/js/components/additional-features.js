document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.wrapper');

  const imageOnBtn = document.getElementById('on-images');
  const imageOffBtn = document.getElementById('off-images');

  const textSmallBtn = document.getElementById('small-size-texts');
  const textMediumBtn = document.getElementById('medium-size-texts');
  const textLargeBtn = document.getElementById('large-size-texts');

  const themeButtons = {
    white: document.getElementById('white-color-theme'),
    yellow: document.getElementById('yellow-color-theme'),
    blackWhite: document.getElementById('blackWhite-color-theme'),
    blackGreen: document.getElementById('blackGreen-color-theme'),
    blue: document.getElementById('blue-color-theme')
  };

  const soundOnBtn = document.getElementById('on-sound');
  const soundOffBtn = document.getElementById('off-sound');

  const closePanelBtn = document.querySelector('.additional-feature-panel__close');
  const normalVersionBtn = document.querySelector('.additional-feature-panel__button-off');

  // Загрузка сохраненных настроек
//   loadSettings();

  imageOnBtn.addEventListener('click', () => toggleImages(true));
  imageOffBtn.addEventListener('click', () => toggleImages(false));
  
  textSmallBtn.addEventListener('click', () => setTextSize('small'));
  textMediumBtn.addEventListener('click', () => setTextSize('medium'));
  textLargeBtn.addEventListener('click', () => setTextSize('large'));
  
  Object.keys(themeButtons).forEach(theme => {
    themeButtons[theme].addEventListener('click', () => setColorTheme(theme));
  });
  
  soundOnBtn.addEventListener('click', () => toggleSound(true));
  soundOffBtn.addEventListener('click', () => toggleSound(false));
  
  closePanelBtn.addEventListener('click', closePanel);
  normalVersionBtn.addEventListener('click', resetSettings);

  // управление картинками
  function toggleImages(show) {
    if (show) {
      wrapper.classList.remove('no-images');
    } else {
      wrapper.classList.add('no-images');
    }
  }

//   function setTextSize(size) {
//     body.classList.remove('text-small', 'text-medium', 'text-large');
//     body.classList.add(`text-${size}`);
//     localStorage.setItem('textSize', size);
//   }


  function setColorTheme(theme) {
    wrapper.classList.remove('theme-white', 'theme-yellow', 'theme-blackWhite', 'theme-blackGreen', 'theme-blue');
    wrapper.classList.add(`theme-${theme}`);
  }

//   function toggleSound(enabled) {
//     if (enabled) {
//       wrapper.classList.add('sound-enabled');
//       initTextToSpeech();
//     } else {
//       wrapper.classList.remove('sound-enabled');
//     }
//   }

//   function initTextToSpeech() {
//     const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span, li, div');
//     elements.forEach(el => {
//       el.addEventListener('mouseenter', speakText);
//     });
//   }

//   function speakText(e) {
//     if (!wrapper.classList.contains('sound-enabled')) return;
    
//     const utterance = new SpeechSynthesisUtterance(e.target.textContent);
//     utterance.lang = 'ru-RU';
//     window.speechSynthesis.cancel();
//     window.speechSynthesis.speak(utterance);
//   }

  function closePanel() {
    document.querySelector('.additional-feature-panel').style.display = 'none';
  }

  function resetSettings() {
    wrapper.className = 'wrapper';
  }

//   function loadSettings() {
//     if (localStorage.getItem('imagesDisabled') === 'true') toggleImages(false);
//     if (localStorage.getItem('soundEnabled') === 'true') toggleSound(true);
    
//     const savedSize = localStorage.getItem('textSize');
//     if (savedSize) setTextSize(savedSize);
    
//     const savedTheme = localStorage.getItem('colorTheme');
//     if (savedTheme) setColorTheme(savedTheme);
//   }
});