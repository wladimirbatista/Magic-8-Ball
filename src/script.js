import {Player} from "./../src/models/Player.js"

const btn = document.getElementById("btn")

btn.addEventListener("click", Player.jogar)

const resetBtn = document.getElementById("btn-reset");

resetBtn.addEventListener("click", Player.reset)

const modal = document.querySelector('.containerModal')
const removeModal = document.querySelector('.containerModal .modal button.removedModal')

const hiddenModal = () => {
    modal.classList.remove('showModal')
}

removeModal.addEventListener('click', hiddenModal)


