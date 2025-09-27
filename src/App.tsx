import './App.css'
import './index.css';
import Navbar from "./components/navbar.tsx";
import Search from "./components/search.tsx";
import WeatherContent from "./components/WeathterContent.tsx";

function App() {

  return (
    <>
        <div className="h-screen bg-neutral-900 text-white">
            <Navbar />
            <Search />
            <WeatherContent />
        </div>
    </>
  )
}

export default App
