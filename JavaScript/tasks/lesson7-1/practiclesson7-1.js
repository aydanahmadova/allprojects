// const myWord = document.getElementById("hava")


// function getKeyDown(event) {
//     console.log(event.target.value);
//     console.log(myWord);

//     myWord.innerHTML = event.target.value
// }

const block = document.getElementById('block')

function Click(event) {
    // block.style.backgroundColor = 'yellow'

    if(!block.style.backgroundColor){
        block.style.backgroundColor = 'yellow'
    }else if(block.style.backgroundColor == 'red'){
        block.style.backgroundColor = 'yellow'
    }else{
        block.style.backgroundColor = 'red'
    }
}