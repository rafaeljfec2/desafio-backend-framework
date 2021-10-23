export interface ICrypt {
  encrypt(value: any): Promise<string>;
  compare(data: any, encrypted: string): Promise<boolean>;
}
