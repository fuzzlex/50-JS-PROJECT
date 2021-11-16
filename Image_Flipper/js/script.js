const buttons = document.querySelectorAll("button");

buttons.forEach((e)=>{
    e.addEventListener("click", ()=>{
        let num = Math.floor(Math.random() * 100) 

        if(e.textContent == "NEXT"){
            e.parentElement.parentElement.style.background = `url('https://picsum.photos/id/${num}/600/400') no-repeat center`;
        }
        else if(e.textContent == "PREVIOUS"){
            e.parentElement.parentElement.style.background = `url('https://picsum.photos/id/${num-1}/600/400') no-repeat center`;
        }
    })
})
