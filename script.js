let todolist = document.querySelectorAll(".todoslist");
todolist.forEach(tods=>{
    let isClicked = true;
    tods.addEventListener("click", ()=>{
        if(isClicked){    
        tods.childNodes[3].style.display = "block";
        tods.childNodes[1].childNodes[3].style.transform = "rotate(180deg)"
        isClicked= false;
        }
        else{
        tods.childNodes[3].style.display = "none";
        tods.childNodes[1].childNodes[3].style.transform = "rotate(0deg)"
        isClicked= true;
            
        }
    })
})



let menu = document.querySelector(".menu i");
let navbarSlider = document.querySelector(".navbarSlider");
let close = document.querySelector(".navbarSlider ul i");

close.addEventListener("click", () =>{
    navbarSlider.style.right = "-20%";
})


menu.addEventListener("click", () =>{
    navbarSlider.style.right = "0%";
})