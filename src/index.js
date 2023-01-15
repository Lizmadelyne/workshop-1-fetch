/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')
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
                // crear un titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        //crear precio
        const price = document.createElement('div');
        price.textContent = item.price;
        //crear el contenedor que va a ir dentro del body
        const container = document.createElement('div');
        container.append(imagen, title, price);

        todosLosItems.push(container);
     
      //  console.log(item.name); era para ver los datos y me funciono
    });
    //document.body.append(...todosLosItems); esto  lo puse antes de agregar el div app en html luego lo cambie
    appNode.append(...todosLosItems);
 
});
