const modalButton = document.querySelector('.promo-btn')
const modal = document.querySelector('.modal')

modalButton.addEventListener('click', () => {
    modal.classList.add('active')
})

modal.addEventListener('click', () => {
    modal.classList.remove('active')
})