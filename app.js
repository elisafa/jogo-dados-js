const h1 = document.querySelector("h1")
const containerPlayer1 = document.querySelector(".player1 img")
const containerPlayer2 = document.querySelector(".player2 img")

const aleatorio = () => {
  return Math.floor(Math.random() * 6)+1
}
const numeroPlay2 = aleatorio()
const numeroPlay1 = aleatorio()

if (numeroPlay1 > numeroPlay2){
  h1.innerHTML = "Jogador 1 venceu"
} else if (numeroPlay2 > numeroPlay1){
  h1.innerHTML = "Jogador 2 venceu"
}else {
  h1.innerHTML = "Empatou"
}
let randomImage1 = "./images/dice" + numeroPlay1 + ".png"
let randomImage2 = "./images/dice" + numeroPlay2 + ".png"

console.log(containerPlayer1.setAttribute("src", randomImage1))
console.log(containerPlayer2.setAttribute("src", randomImage2))



// switch (numeroPlay1){
//   case 1:
//     const d1 = document.querySelector(".imgp1-1").style.display = "block"
//     break;
//   case 2:
//     const d2 = document.querySelector(".imgp1-2").style.display = "block"
//     break;
//   case 3:
//     const d3 = document.querySelector(".imgp1-3").style.display = "block"
//     break;
//   case 4:
//     const d4 = document.querySelector(".imgp1-4").style.display = "block"
//     break;
//   case 5:
//     const d5 = document.querySelector(".imgp1-5").style.display = "block"
//     break;
//   case 6:
//     const d6 = document.querySelector(".imgp1-6").style.display = "block"
//     break;
//   default:
//     console.log("valor inexistente")
// }
// switch (numeroPlay2){
//   case 1:
//     const d1 = document.querySelector(".imgp2-1").style.display = "block"
//     break;
//   case 2:
//     const d2 = document.querySelector(".imgp2-2").style.display = "block"
//     break;
//   case 3:
//     const d3 = document.querySelector(".imgp2-3").style.display = "block"
//     break;
//   case 4:
//     const d4 = document.querySelector(".imgp2-4").style.display = "block"
//     break;
//   case 5:
//     const d5 = document.querySelector(".imgp2-5").style.display = "block"
//     break;
//   case 6:
//     const d6 = document.querySelector(".imgp2-6").style.display = "block"
//     break;
//   default:
//     console.log("valor inexistente")
// }