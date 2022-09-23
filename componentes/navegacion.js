class Navegacion extends HTMLElement{
    constructor(){
        super();
        const shadow= this.attachShadow({mode:'open'});
        const divContent= document.createElement("div");
    }

    conectedCallBack(){
        const url= this.getAttribute("capitulos.json");
        const field= this.getAttribute("capitulos");
        this.divContent.innerHTML="";
        shadow.appendChild(this.div);

        fetch(url)
        .then(response=> response.json())
        .then(json=>{
            json.forEach(element => {
                this.divContent.innerHTML+= '<div>${element[field]}</div>'
            });
        })
    }
}
window.customElements.define('navegacion-component',Navegacion);