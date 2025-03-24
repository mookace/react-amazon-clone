import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductDetails } from './';
import { GB_CURRENCY } from '../utils/Constants';

function Checkout() {
  const products = useSelector((state) => state.cart.products);
  const itemNumber = useSelector((state) => state.cart.productsNumber);
  // const subTotal=

  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 bg-white gap-10">
          {/* products */}
          <div className="col-span-6">
            <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                      <div className="col-span-2">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="p-4 m-auto"
                            src={product.image_small}
                            alt="loading..."
                          />
                        </Link>
                      </div>
                      <div className="col-span-6">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/product/${product.id}`}>
                            <ProductDetails product={product} ratings={false} />
                          </Link>
                        </div>
                        <div>
                          <button>Delete</button>
                        </div>
                        <div className="grid grid-cols-3 w-20 text-center">
                          <div className="text-xl xl:text-2xl bg-gray-400 rounded">
                            -
                          </div>
                          <div className="text-lg xl:text-xl bg-gray-200">
                            {product.quantity}
                          </div>
                          <div className="text-xl xl:text-2xl bg-gray-400 rounded">
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                        {GB_CURRENCY.format(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="text-lg xl:text-xl text-right mb-4 mr-4">
              SubTotal ({itemNumber} items):{' '}
              <span className="font-semibold">0</span>
            </div>
          </div>
          {/* checkout */}
          <div className="col-span-2 bg-white rounded h-[250px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
