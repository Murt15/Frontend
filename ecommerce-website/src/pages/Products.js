import { useParams } from "react-router-dom";
const Products = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <>
      <h1>Products</h1>
    </>
  );
};
export default Products;
