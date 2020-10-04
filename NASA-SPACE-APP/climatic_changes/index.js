let cards = document.querySelectorAll(".cards")
// console.log(cards)
cards[0].onclick = () => {
    let aerosol = document.querySelector(".aerosol")
    aerosol.classList.add("article_show")
}

cards[1].onclick = () => {
    let how = document.querySelector(".how")
    how.classList.add("article_show")
}
cards[2].onclick = () => {
    let ozone = document.querySelector(".ozone")
    ozone.classList.add("article_show")
}
cards[3].onclick = () => {
    let condition = document.querySelector(".condition")
    condition.classList.add("article_show")
}

cards[4].onclick = () => {
    let disaster = document.querySelector(".disaster")
    disaster.classList.add("article_show")
}
cards[5].onclick = () => {
    let warming = document.querySelector(".warming")
    warming.classList.add("article_show")
}
