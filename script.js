const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const phone = input.value.trim();
  if (phone === "") {
    alert("Please provide a phone number");
    return;
  }

  const isValid = validateUSPhone(phone);
  resultDiv.textContent = `${isValid ? "Valid" : "Invalid"} US number: ${phone}`;
});

clearBtn.addEventListener("click", () => {
  resultDiv.textContent = "";
  input.value = "";
});

function validateUSPhone(str) {
  const validPattern = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  if (!validPattern.test(str)) return false;

  // Remove all non-digit characters
  const digits = str.replace(/\D/g, "");

  // Valid lengths: 10 digits or 11 with leading 1
  if (digits.length === 10) return true;
  if (digits.length === 11 && digits[0] === "1") return true;

  return false;
}