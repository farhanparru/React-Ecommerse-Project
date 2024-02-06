  import { Route, Routes, useLocation } from 'react-router-dom';
  import { createContext, useState } from 'react';
  import Head2 from './Head2';
  import Footer from './Component/Heder/Footer';
  import Bennar from './Banner';
  import TechPhone from './ProductSection/TechPhone';
  import Laptop from './ProductSection/Laptop';
  import Login from './Component/Heder/Login';
  import Brand from './Component/Heder/ProdcutList/Brand';
  import { ToastContainer } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css';
  import Signup from './Component/Heder/Signup';
  import NewCom from './Component/Heder/ProdcutList/NewCom';
  import NewCom2 from './Component/Heder/ProdcutList/NewCom2';
  import View from './ProductSection/View';
  import { DataProduct } from './ProductSection/ProductData';
import Scree from './ProductSection/Scree';
 






  export const DataProductt = createContext();



  function App() {
    const loc=useLocation()
    const  ijdsk=loc.pathname.endsWith("/")
    const [product, setProduct] = useState(DataProduct);
    const [userData,setUserData] = useState([])
    const [login,setLogin]=useState(false)
    const[newUser,setnewUser]=useState([])
    const [cart,setCart]=useState([])
    console.log(product);

    return (
      <div>
   
      <DataProductt.Provider value={{ product, setProduct , userData, setUserData,login,setLogin,newUser,setnewUser,cart,setCart}}>
       <Head2/>
        <Routes>
          <Route path='/' element={<Bennar/>} />
          <Route path='/Phone' element={<TechPhone/>}/>
          <Route path='/laptop' element={<Laptop/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/View/:id' element={<View/>}/>
        </Routes>
        {
        ijdsk&&
          <>
        <Brand/>
        <NewCom/>
        <NewCom2/>
        <Scree/>
        </>
        
        }
        <Footer/>
        </DataProductt.Provider>
       <ToastContainer/>
      
      </div>
    );
  }

  export default App;
