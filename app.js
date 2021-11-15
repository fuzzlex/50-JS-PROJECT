const buttonEl = document.querySelector("button");
const hiddenDiv = document.querySelector(".modal-opended")
const openedDiv = document.querySelector(".modal-clickopen")
const closeBtn = document.querySelector(".close-button")

buttonEl.addEventListener("click", ()=>{
    hiddenDiv.classList.toggle("hidden");
    hiddenDiv.parentElement.classList.toggle("back");
    openedDiv.classList.toggle("openedDiv");
})
closeBtn.addEventListener("click", ()=>{
    openedDiv.classList.toggle("openedDiv");
    hiddenDiv.parentElement.classList.remove("back");
    hiddenDiv.classList.toggle("hidden");
})