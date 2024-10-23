// localstorage.js
export const handGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
        return products;
    }else {
        return [];
    }
}

export const setInLocalStorage = (productIn) => {

    let productInLocal = handGetProductLocalStorage();
    const existingIndex = productInLocal.findIndex((productsLocal) => productsLocal.id === productIn.id);

    if (existingIndex !== -1) {
        // Si el producto existe, actualízalo
        productInLocal[existingIndex] = productIn;
    } else {
        // Si no existe, agrégalo
        productInLocal.push(productIn);
    }
    localStorage.setItem('products', JSON.stringify(productInLocal));

}