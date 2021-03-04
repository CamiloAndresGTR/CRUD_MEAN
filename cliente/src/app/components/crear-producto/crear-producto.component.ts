import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { producto } from '../../models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router, private toastr: ToastrService) { 
    this.productoForm = this.fb.group({
      producto : ['', Validators.required],
      categoria : ['', Validators.required],
      ubicacion : ['', Validators.required],
      precio : ['', Validators.required]     
    });
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    
    const PRODUCTO: producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }
    console.log(PRODUCTO);
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.router.navigate(['/']);
    
  }

}
