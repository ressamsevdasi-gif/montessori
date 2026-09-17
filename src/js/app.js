const activityButtons = document.querySelectorAll("[data-activity]");

activityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".activity").forEach((item) => {
      item.classList.remove("is-selected");
    });

    button.closest(".activity")?.classList.add("is-selected");
  });
});

document.querySelectorAll("[data-nav]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-nav]").forEach((item) => {
      item.classList.remove("is-active");
    });

    button.classList.add("is-active");
  });
});
