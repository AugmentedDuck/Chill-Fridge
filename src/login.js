function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form-message");

  messageElement.textContent = message;
  messageElement.classList.remove("form-message-success", "form-message-error")
  messageElement.classList.add(`form-message-${type}`)
}

function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
  h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};


function setInputError(inputElement, message) {
  inputElement.classList.add("form-input-error");
  inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form-input-error");
  inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";

}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("form-hidden");
    createAccountForm.classList.remove("form-hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form-hidden");
    createAccountForm.classList.add("form-hidden");
  });

  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    if(cyrb53(document.getElementById("loginUsername").value) == "3333027681311381" && cyrb53(document.getElementById("loginPassword").value) == "6013280038036543"){
      setFormMessage(loginForm, "success", "Yay")
      location.replace('/Chill-Fridge/main.html');
    } else {
      setFormMessage(loginForm, "error", "Invalid username or password")
    }
  });

  document.querySelectorAll(".form-input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
      if(e.target.id == "signupUsername" && e.target.value.length > 0 && e.target.value.length < 5){
        setInputError(inputElement, "Username must be at least 5 characters in length");
      }
    });

    inputElement.addEventListener("input", e => {
      clearInputError(inputElement);
    });
  });
});
