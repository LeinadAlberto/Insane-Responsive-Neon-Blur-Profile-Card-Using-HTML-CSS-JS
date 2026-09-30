/*=============== SHOW CHAT ===============*/
const btnsChat = document.querySelectorAll('.btn-chat')

btnsChat.forEach( btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card__profile')
        const cardChat = card.querySelector('.card__chat-social')

        cardChat.classList.toggle('show-chat')
    })
})

/*=============== SHOW INFO ===============*/
const btnsInfo = document.querySelectorAll('.btn-info')

btnsInfo.forEach( btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card__profile')
        const cardInfo = card.querySelector('.card__info-data')
        const btnInfoIcon = btn.querySelector('.btn-info-icon')

        cardInfo.classList.toggle('show-info')
        btnInfoIcon.classList.toggle('info-icon-rotate')
    })
})

/*=============== GSAP ANIMATION ===============*/

