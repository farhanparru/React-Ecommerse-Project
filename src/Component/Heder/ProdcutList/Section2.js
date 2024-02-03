import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section2 = () => {
  return (
    <div className='  bg-white p-5 h-full w-full flex  justify-evenly items-center '>

    {/* first section */}

    <div className='w-1/2 h-auto flex flex-col justify-start items-center'>

        <div className='col-md-5' style={{ position: 'relative', padding: 0 }}>
          <img
            src='https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg'
            className='img-fluid rounded shadow p-3'
            alt='Laptop'
            style={{
              maxWidth: '100%',
              borderRadius: '15px',
            }}
          />
        </div>
        <div className='col-md-5'>
          <div className='content'>
            <h2 className='mb-3 font-thin'>Discover Our Latest Laptops</h2>
            <p>
              Explore a wide range of cutting-edge laptops that suit your needs. Whether you're a professional, gamer, or student, we have the perfect laptop for you.
            </p>
            <button className='border px-4 py-2 text-3xl font-thin rounded-lg hover:bg-black hover:bg-opacity-10 '>Shop now</button>

          </div>
      </div>
    </div>
    <div className='w-1/2 h-auto flex flex-col justify-start items-center'>

        <div className='col-md-5' style={{ position: 'relative', padding: 0 }}>
          <img
 src="https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150063014.jpg"            className='img-fluid rounded shadow p-3'
            alt='Laptop'
            style={{
              maxWidth: '100%',
              borderRadius: '15px',
            }}
          />
        </div>
        <div className='col-md-5'>
          <div className='content'>
            <h2 className='mb-3'>Discover Our Latest Laptops</h2>
            <p>
              Explore a wide range of cutting-edge laptops that suit your needs. Whether you're a professional, gamer, or student, we have the perfect laptop for you.
            </p>
            <button className='border px-4 py-2 text-3xl font-thin rounded-lg hover:bg-black hover:bg-opacity-10 '>Learn more</button>
          </div>
      </div>
      
    </div>





    </div>
  );
};

export default Section2;
