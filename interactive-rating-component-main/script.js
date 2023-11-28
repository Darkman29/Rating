document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.querySelector(".container");
    const thanksContainer = document.querySelector(".container2");
    const submitButton = document.getElementById("submitid");
    const rateAgainButton = document.getElementById("againid");
    const ratingSpan = document.getElementById("num");
    const rates = document.querySelectorAll(".Rate");
  
    submitButton.addEventListener("click", () => {
      thanksContainer.classList.remove("hidden");
      mainContainer.style.display = "none";
    });
  
    // Add an event listener for the "Rate Again" button if needed
    rateAgainButton.addEventListener("click", () => {
      thanksContainer.classList.add("hidden");
      mainContainer.style.display = "block"; // Assuming you want to show the main container again
    });
  
    rates.forEach((rate) => {
      rate.addEventListener("click", () => {
        ratingSpan.textContent = rate.textContent;
      });
    });
  });