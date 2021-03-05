//Rutas para producto

const express = require('express');
const router = express.Router();
const productoConntroller = require('../controllers/productoController');


//api/productos

router.post('/', productoConntroller.crearProducto);
router.get('/', productoConntroller.obtenerProductos);
router.put('/:id', productoConntroller.actualizarProducto);
router.get('/:id', productoConntroller.obtenerProducto);
router.delete('/:id', productoConntroller.eliminarProducto);


module.exports = router;