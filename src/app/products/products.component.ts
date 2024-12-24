import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  produit=[{nom:'pc', prix:'2000D',marque:'hp'},{nom:'pc', prix:'3000D',marque:'acer Predator'},{nom:'pc', prix:'2000D',marque:'lenovo'}];
  constructor(){}

}
