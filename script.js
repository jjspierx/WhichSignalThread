const form = document.querySelector("#message-form");
const dialog = document.querySelector("#confirmation-dialog");
const recipientStep = document.querySelector("#recipient-step");
const sendStep = document.querySelector("#send-step");
const threadChoice = document.querySelector("#thread-choice");
const rickRollUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  recipientStep.hidden = false;
  sendStep.hidden = true;
  dialog.showModal();
});

document.querySelectorAll("[data-include-glafkes]").forEach((button) => {
  button.addEventListener("click", () => {
    const includesGlafkes = button.dataset.includeGlafkes === "true";

    threadChoice.textContent = includesGlafkes
      ? "Use 600 Block Perrin thread"
      : "Use Perrin Platoon (minus Glafke's).";
    recipientStep.hidden = true;
    sendStep.hidden = false;
    sendStep.querySelector("button").focus();
  });
});

document.querySelectorAll("[data-send-now]").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.assign(rickRollUrl);
  });
});
