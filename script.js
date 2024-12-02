document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");
  const total = document.getElementById("total");

  options.forEach(option => {
    const radio = option.querySelector('input[type="radio"]');
    const customizeSection = option.querySelector(".customize");

    radio.addEventListener("change", () => {
      // Collapse all other options
      options.forEach(opt => opt.classList.remove("expanded"));

      // Expand the selected option
      option.classList.add("expanded");

      // Update total price dynamically
      total.textContent = radio.value === "1" ? "$10.00 USD" : 
                          radio.value === "2" ? "$18.00 USD" : "$24.00 USD";
    });
  });
});