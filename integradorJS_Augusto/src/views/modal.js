// modal.js
import {productoActivo, setProductoActivo} from "../../main.js";
import {handleDeleteProduct} from "../services/productService.js";
// =====================================================================
const modal = document.getElementById('modalPopUP');
export const openModal = () =>{
    if(modal){
        modal.style.display = "flex";
        const buttonDelete = document.getElementById('buttonDelete');
        if(productoActivo){
            buttonDelete.style.display = 'block';
        }else{
            buttonDelete.style.display = 'none';
        }
        if(productoActivo){
            const name = document.getElementById('name'),
                image = document.getElementById('img'),
                prize = document.getElementById('precio'),
                categoria = document.getElementById('categoria');
            name.value = productoActivo.name;
            image.value = productoActivo.image;
            prize.value = productoActivo.prize;
            categoria.value = productoActivo.categoria;
        }
    }else{
        console.log("No se encontró modalPopUp en el DOM");
    }
};

export const closeModal = () => {
    const modal = document.getElementById('modalPopUP');
    modal.style.display = 'none';
    setProductoActivo(null);
    resetModal();
};

const resetModal = () => {
    const name = document.getElementById('name'),
        image = document.getElementById('img'),
        prize = document.getElementById('precio'),
        categoria = document.getElementById('categoria');
    name.value = "";
    image.value = "";
    prize.value = 0;
    categoria.value = "Seleccione una categoria";
};
// boton cancelar
const buttonCancel = document.getElementById('cancelButton');
buttonCancel.addEventListener('click', () => {
    closeModal();
});
// boton delete
const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', () => {
    handleDeleteProduct();
});
const handleDeleteButton = () =>{
    handleDeleteProduct();
    closeModal();
};