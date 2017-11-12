import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Product } from '../../service/product/product';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  productId: number;
  constructor(public dialogRef: MdDialogRef<ProductEditComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private productService: ProductService) { }

  ngOnInit() {
    //console.log(this.data);
    this.productId = this.data.id;
    this.productService.getProductById(this.productId).subscribe(
      (data) => this.product = data);

  }

  editData() {
    this.dialogRef.close(this.product);
  }
}
