import {dataAnswer} from "/src/models/dataAnswer.js"

class Player {

    static jogar (){
        const input = document.getElementById("input");
        const eightBall = document.getElementById("eight-ball");
        const trianguleAnswer = document.getElementById("trianguleAnswer")
        const answer = document.getElementById("printAnswer");
        const modal = document.querySelector('.containerModal')
        
        if(input.value.length < 1){
            modal.classList.add('showModal')
        } else {
            eightBall.style.display = "none"
            trianguleAnswer.style.display = "flex"
            let resp = Math.floor(Math.random() * Math.floor(dataAnswer.length))
            answer.innerText = dataAnswer[resp]
        }
    }

    static reset(){
        document.location.reload(true)
    }
}

export {Player}