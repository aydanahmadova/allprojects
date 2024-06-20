const inp = document.querySelector('#inp')
const btn = document.querySelector('#btn')
const restart = document.querySelector('#restart')
const initialScore = document.querySelector('#initialScore')
const errMsg = document.querySelector('#errMsg')
const maxScore = document.querySelector('#maxScore')



let score = 20
let randNum = Math.floor(Math.random()*20)
let scoreArr = []

btn.addEventListener('click',()=>{
    if(inp.value != ''){
        if(score > 0){
            if(inp.value > 20){
                errMsg.innerHTML = 'Maksimum 20'
            }else if(inp.value < 0){
                errMsg.innerHTML = 'Minimum 0'
            }else{
                if(inp.value > randNum){
                    errMsg.innerHTML = 'Vi skazali bolshe'
                    score--
                    initialScore.innerHTML = score
                }else if(inp.value < randNum){
                    errMsg.innerHTML = 'Vi skazali menshe'
                    score--
                    initialScore.innerHTML = score
                }else{
                    errMsg.innerHTML = 'You win'
                    scoreArr.push(score)
                    maxScore.innerHTML = Math.max(...scoreArr)
                }
            }
        }else{
            errMsg.innerHTML = 'Game Over'
        }
    }else{
        errMsg.innerHTML = 'Napishite chislo'
    }
})


//console.log(...[32,23,54,56,67,12,5455,55,11,11,3])

restart.addEventListener('click',()=>{
    score = 20
    initialScore.innerHTML = scorerandNum = Math.floor(Math.random()*20)
    inp.value = ''
    errMsg.innerHTML = ''
})