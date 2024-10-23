// productService.js
import {productoActivo} from "../../main.js";
import {handGetProductLocalStorage, setInLocalStorage} from "../persistence/localstorage.js";
import {handleGetProductsToStore, handleRenderList} from "../views/storeView.js";
import {closeModal} from "../views/modal.js";
import Swal from "sweetalert2";
// ====================================================================================
const acceptButton = document.getElementById('acceptButton');
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
});

export const handleSaveOrModifyElements = () => {
    const name = document.getElementById('name').value,
        image = document.getElementById('img').value,
        prize = document.getElementById('precio').value,
        categoria = document.getElementById('categoria').value;
    let object = null;

    if(productoActivo){
        object = {
            ...productoActivo, name, image, prize, categoria
        };
    } else {
        object = {
            id: new Date().toISOString(),
            name,
            image,
            prize,
            categoria
        };
    }
    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
    });
    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};

export const handleDeleteProduct = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        const productoActivoNew = handGetProductLocalStorage(); //LO RECUPERA

        if (result.isConfirmed) {

            if (!productoActivo || !productoActivo.id) {
                console.error("No se puede eliminar: el producto activo no tiene ID o es nulo.");
                return;
            }

            const products = handGetProductLocalStorage();
            console.log(products);
            const result = products.filter((el) => el.id !== productoActivoNew.id);
            localStorage.setItem("products", JSON.stringify(result));

            const newProducts = handGetProductLocalStorage();
            handleRenderList(newProducts);

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                width: '400px',
                heightAuto: false,
                customClass: {
                    popup: 'no-scroll'}
            });
        }else{
            closeModal();
        }
    });
};