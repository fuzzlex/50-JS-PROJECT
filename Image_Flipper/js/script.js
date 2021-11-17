const buttons = document.querySelectorAll("button");
let arr = [];
let x = 0;

for(i = 0;i < 10;i++){
    let num = Math.floor(Math.random() * 100) ;
    arr.push(num);
}
buttons.forEach((e)=>{

    e.addEventListener("click", ()=>{


        

        if(e.textContent == "NEXT"){
            e.parentElement.parentElement.style.background = `url('https://picsum.photos/id/${arr[x]}/600/400') no-repeat center`;
            x++;
            if(x == arr.length)x = 0;
        }
        else if(e.textContent == "PREVIOUS"){
            if(x > 0)x--;
            if(x == 0)x = arr.length;
            e.parentElement.parentElement.style.background = `url('https://picsum.photos/id/${arr[x-1]}/600/400') no-repeat center`;
        }
    })
})
