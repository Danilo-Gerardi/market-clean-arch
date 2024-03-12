import { Component, OnInit } from '@angular/core';
import { ProductController } from 'src/app/adapters/controllers/products.controller';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private controller: ProductController) {}

  ngOnInit(): void {
    this.controller.execute('').then(console.log);
  }
}
