let raio
let circum
let circo = document.getElementById('jscircum').value
const PI = 3.14;


document.getElementById("mybutton").onclick = function() {
    raio = document.getElementById("myinput").value
    raio = Number(raio)
    circum = 2 * 3.14 * raio
    circo = circum
    document.getElementById('jscircum').textContent = `${circo}`
    
}

