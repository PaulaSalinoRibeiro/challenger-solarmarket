export interface ISalles {
  code: string,
  qty: string,
  address: {
    neighborhood: string,
    local: string,
    street: string,
    uf: string,
    cep: string,
  }
}