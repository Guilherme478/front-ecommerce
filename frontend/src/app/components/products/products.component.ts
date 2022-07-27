import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public productList : any;

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(response => {
      this.productList = response
      console.log(this.productList)
    });
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
