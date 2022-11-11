interface Product {
  name: string,
  price: string,
  image: string,
  qty: number,
}

export function CheckoutCard({name, price, image, qty}:Product) {
  return (
    <>
      <div>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>R$ {price.replace(".", ",")}</p>
        <p>{qty}</p>
        <p>
          SubTotal R$ {(qty * Number(price))
          .toFixed(2).toString().replace(".", ",")}
        </p>
      </div>
    </>
  )
}