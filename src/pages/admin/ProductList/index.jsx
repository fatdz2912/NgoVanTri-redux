import { useEffect } from "react";

const ProductListPage = () => {
  useEffect(() => {
    console.log("Khởi tạo ProductList");
  }, []);

  return (
    <div>
      {console.log("ProductList JSX")}
      ProductListPage
    </div>
  );
};

export default ProductListPage;
