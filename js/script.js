const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const infoDerecha = document.getElementById("infoDerecha");
const derecha = document.getElementById("derecha");

infoDerecha
//a - ai 
//e -enter
//i - imes 
//o - ober 
//u - ufat

let reemplazar = [
    ["e","enter"],
    ["o", "ober"],    
    ["i", "imes"], 
    ["a", "ai"],
    ["u", "ufat"],    
]

const replace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    muneco.classList.add("oculto");

    ingresoTexto.value= "";
    infoDerecha.style.display = "none";
    botonCopiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");     

}

const reset = () => {

    mensajeFinal.innerHTML = "";

    muneco.classList.remove("oculto");

    infoDerecha.style.display = "block";  
    botonCopiar.style.display = "none";
    derecha.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");     
    ingresoTexto.focus();    
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != "") {    
        function encriptar(newText) {
            for (let i = 0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1])
                };
            };
            return newText
        };

        //const textoEncriptado = encriptar(texto);   
        replace(encriptar(texto)); 
    }else {
        alert("Ingrese el texto que deseas encriptar");
        reset(); 
    }    
 
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if (texto != "") {     
        function desencriptar(newText) {
            for (let i = 0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0])
                };
            };
            return newText
        };
        replace(desencriptar(texto)); 
    }else {
        alert("Ingrese el texto que deseas desencriptar");
        reset();        
    }   
});

botonCopiar.addEventListener("click", () => {

    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado"); 
    reset();

})