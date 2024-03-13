
const ProductItem = ({ num = 0 }: ProductItemProps) => <div>Product Item {num}</div>

export default ProductItem;

interface ProductItemProps {
  num?: number
}