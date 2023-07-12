const ProductManager = require("./productoManager.js")
const manager = new ProductManager("productos.json")


async function getAllProducts() {
    const productos = await manager.getProduct()
    console.log(productos);
}
async function addProduct(title, costo, stock, description) {
    const producto = {
        title: title,
        costo: costo,
        stock: stock,
        description: description
    }
    await manager.addProduct(producto)
    console.log(producto);
}


async function getById(id) {

    const productoid = await manager.getProductoById(id)
    console.log(productoid);
}

async function upDateProduc(id, obj) {

    await manager.upDateProduc(id, obj)
    const productos = await manager.getProduct()
    console.log(productos);
    
    // console.log(productos);

}
async function delateProducts() {
    await manager.delateProduct()
    console.log("borrado");
}



getAllProducts()
// getById(2)
// upDateProduc(2,{costo:10})
// upDateProduc(4,{title:"panchos"})
addProduct("josus", 20, 5, "hore")





// delateProducts()
