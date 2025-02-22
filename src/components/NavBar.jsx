import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        <div className="flex items-center m-4">
          <img
            className="h-[36px] w-[100px] m-2"
            src={'../images/amazon.png'}
            alt=""
          />
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">United Kingdom</div>
          </div>
        </div>
        <div className="flex">Middle</div>
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Return</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>

          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]" />
            <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
