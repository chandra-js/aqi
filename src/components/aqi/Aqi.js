import React from 'react';
import "./Aqi.css"

const Aqi = (props) => {
    const {aqi}=props;
    return (
        <>
        <div className="aqi-container">
            <div className="header-text">Air Quality level </div>
            <div className="aqi-container-table table-header"> 
                <div className="area-30p"> Cities</div>
                <div className="area-20p">Category</div>
                <div className="area-20p text-right">AQI</div>
                <div className="area-30p text-right">Last Updated</div>
            </div>
            {
                Object.keys(aqi).map((city,index)=>{
                    return(<div className="aqi-container-table table-body" style={{background:aqi[city].color}} key={aqi[city].key}> 
                        <div className="area-30p"> {aqi[city].name}</div>
                        <div className="area-20p">{aqi[city].category}</div>
                        <div className="area-20p text-right" >{aqi[city].aqi}</div>
                        <div className="area-30p text-right">{aqi[city].updateAt}</div>
                    </div>)
                })
            }
        </div>

        </>
    )
}

export default Aqi ; 