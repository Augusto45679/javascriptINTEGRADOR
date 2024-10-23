// storeView.js
import {handGetProductLocalStorage} from "../persistence/localstorage.js";
import {setProductoActivo} from "../../main.js";
import {openModal} from "./modal.js";
// ============================================================
export const handleGetProductsToStore = () => {
    const products = handGetProductLocalStorage();
    handleRenderList(products);
};
export const handleRenderList = (productosIn) => {

    const burguers = productosIn.filter((el)=> el.categoria === "hamburguesas");
    const papas = productosIn.filter((el)=> el.categoria === "papas");
    const gaseosas = productosIn.filter((el)=> el.categoria === "gaseosas");

    const renderProductGroup=(productos,title) => {
        if(productos.length > 0){
            const productosHTML = productos.map((producto,index) => {
                return`
              <div class="containerTargetItem" id="product-${producto.categoria}-${index}">
                  <div>
                      <img src='${producto.image}'/>
                      <div >
                      <h2 >${producto.name}</h2>
                      </div>
                      <div class="tagetProps" >
                          <p>Precio:<b>$ ${producto.prize}</b></p>
                          <p>Categoria:<b>$ ${producto.categoria}</b></p>
                      </div>
                  </div>
              </div>
              `;
            });
            return`
          <section class="sectionStore"> 
           <h3>${title}</h3>
          <div class ="containerProductStore"> 
          ${productosHTML.join(' ')}
          </div>
          
          </section>
          `
        }else {
            return " ";
        }
    };
    // aca vamos a renderizar cada producto dentro de su categoria
    const appContainer = document.getElementById('storeContainer');

    appContainer.innerHTML = ` 
    ${renderProductGroup(burguers, "hamburguesas")}
    ${renderProductGroup(papas, "papas")}
    ${renderProductGroup(gaseosas, "gaseosas")}
    `;

    const addEvent = (productsIn) => {
        productsIn.forEach((element,index) => {
            const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
            productContainer.addEventListener("click", (e) => {
                setProductoActivo(element);
                openModal();
            })
        });
    }
    addEvent(burguers);
    addEvent(papas);
    addEvent(gaseosas);
}