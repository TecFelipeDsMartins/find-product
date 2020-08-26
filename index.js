// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


function adjacentElementsProduct(inputArray) {
    let arrayProducts = inputArray.map((el, idx) => {
      idx++    
      return el * inputArray[idx]
    })
    arrayProducts.pop()
    const bigest = arrayProducts.reduce((a,b)=>{
     return Math.max(a,b)
    })

    return bigest
    
}   
let input = [-1, -2]
console.log(adjacentElementsProduct(input))