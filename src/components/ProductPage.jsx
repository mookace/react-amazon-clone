import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callApi } from '../utils/CallApi';
import ProductDetails from './ProductDetails';

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProduct = () => {
    callApi(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) {
    return <div>Loading...</div>;
  }

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto bg-orange-400">
          <div className="grid grid-cols-10">
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="" />
            </div>
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={false} />
              </div>
              <div></div>
            </div>
            <div className="col-span-2 bg-green-400"></div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductPage;
