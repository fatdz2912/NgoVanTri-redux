import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  console.log("🚀 ~ file: index.jsx:3 ~ ProductDetailPage ~ params:", params);

  return <div>Product detail - {params.id}</div>;
};

export default ProductDetailPage;
