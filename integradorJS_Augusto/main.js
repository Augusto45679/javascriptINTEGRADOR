// main.js
// ============APPLICATION============
import {handGetProductLocalStorage} from "./src/persistence/localstorage.js";
import {renderCategories} from "./src/views/categories.js";
import {openModal} from "./src/views/modal.js";
import {handleGetProductsToStore} from "./src/views/storeView.js";
import {handleSearchProductByName} from "./src/services/searchBar.js";

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
}

export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
}

handleGetProductsToStore();// Cargar los productos en el local storage
renderCategories();
// ===============================================
// === Header ===
const buttonAdd = document.getElementById('buttonAddElement');
buttonAdd.addEventListener('click', () => {
    openModal();
})
// Button search
const buttonSearch = document.getElementById('buttonSearch');
buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
})