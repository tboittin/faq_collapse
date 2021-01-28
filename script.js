const questions = document.querySelectorAll('.faq')

questions.forEach((question) => {
  const buttonToggle = question.querySelector('.faq-toggle')
  buttonToggle.addEventListener('click', () => {
    question.classList.toggle('active')
  })
})

// const toggles = document.querySelectorAll('.faq-toggle')

// toggles.forEach(toggle => {
//   toggle.addEventListener('click', () => {
//     toggle.parentNode.classList.toggle('active')
//   })
// })