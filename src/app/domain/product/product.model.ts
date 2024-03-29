export class ProductModel {
  private _id!: string;
  private _name!: string;
  private _price!: number;
  private _image!: string;

  constructor(id: string, name: string, price: number, image: string) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._image = image;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get image() {
    return this._image;
  }
}
