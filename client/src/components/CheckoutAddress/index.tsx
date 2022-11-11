interface Address {
  neighborhood: string,
  local: string,
  street: string,
  uf: string,
  cep: string,
};

export function CheckoutAddress({neighborhood, local, street, uf, cep}: Address) {
  return (
    <>
      <p>{street}</p>
      <p>{local}</p>
      <p>{neighborhood}</p>
      <p>{uf}</p>
      <p>{cep}</p>
    </>
  )
}