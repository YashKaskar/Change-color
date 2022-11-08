const button = document.querySelector('#btn');
const h1 = document.querySelector('h1');
button.addEventListener('click', function() {    
    
    const newColor = newRandomColor()  

    document.body.style.backgroundColor = newColor;
    h1.innerText = `Your Color Code is ${newColor}`
    h1.style.color = 'white';
})


const newRandomColor = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

     return `rgb(${r}, ${g}, ${b})`
}
 
