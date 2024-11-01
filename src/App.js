
import './App.css';

// importamos nuestros componentes
import Create from './componentes/Create';
import Edit from './componentes/Edit';
import SHow from './componentes/SHow';

// importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <h1>Hola Firebase con react</h1>
      {/* <button className='btn btn-primary'>Presionar</button> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <SHow /> } />
          <Route path='/create' element={ <Create /> } />
          <Route path='/edit/:id' element={ <Edit /> } />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
