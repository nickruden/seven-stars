document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");

  const imageOnBtn = document.getElementById("on-images");
  const imageOffBtn = document.getElementById("off-images");

  const textSmallBtn = document.getElementById("small-size-texts");
  const textMediumBtn = document.getElementById("medium-size-texts");
  const textLargeBtn = document.getElementById("large-size-texts");

  const themeButtons = {
    white: document.getElementById("white-color-theme"),
    yellow: document.getElementById("yellow-color-theme"),
    blackWhite: document.getElementById("blackWhite-color-theme"),
    blackGreen: document.getElementById("blackGreen-color-theme"),
    blue: document.getElementById("blue-color-theme"),
  };

  const soundOnBtn = document.getElementById("on-sound");
  const soundOffBtn = document.getElementById("off-sound");

  const closePanelBtn = document.querySelector(
    ".additional-feature-panel__close"
  );
  const normalVersionBtn = document.querySelector(
    ".additional-feature-panel__button-off"
  );
  const controlPanelBtn = document.querySelector(".button-add-features");
  const panel = document.querySelector(".additional-feature-panel");

  imageOnBtn.addEventListener("click", () => {
    toggleImages(true);
    localStorage.setItem("showImage", true);
  });

  imageOffBtn.addEventListener("click", () => {
    toggleImages(false);
    localStorage.setItem("showImage", false);
  });

  textSmallBtn.addEventListener("click", () => setTextSize("small"));
  textMediumBtn.addEventListener("click", () => setTextSize("medium"));
  textLargeBtn.addEventListener("click", () => setTextSize("large"));

  Object.keys(themeButtons).forEach((theme) => {
    themeButtons[theme].addEventListener("click", () => {
      setColorTheme(theme);
      localStorage.setItem("colorTheme", theme);
    });
  });

  soundOnBtn?.addEventListener("click", () => {
    toggleSound(true);
    localStorage.setItem("soundEnabled", "true");
  });

  soundOffBtn?.addEventListener("click", () => {
    toggleSound(false);
    localStorage.setItem("soundEnabled", "false");
  });

  closePanelBtn.addEventListener("click", closePanel);
  controlPanelBtn.addEventListener("click", togglePanel);
  normalVersionBtn.addEventListener("click", resetSettings);

  // управление картинками
  function toggleImages(show) {
    console.log(show);
    if (show) {
      wrapper.classList.remove("no-images");
    } else {
      wrapper.classList.add("no-images");
    }
  }

  // управление размером текста
  function setTextSize(size) {
    wrapper.classList.remove("text-small", "text-medium", "text-large");
    wrapper.classList.add(`text-${size}`);
    localStorage.setItem("textSize", size);

    [textSmallBtn, textMediumBtn, textLargeBtn].forEach((btn) =>
      btn.classList.remove("active")
    );
    if (size === "small") textSmallBtn.classList.add("active");
    if (size === "medium") textMediumBtn.classList.add("active");
    if (size === "large") textLargeBtn.classList.add("active");
  }

  // управление цветовой темой
  function setColorTheme(theme) {
    wrapper.classList.remove(
      "theme-white",
      "theme-yellow",
      "theme-blackWhite",
      "theme-blackGreen",
      "theme-blue"
    );
    wrapper.classList.add(`theme-${theme}`);

    Object.values(themeButtons).forEach((btn) =>
      btn.classList.remove("active")
    );
    themeButtons[theme].classList.add("active");
  }

  function toggleSound(enabled) {
    wrapper.classList.toggle("sound-enabled", enabled);
    if (enabled) {
      enableSpeechDelegation();
    } else {
      disableSpeechDelegation();
    }
  }

  let currentSpeakHandler = null;

  function enableSpeechDelegation() {
    disableSpeechDelegation();

    currentSpeakHandler = function (e) {
      if (!wrapper.classList.contains("sound-enabled")) return;

      const target = e.target;

      const text = getElementDirectTextOrDirectChildrenText(target);

      if (!text || text.length < 2 || text === lastSpokenText) return;

      lastSpokenText = text;
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ru-RU";
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      window.speechSynthesis.speak(utterance);
    };

    wrapper.addEventListener("mouseenter", currentSpeakHandler, true);
  }

  function getElementDirectTextOrDirectChildrenText(el) {
    let text = "";

    // Собственный текст узла (исключаем текст из детей)
    for (const node of el.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    }

    if (text.trim().length >= 2) return text.trim();

    // Проверяем ТОЛЬКО прямых детей, не потомков
    for (const child of el.children) {
      const childText = Array.from(child.childNodes)
        .filter((n) => n.nodeType === Node.TEXT_NODE)
        .map((n) => n.textContent)
        .join("")
        .trim();

      if (childText.length >= 2) return childText;
    }

    return "";
  }

  function disableSpeechDelegation() {
    if (currentSpeakHandler) {
      wrapper.removeEventListener("click", currentSpeakHandler);
      wrapper.removeEventListener("mouseenter", currentSpeakHandler, true);
      currentSpeakHandler = null;
    }
  }

  let lastSpokenText = "";

  function getElementTextStrict(el) {
    if (el.alt) return el.alt;
    if (el.ariaLabel) return el.ariaLabel;
    if (el.getAttribute("aria-label")) return el.getAttribute("aria-label");

    let text = el.innerText || el.textContent || "";
    return text.trim();
  }

  function closePanel() {
    panel.classList.add("--displayNone");
  }

  function togglePanel() {
    panel.classList.toggle("--displayNone");
  }

  function resetSettings() {
    wrapper.className = "wrapper";
    localStorage.clear();

    setTextSize("small");
    toggleImages(true);
    localStorage.removeItem("showImage");
    imageOffBtn.classList.remove("active");
    imageOnBtn.classList.add("active");

    Object.values(themeButtons).forEach((btn) => {
      console.log(btn);
      btn.classList.remove("active");
    });

    toggleSound(false);
    localStorage.removeItem("soundEnabled");
    soundOffBtn.classList.add("active");
    soundOnBtn.classList.remove("active");

    closePanel();
  }

  function loadSettings() {
    // Картинки
    if (localStorage.getItem("showImage") === "true") {
      toggleImages(true);
      imageOffBtn.classList.add("active");
      imageOnBtn.classList.remove("active");
    } else {
      toggleImages(false);
      imageOnBtn.classList.add("active");
      imageOffBtn.classList.remove("active");
    }

    // Размер текста
    const size = localStorage.getItem("textSize") || "small";
    setTextSize(size);

    // Тема
    const theme = localStorage.getItem("colorTheme");
    if (theme && themeButtons[theme]) {
      setColorTheme(theme);
    }

    // Звук
    if (localStorage.getItem("soundEnabled") === "true") {
      toggleSound(true);
      soundOnBtn.classList.add("active");
      soundOffBtn.classList.remove("active");
    } else {
      toggleSound(false);
      soundOffBtn.classList.add("active");
      soundOnBtn.classList.remove("active");
    }
  }

  loadSettings();
});
