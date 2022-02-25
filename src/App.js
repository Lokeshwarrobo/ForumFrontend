import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './Validation/Login';
import Home from './Questions/Home'
import { Forgetpassword } from './Validation/Forgetpassword';
import { Resetpassword } from './Validation/ResetPassword';
import { Navbar } from './Headers/Navbar';
import QuestionDetailView from './Questions/QuestionDetailView';
import { Signup } from './Validation/SignUp';
import Test from './Questions/Test';
import { Categories } from './Questions/Categories';
import { SingleCategories } from './Questions/SingleCategories';
import Trending from './Questions/Trending';
import  CreateQuestion  from './Questions/CreateQuestion';
import { QuestionDetail } from './Questions/QuestionDetail';

function App() {
  return (
    <div>
      <Router>
       <Navbar/>
            <Routes>
            <Route path = "/r" element={<Test/>}></Route>
                <Route path = "/login"  element={<Login/>} ></Route>
                <Route path = "/trending"  element={<Trending/>} ></Route>
                <Route path = "/signup" element={<Signup/>}></Route>
                <Route path = "/" element={<Home/>}></Route>
                <Route path = "/conformmail" element = {<Forgetpassword/>}></Route>
                <Route path = '/resetpassword/:tokens' element = {<Resetpassword/>}></Route>
                {/* <Route path = "/view/:questionid/:views" element = {<QuestionDetailView/>}></Route> */}
                <Route path = "/cate" element = {<Categories/>}></Route>
                <Route path = "/cat/:categoryId/:categoryName" element = {<SingleCategories/>}></Route>
                <Route path = "/create" element = {<CreateQuestion/>}></Route>
                <Route path = "/view/:questionid/:views" element = {<QuestionDetail/>}></Route>
            </Routes>
          
        </Router>
    </div>
  );
}

export default App;
