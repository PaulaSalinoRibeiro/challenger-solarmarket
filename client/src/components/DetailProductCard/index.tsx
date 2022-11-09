import { ManagerQty } from "../ManagerQty"

type Props = {
  name: string,
  category: string,
  code: string,
  description: string,
  price: string,
  image: string,
}

export function DetailProductCard({ name, image, price, category, code, description }: Props) {
  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{category}</p>
        <p>R$ {price}</p>
        <ManagerQty 
          name={name}
          image={image}
          price={price}
          category={category}
          code={code}
          description={description}
        />
      </div>
    </div>
  )
}