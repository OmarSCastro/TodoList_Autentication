
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
import { Home } from "./pages/HomePage/Home";
import { Login } from "./pages/LoginPage/Login";
import { ClassPage } from "./pages/ClassPage/ClassPage";
import { MeetPage } from "./pages/MeetPage/MeetPage";
import { TeamsPage } from "./pages/TeamsPage/TeamsPage";
import { ZoomPage } from "./pages/ZoomPage/ZoomPage";
import { AboutUsPage } from "./pages/AboutUsPage/AboutUsPage";

function App() {
  return (
    <Routes>  
    <Route path="/" element={<Login />} />

    <Route path="/homepage" element={
        <Home />
    } />
    <Route path="/aboutus" element={
        <AboutUsPage />
    } />

    <Route path="/meet" element={
        <MeetPage />
      
    } />

    <Route path="/classroom" element={
          <ClassPage />
    } />

    <Route path="/teams" element={
          <TeamsPage />
    } />
    <Route path="/zoom" element={
          <ZoomPage />
    } />
  </Routes>
  );
}

export default App;
