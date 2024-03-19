export interface GetProductsPayloadResponse {
  store: any;
  pagination: any;
  products: Product[];
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  store_id: number;
  couple_id: number;
  category: Category;
  name: string;
  image: string;
  total_quantity: number;
  remaining_quantity: number;
  price: number;
  purchased: boolean;
  rules: Rule;
  is_quota: boolean;
  variable_value: number;
  id_template_store: number;
}

interface Rule {
  taxa_convidado: number;
  rates: Rate;
  discount: Discount;
}

interface Rate {
  percent: number;
  taxa_fixa: number;
}

interface Discount {
  boleto: number;
  cartao: number;
}
