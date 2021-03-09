import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { producto } from '../../models/producto';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
})
export class ListarProductosComponent implements OnInit {
  listProductos: producto[] = [];

  constructor(
    private _productoService: ProductoService,
    private toastr: ToastrService
  ) {

    _productoService.getPaises().subscribe(data=> {console.log('pais'); console.log(data)});
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos() {
    this._productoService.getProductos().subscribe(
      (data) => {
        console.log(data);
        this.listProductos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe(
      (data) => {
        this.toastr.error(
          'El producto fue eliminado con exito',
          'Producto eliminado'
        );
        this.obtenerProductos();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
