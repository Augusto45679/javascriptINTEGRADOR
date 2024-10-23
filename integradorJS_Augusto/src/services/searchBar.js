//searchBar.js
import {handGetProductLocalStorage} from "../persistence/localstorage.js";
import {handleRenderList} from "../views/storeView.js";
// =========================================================
export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById('inputHeader');
    const products = handGetProductLocalStorage();
    // Filter the products here
    const filteredProducts = products.filter(element => {
        element.name.toLowerCase().includes(inputHeader.value.toLowerCase()); // Include return statement
    });
    // Call handleRenderList after filtering
    handleRenderList(filteredProducts);
}