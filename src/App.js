
// Importaciones de estilos
import "./App.css";
//import "node_modules/video-react/dist/video-react.css";

// Importaciones de prime
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

//Importaciones de componentes y paginas
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/LoginPage/Login";
import {TodoPage} from './pages/TodoPage/TodoPage';
import { ValidProvider } from './context/ValidProvider';


function App() {
  return (
    <Routes>  
    <Route path="/" element={<Login />} />

    <Route path="/homepage" element={
      <ValidProvider>
        <TodoPage />
      </ValidProvider>
//        <Home />
    } />
  </Routes>
  );
}

export default App;
