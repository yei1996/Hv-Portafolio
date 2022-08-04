import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Juego from './Juego';
import Impresion from './Impresion';
import Modelado from './Modelado';
import Pagina from './Pagina';

function App() {
  return (
    <div className="App">  
    <Header />

    

    <BrowserRouter>
    <Routes>

        <Route path='/' element= {<Home />} />
        <Route path='/juegos' element={<Juego />}/>
        <Route path='/impresion' element={<Impresion />}/>
        <Route path='/modelado' element={<Modelado />}/>
        <Route path='/paginas' element={<Pagina />}/>
        
          
      

    </Routes>
    </BrowserRouter>
   
    <Footer />
    </div>
  );
}

export default App;
