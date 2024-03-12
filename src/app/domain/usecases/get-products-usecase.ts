import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, of } from 'rxjs';
import { UseCase } from '../usecase.interface';

export class GetProductsUseCase<S, T> {
  //constructor(private readonly repository: any) {}

  async execute(params?: S): Promise<T> {
    //return this.repository.getProducts();
    return lastValueFrom(of('worked' as T));
  }
}
