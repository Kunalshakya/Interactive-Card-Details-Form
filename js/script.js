const frontNumber = document.getElementById("frontCardNumber");
const frontName = document.getElementById("frontCardName");
const frontDateMonth = document.getElementById("frontCardExpMonth");
const frontDateYear = document.getElementById("frontCardExpYear");
const backCardCvc = document.getElementById("backCardCvc");
const cardName = document.getElementById("name");
const cardNumber = document.getElementById("cardNumber");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const btn = document.getElementById("btn");
const continueBtn = document.getElementById("continueBtn");
const nameError = document.getElementById("nameError");
const numberError = document.getElementById("numberError");
const dateError = document.getElementById("dateError");
const cvcError = document.getElementById("cvcError");

// Add Values to Card Image

cardName.onkeyup = () => {
  if (cardName.value !== "") {
    frontName.textContent = cardName.value;
  } else {
    frontName.textContent = "Jane Appleseed";
  }
};

cardNumber.onkeyup = () => {
  if (cardNumber.value !== "") {
    frontNumber.textContent = cardNumber.value;
  } else {
    frontNumber.textContent = "0000 0000 0000 0000";
  }
};

month.onkeyup = () => {
  if (month.value !== "") {
    frontDateMonth.textContent = month.value;
  } else {
    frontDateMonth.textContent = "00";
  }
};

year.onkeyup = () => {
  if (year.value !== "") {
    frontDateYear.textContent = year.value;
  } else {
    frontDateYear.textContent = "00";
  }
};

cvc.onkeyup = () => {
  if (cvc.value !== "") {
    backCardCvc.textContent = cvc.value;
  } else {
    backCardCvc.textContent = "000";
  }
};

// Display Errors

btn.addEventListener("click", () => {
  
  // Name Error

  if (/[a-zA-Z]/gi.test(cardName.value) == false) {
    nameError.style.display = "block";
    cardName.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    nameError.style.display = "none";
    cardName.style.border = "2px solid rgba(238,130,238)";
  }

  // Card Number Error

  if (/\d{16}/gi.test(cardNumber.value) == false) {
    numberError.style.display = "block";
    cardNumber.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    numberError.style.display = "none";
    cardNumber.style.border = "2px solid rgba(238,130,238)";
  }

  // Date Error

  if (
    /\d{2}/gi.test(month.value) == false ||
    /\d{2}/gi.test(year.value) == false
  ) {
    dateError.style.display = "block";
    month.style.border = "2px solid rgba(255, 0, 0, 0.3)";
    year.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    dateError.style.display = "none";
    month.style.border = "2px solid rgba(238,130,238)";
    year.style.border = "2px solid rgba(238,130,238)";
  }

  // CVC Error

  if (/\d{3}/gi.test(cvc.value) == false) {
    cvcError.style.display = "block";
    cvc.style.border = "2px solid rgba(255, 0, 0, 0.3)";
  } else {
    cvcError.style.display = "none";
    cvc.style.border = "2px solid rgba(238,130,238)";
  }

  if (
    nameError.style.display != "block" &&
    numberError.style.display != "block" &&
    dateError.style.display != "block" &&
    cvcError.style.display != "block"
  ) {
    document.querySelector(".card-info").style.display = "none";
    document.querySelector(".thank-you").style.display = "flex";
  }

});

continueBtn.addEventListener("click", () => {
  window.location.reload();
});