// categories.js
import {handleGetProductsToStore, handleRenderList} from "./storeView.js";
import {categoriaActiva} from "../../main.js";
//======================================================
export const renderCategories = () => {
    const ulList = document.getElementById('listFilter1'); // Asegúrate de que este ID sea correcto
    ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hambuerguesas">Hambuerguesas</li>
        <li id="Papas">Papas</li>
        <li id="Gaseosas">Gaseosas</li>
        <li id="mayorPrecio">Mayor precio</li>
        <li id="menorPrecio">Menor precio</li>
    `;
    const listElement = document.querySelectorAll('li');
    const handleClick = (element) => {
        handleFilterProductsByCategory(element);
        listElement.forEach(el => {
            if(el.classList.contains('liActive')) {
                el.classList.remove('liActive');
            }else{
                if(element === el){
                    el.classList.add('liActive');
                }
            }
        })
    }
    listElement.forEach((element) => {
        element.addEventListener("click", () => {
            handleClick(element);
        });
    });
};

export const handleFilterProductsByCategory = (categoriaIn) => {
    const products = handleGetProductsToStore();
    switch (categoriaIn) {
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categoria === categoriaIn);
            handleRenderList(result);
            break;
        case "mayorPrecio":
            const resultPrizeMayor = products.sort((a, b) => b.prize - a.prize);
            handleRenderList(resultPrizeMayor);
            break;
        case "menorPrecio":
            const resultPrizeMenor = products.sort((a, b) => a.prize - b.prize);
            handleRenderList(resultPrizeMenor);
            break;
    }
};
