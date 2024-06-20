// function sevenBoom(arr) {
//     for(let i=0;i<arr.length;i++){
//         arr[i] += ""
//         if(arr[i].includes("7")){
//             return "Boom!"
//         }
//     }
//     return "there is no 7 in the array"
	
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// console.log(sevenBoom([8, 6, 33, 100]));
// console.log(sevenBoom([2, 55, 60, 97, 86]));

const again = document.querySelector('#again')
const initialScore = document.querySelector('#initialScore')
const msg = document.querySelector('#msg')
const maxScore = document.querySelector('#maxScore')
const inp = document.querySelector('#inp')
const check = document.querySelector('#check')



let score = 20
let randNum = Math.floor(Math.random()*20)
let scoreArr = []

check.addEventListener('click',()=>{
    if(inp.value != ''){
        if(score > 0){
            if(inp.value > 20){
                msg.innerHTML = 'Maksimum 20'
            }else if(inp.value < 0){
                msg.innerHTML = 'Minimum 0'
            }else{
                if(inp.value > randNum){
                    msg.innerHTML = 'Vi skazali bolshe'
                    score--
                    initialScore.innerHTML = score
                }else if(inp.value < randNum){
                    msg.innerHTML = 'Vi skazali menshe'
                    score--
                    initialScore.innerHTML = score
                }else{
                    msg.innerHTML = 'You win'
                    scoreArr.push(score)
                    maxScore.innerHTML = Math.max(...scoreArr)
                }
            }
        }else{
            msg.innerHTML = 'Game Over'
        }
    }else{
        msg.innerHTML = 'Napishite chislo'
    }
})


again.addEventListener('click',()=>{
    score = 20
    score1.innerHTML = scorerandNum = Math.floor(Math.random()*20)
    inp.value = ''
    msg.innerHTML = ''
})