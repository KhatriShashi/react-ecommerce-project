import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home,Shop,Products,Blog,About,Contact,ErrorPage} from './index'
function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/pages'>
            <Route index='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
