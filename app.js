// -------- Intersection Observer --------


const ANIMATION_CLASS = 'animate-in';

const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};


function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(ANIMATION_CLASS);

            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, observerOptions);



const animateElements = document.querySelectorAll(
    '.hero-container, .box, .productive-container, .comments-box, .access-container, .boxes'
);


animateElements.forEach(el => {
    observer.observe(el);
});



// FORM VALIDATION 


// // Email input ve button elementlerini seç
// const emailInput = document.querySelector('#email'); // ID'nizi buraya yazın
// const submitButton = document.querySelector('#submit-btn'); // Button ID'nizi buraya yazın
// const errorMessage = document.querySelector('#error-message'); // Hata mesajı için element

// // Email validation fonksiyonu
// function validateEmail(email) {
//   // Basit regex pattern
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailPattern.test(email);
// }

// // Button'a tıklandığında
// submitButton.addEventListener('click', (e) => {
//   e.preventDefault(); // Formun submit olmasını engelle

//   const emailValue = emailInput.value.trim();

//   if (emailValue === '') {
//     // Boş alan kontrolü
//     errorMessage.textContent = 'Email adresi boş bırakılamaz!';
//     errorMessage.style.display = 'block';
//     emailInput.classList.add('error');
//   } else if (!validateEmail(emailValue)) {
//     // Geçersiz email formatı
//     errorMessage.textContent = 'Lütfen geçerli bir email adresi girin!';
//     errorMessage.style.display = 'block';
//     emailInput.classList.add('error');
//   } else {
//     // Başarılı
//     errorMessage.style.display = 'none';
//     emailInput.classList.remove('error');
//     alert('Email başarıyla gönderildi!');
//     // Burada form submit işlemini yapabilirsiniz
//   }
// });

// // Input'a yazarken hata mesajını temizle
// emailInput.addEventListener('input', () => {
//   errorMessage.style.display = 'none';
//   emailInput.classList.remove('error');
// });


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


