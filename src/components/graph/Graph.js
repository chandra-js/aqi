import React, {useEffect,useState} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import "./Graph.css"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Graph = (props)=>{
     const {aqi}= props
     let graphData=Object.keys(aqi).map((city)=>{
         return {
             label:aqi[city].name,
             y:parseInt(aqi[city].aqi)
         }
     })
    const options = {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "AQI range of cities"
        },
        axisY: {
            title: "AQI RANGE",
            includeZero: false,
        },
        data: [
        {
            type: "bar",
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0.## AQI",
            dataPoints: graphData
        }
        ]
    }

    return (
        <>
        {/* <div className = "graph">   */}
            <CanvasJSChart options = {options} height="600"/>
        {/* </div> */}
            
        </>
    )
}

export default Graph;