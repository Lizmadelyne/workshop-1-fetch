/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

const formatPrice = (price) =>{
   const newPrice = new window.Intl.NumberFormat("en-En",{
    style: "currency",
    currency :"USD",
   }).format(price);
   return newPrice
};
//web api estoy usando promesas
//aqui conecto al servidor
window
.fetch(`${baseUrl}/api/avo`)
//procesa la respuesta y convierte en json
.then((respuesta)=> respuesta.json())
//JSON - data- renderizar informacion en el navegador
.then((responsejson)=>{
      // esto lo cree de ultimo para que funcione
      const todosLosItems =[];

    responsejson.data.forEach(item => { 
        //crear la imagen
        const imagen = document.createElement('img');
        imagen.src =`${baseUrl}${item.image}`;
        imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
                // crear un titulo
        const title = document.createElement('h2');
        title.className = "text-lg";
        title.textContent = item.name;
       
        //crear precio
        const price = document.createElement('div');
        price.className = "text-gray-600";
        price.textContent = formatPrice(item.price); //esto al final aon api internacionalizacion

        //se crea un contenedor para titulo y precio
        const PriceAndTitle = document.createElement("div");
        PriceAndTitle.className= "text-center md:text-left";
        PriceAndTitle.appendChild(title);
        PriceAndTitle.appendChild(price);

        //metemos todo dentro de una tarjeta contenedora
        const card = document.createElement("div");
        card.className =  "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
        card.append(imagen, PriceAndTitle);
     
        //crear el contenedor que va a ir dentro del body
       const container = document.createElement('div');
        container.appendChild(card);

        todosLosItems.push(container);
     
      //  console.log(item.name); era para ver los datos y me funciono
    });
    //document.body.append(...todosLosItems); esto  lo puse antes de agregar el div app en html luego lo cambie
    appNode.append(...todosLosItems);
 
});
