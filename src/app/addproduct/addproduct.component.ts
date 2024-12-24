import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
  coleurs=['rouge','blue','jaune','rose'];
  constructor(){}
  ngOnInit(): void {
    
  }


}
