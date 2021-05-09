import React, {useEffect,useState} from 'react';
import "./Cities.css"
import Aqi from "../aqi/Aqi"
import Graph from "../graph/Graph"
import {
	initiateSocket,
	subscribeToChat,
    disconnectSocket,
	error,
} from "../../services/Socket";
import {
    modifyAqi
} from "../../services/Aqi"

const Cities = (props) =>{

    const [aqi,SetAqui]= useState({});
    let dataA = {}
    const updateAqi = (data) =>{
        let aqiData = {...dataA}
        data.forEach((val)=>{
            aqiData[val.city] = modifyAqi(val)
        })
        dataA=aqiData
        SetAqui({...aqiData})
    }
    
    useEffect(() => {
        initiateSocket();
        subscribeToChat((err, data) => {
            if (err) return;
            updateAqi(JSON.parse(data))
        })
        error((err, data) => {
            // if (err) return;
            console.log(err)
            console.log(data)
        })
    }, []);
    return (
        <>
            <div className="section">
                <div className="aqi">
                    <Aqi aqi={aqi}/>
                </div>
                <div className="graph">
                    <Graph aqi={aqi}/>
                </div>
            </div>

            {/* {console.log(aqi)} */}

        </>
    )
}

export default Cities;