const dummyImg = 'https://jmjglobalwinpex.com/wp-content/uploads/2019/01/11412309_7a598013-ad27-4020-9234-ecb4dda7e0f7_833_775.jpg'
          
import Image from "next/image";

const ProductItem = ({ item }: ProductItemProps) => {
  
  const isSoldOut = item.stock === 0;

  return (<div className="col-3">
    <Image
              src={item.image || dummyImg}
              alt={item.name}
              width={200}
              height={200}
              priority
            />
  <p><strong>{item.name}</strong></p>
  <p>AU${item.price} per {item.unit}</p>
  <button disabled={isSoldOut}>{isSoldOut ? 'Sold Out' : 'Add to Cart'}</button>
</div>)}

export default ProductItem;

interface ProductItemProps {
  item: {
    name: string,
    image?: string,
    unit: string,
    price: number,
    stock: number
  }
}