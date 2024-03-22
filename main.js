document.addEventListener("DOMContentLoaded", function() {
  const message = document.getElementById("message");
  const flower = document.querySelector(".flower");

  flower.addEventListener("animationend", function() {
      message.classList.remove("hidden");
  });
});

