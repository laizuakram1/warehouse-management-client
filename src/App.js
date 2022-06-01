
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddNew from './pages/AddNewItem/AddNew';
import NotFound from './pages/NotFound/NotFound';
import Blog from './pages/Blog/Blog';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-bootstrap';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addNew' element={
       <RequireAuth>
          <AddNew></AddNew>
       </RequireAuth>
        }></Route>
        <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
