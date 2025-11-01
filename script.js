const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yes = document.querySelector(".yes")
const no = document.querySelector(".no")



yes.addEventListener("click", () => {
    question.innerHTML = "I love you!"
    gif.src="flower.gif"
})

no.addEventListener("mouseover", () => {
    const norect = no.getBoundingClientRect();
    const maxX = window.innerWidth - norect.width;
    const maxY = window.innerHeight - norect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    
    no.style.left = randomX + "px";
    no.style.top = randomY + "px";
})