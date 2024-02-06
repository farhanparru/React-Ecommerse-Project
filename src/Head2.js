import Container from 'react-bootstrap/Container';
import { IoCloseCircle } from "react-icons/io5";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiSignIn } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import Modal from 'react-modal';
import { NavLink } from 'react-bootstrap';
import { BsCart4 } from "react-icons/bs";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/smartlogo.png'

import { DataProduct } from './ProductSection/ProductData';
const customStyles = {
  content: {
    top: '39vh',
    width: '600px',
    border: 'none',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background: 'rgba(0, 0, 0, 0)', // Adjust the alpha value for transparency
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.8)', // Adjust the alpha value for transparency
  },
};
function Head2() {

   const Navigate = useNavigate()

   const HandleLogin = ()=>{
    Navigate("/Login")
   }

  

  const [searchTerm, setSearchTerm] = useState("");

  const [search,setSearch]=useState(false)

  const filteredProducts = DataProduct.filter((product) =>
  product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
);

// console.log(filteredProducts)
  return (
    <Navbar expand="lg" className='bg-cyan-800 px-4 text-white  font-thin'>
    <Container   >
      <Navbar.Brand href="#" className="brand-name">
  <div className='h-20 w-20'
  style={{
    backgroundImage:`url("${logo}")`,
    backgroundSize:"cover"
  }}
  ></div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" className=''/>
      <Navbar.Collapse  className='w-full flex flex-col gap-2 justify-between items-center md:flex-row '>
        <div className='flex justify-center md:items-center  flex-col md:gap-4  items-start w-full px-4 gap-4 md:flex-row '>
            <Link to="/ "><button className='hover:text-yellow-500 text-opacity-50 border px-2 rounded-lg'>home</button></Link>
           <Link to="/laptop"><button className='hover:text-yellow-500 text-opacity-50 border px-2 rounded-lg'>Laptops</button></Link> 
           <Link to="/Phone"><button className='hover:text-yellow-500 text-opacity-50 border px-2 rounded-lg'>smart phone</button></Link> 
 
        </div>
       
        <div className='flex justify-between  w-full md:w-auto items-center p-4 gap-4'>

          <NavLink onClick={()=> HandleLogin('/Login')} ><PiSignIn  className='text-white text-2xl' title='login'/></NavLink>
        <BsCart4  className='text-white text-3xl'  title='Cart'/>
        <div className="avatar">
  <div className="w-10 mt-0 md:mt-4 mask mask-squircle">
    <img src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1702202454~exp=1702203054~hmac=9912f587eff164dd6dbaf25149db650afc3800927e1f67b62555f6a6d929f2f4" title='Admin`' />
  </div>
</div>
<button>

        <FaSearch className='text-3xl text-white' onClick={()=>setSearch(true)}/>
     </button>
        </div>
      </Navbar.Collapse>
      
    </Container>
    {
      // search bar impliment
      search&&(
     <>

    <Modal

        isOpen={search}
        style={customStyles}
        onClick={()=>setSearch(false)}
   
  
              >
                 <button className="flex 
                 mt-56 justify-center h-auto items-center w-full " onClick={() => setSearch(false)}>
                 <IoCloseCircle  className='text-4xl text-white mb-4'/>
           </button>
        
        <form className='flex flex-col  '>
        <div className='flex justify-center h-auto items-center w-full '>

          <input
           value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
           className='bg-stone-300 h-10 md:h-14  w-96 rounded-full p-3 text-xl'  />
       
        </div>
        <ul className="bg-transparent w-full
        p-4
         text-white">
   {filteredProducts.map((product) => (
      <li key={product.id} className="">
         <p>{product.ProductName}</p>
         {/* Display other product information as needed */}
      </li>
   ))}
</ul>
        </form>

      </Modal>
      </>

      )
    }
    
  </Navbar>

    
  );
}

export default Head2;