sendBtn = document.querySelector('#sendBtn');
messageIn = document.querySelector('#messageIn');
messageOut = document.querySelector('#messageOut');
clearBtn = document.querySelector('.clearBtn')
sendBtn.addEventListener('click',sendMsg);

function sendMsg(){

    let content = messageIn.value;
    // console.log(content)
    if(content === ''){
        alert('please enter valid value. Current Value is empty')
    }else{
   messageOut.innerHTML = content ;
   messageIn.value = '';

    }
}
clearBtn.addEventListener('click',()=>{
  messageOut.innerText = ''
})