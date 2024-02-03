import React from 'react';
import { DataProduct } from './ProductData';

const Laptop = () => {
  // Filter products based on category 'laptops'
  const laptopProducts = DataProduct.filter((item) => item.category === 'Laptops');
  console.log(laptopProducts);

  return (
    <div className='w-full h-auto flex gap-10 flex-wrap p-14'>
      {laptopProducts.map((item) => (
        <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={item.Image} alt="Note" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold">{item.ProductName}</h2>
            <del><span className="font-bold text-gray-500">${item.OldPrice}</span></del>
            <p className='font-bold text-green-500'>${item.Price}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Laptop;
