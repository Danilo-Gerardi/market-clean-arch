export class ProductModel {
  private _name!: string;
  private _price!: number;
  private _quantity!: number;
  private _description!: string;
  private _image!: string;

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  get description() {
    return this._description;
  }

  get image() {
    return this._image;
  }
}
