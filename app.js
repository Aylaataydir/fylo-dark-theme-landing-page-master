// -------- Intersection Observer --------

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll(
  '.hero-container, .box, .productive-container, .comments-box, .access-container, .boxes'
).forEach(el => observer.observe(el));






// EMAIL VALIDATION 

const emailInput = document.querySelector(".email-input");
const emailBtn = document.querySelector(".email-btn");
const errorMsg = document.querySelector(".error");


const emailValidation = (email) => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


emailBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue == "") {

        errorMsg.classList.add("show")

    } else if (!emailValidation(emailValue)) {

        errorMsg.classList.add("show")

    } else {
        alert("email basariyla gönderildi.")
    }
})


emailInput.addEventListener("click", () => {
    errorMsg.classList.remove("show");
})


