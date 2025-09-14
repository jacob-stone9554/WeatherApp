import './App.css'
import './index.css';
import Navbar from "./components/navbar.tsx";
import Search from "./components/search.tsx";
import WeatherContent from "./components/WeathterContent.tsx";

function App() {

  return (
    <>
        <Navbar />
        <Search />
        <WeatherContent />
    </>
  )
}

export default App
