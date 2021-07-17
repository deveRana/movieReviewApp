import React,{useState} from 'react'
import Card from './components/Card'
import './style/App.css'
import './style/Navbar.css'
import {FcSearch} from 'react-icons/fc';


const App =  () => {

    const [inputValue, setInputValue] = useState("");

    const [charge, setCharge] = useState("Off")

    const searchEvent = (e)=>{
        setInputValue(e.target.value);
    }

    const buttonEvent = ()=>{
        setCharge("On")
    };
    

    return (
        <>
            

                    <div className="navbarContainer" >
                    
                    <div className="leftDiv">
                        <h2>Movie Review App</h2>
                    </div>

                    <div className="rightDiv">
                        <input type="search" placeholder="Search" value={inputValue} onChange={searchEvent} />
                        <button onClick={buttonEvent} > <FcSearch/> </button>
                    </div>

                    </div>
                    
                    <div className="mainContainer">
                    <Card searchValue={inputValue} searchButton={charge} />
                    </div>

          
  

        </>
    )
}

export default App;
