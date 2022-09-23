function previo(){
    console.log("Presionaste Previo");
    let ir= 0;
    async function populate() {
        const requestURL = "capitulos.json";
        const request = new Request(requestURL);
    
        const response = await fetch(request);
        const Capitulos = await response.json();
    
        populateData(Capitulos);
    
    }   

    function populateData(obj){
        const Iframe = document.querySelector('iframe');
        const identificador= Iframe.getAttribute('src');
        const capitulos = obj.capitulos;
        
        for (const ID of capitulos){
            if(`capitulo/${ID.capitulo}`==identificador){
                console.log("Valor de IR previo a la suma",ir);
                ir= parseInt(ID.id)-1;
            }
        }
        console.log("valor de IR con valor sumado: ",ir);
        for (const busqueda of capitulos){
            if(busqueda.id==ir){
                Iframe.setAttribute('src',`capitulo/${busqueda.capitulo}`);
            }
        }
    }
    
    populate();
}
function siguiente(){
    console.log("Presionaste Siguiente");
    let ir= 0;
    async function populate() {
        const requestURL = "capitulos.json";
        const request = new Request(requestURL);
    
        const response = await fetch(request);
        const Capitulos = await response.json();
    
        populateData(Capitulos);
    
    }   

    function populateData(obj){
        const Iframe = document.querySelector('iframe');
        const identificador= Iframe.getAttribute('src');
        const capitulos = obj.capitulos;
        
        for (const ID of capitulos){
            if(`capitulo/${ID.capitulo}`==identificador){
                console.log("Valor de IR previo a la suma",ir);
                ir= parseInt(ID.id)+1;
            }
        }
        console.log("valor de IR con valor sumado: ",ir);
        for (const busqueda of capitulos){
            if(busqueda.id==ir){
                Iframe.setAttribute('src',`capitulo/${busqueda.capitulo}`);
            }
        }
    }
    
    populate();
}