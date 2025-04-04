// СКРИПТ ДЛЯ ОТКРЫТИЯ КОНТЕНТА ПО КНОПКЕ(ПО ТИПУ БЛООКА НАШИ ФИЛИАЛЫ)
// ГЛАВНОЕ ПРАВИЛО, ЧТОБ НЕ СОВПАДАЛИ АТРИБУТЫ КНОПОК И КОНТЕНТОВ РАЗНЫХ БЛОКОВ

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-content-focus]");
  const contents = document.querySelectorAll("[data-content-id]");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log(button);
      const targetContentId = this.getAttribute("data-content-focus");
      console.log(targetContentId);

      buttons.forEach((btn) => btn.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      this.classList.add("active");
      Array.from(contents)
        .find(
          (content) =>
            content.getAttribute("data-content-id") === targetContentId
        )
        ?.classList.add("active");
    });
  });

  const defaultActiveButton = document.querySelector(
    "[data-content-focus].active"
  );

  if (defaultActiveButton) {
    const defaultContentId =
      defaultActiveButton.getAttribute("data-content-focus");
    Array.from(contents)
      .find(
        (content) =>
          content.getAttribute("data-content-id") === defaultContentId
      )
      ?.classList.add("active");
  }
});
