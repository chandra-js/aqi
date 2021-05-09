import React, {useEffect ,useState} from 'react'
import Header from "../header/Header";
import Cities from "../cities/Cities";

import "./Home.css";



const Home = () =>{




    return (
        <>
            <div>
                <div>
                    <Header />
                </div>
                <div> 
                    <Cities />
                </div> 
            </div>   
        </>
    )
}

export default Home;