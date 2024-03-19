export interface PayloadResponse<T> {
  data?: T;
  message: string;
  httpStatus: number;
}
