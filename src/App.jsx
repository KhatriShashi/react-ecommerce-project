import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home,Shop,Products,Blog,About,Contact,ErrorPage,Header,Cart} from './index'
function App() {

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/pages'>
            <Route index='/' element={<Home/>}/>
            <Route path='/pages/about' element={<About/>}/>
            <Route path='/pages/contact' element={<Contact/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
