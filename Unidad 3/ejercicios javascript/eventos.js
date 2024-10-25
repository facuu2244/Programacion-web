//inciso 1
function saludar(){
    let saludo=document.getElementById("saludo");
    saludo.textContent="¡Hola!";
}


//inciso 2
setTimeout(() => {
    let header=document.getElementsByTagName("header")[0]; 
    let footer=document.getElementsByTagName("footer")[0]; 
    header.style.backgroundColor="lightblue";
    footer.style.backgroundColor="lightblue";
}, 5000);


//inciso 3
let boton_consulta=document.getElementById("getDataBtn");
boton_consulta.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(respuesta=>{
            if(respuesta.ok==false){
                throw new Error("Error en la respuesta"+respuesta.statusText);
            }
            return respuesta.json();
        })
        .then(datos=>{
            let lista=document.createElement("ul")//creo la lista
            document.body.appendChild(lista)

            //recorro los 10 primeros elementos
            for (let i = 0; i < 10; i++) {
                const elemento=datos[i]
                console.log(elemento)

                let item=document.createElement("li")
                item.textContent=`ID: ${elemento.id}, Título: ${elemento.title}, Contenido(cuerpo): ${elemento.body}`
                document.body.appendChild(item)
            }
        })
        .catch(error=>{
            console.log("Hubo un error con la operacion fetch: ", error)
        });
});