let myForm = document.querySelector("#myForm")

/* btn.addEventListener("click", (e)=>{
    alert("Hola mundo");
}) */

/* btn.addEventListener("click", async(e)=>{
    let peticion = await fetch=("http://localhost:4001/comments")
}) */

myForm.addEventListener("submit", async(e)=>{
    /* console.log(e.submitter.dataset.accion); */

    e.preventDefault();

    let accion = e.submitter.dataset.accion;
    if (accion=="listar"){
        let peticion = await fetch("http://localhost:4001/comments");
        let datos = await peticion.json();
        console.log(datos);
    }else if(accion=="enviar"){

    }

    /* if (e.submitter.dataset.accion == "listar"){
    } */
    
})