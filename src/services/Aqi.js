
const aqiLevel = [
    {
        category:"Good",
        color:"#187D02"
    },
    {
        category:"Satisfactory",
        color:"#9DF08B"
    },
    {
        category:"Moderate",
        color:"#F5EF1A"
    },
    {
        category:"Poor",
        color:"#D29603"
    },
    {
        category:"Very Poor",
        color:"#E7663A"
    },
    {
        category:"Serve",
        color:"#F43310"
    },
    {
        category:"Bad",
        color:"#8E0A04"
    }
]
const checkAqi = (aqi) => {
    let index = 0
    if (aqi <= 50) index =0
    else if (aqi > 50 && aqi <= 100) index =1
    else if (aqi > 100 && aqi <= 200) index =2
    else if (aqi >200 && aqi <= 300) index =3
    else if (aqi > 300 && aqi <= 400) index =4
    else if (aqi  > 400 && aqi <= 500) index =5
    else index =6
    
   return aqiLevel[index];
}

export const modifyAqi= (data) =>{
    let modifyData = checkAqi(data.aqi)
    let time  = new Date()
    let aqiData = {
        category: modifyData.category,
        color: modifyData.color,
        aqi: data.aqi.toFixed(2),
        updateAt: time.toLocaleTimeString(),
        name: data.city,
        key:`${data.city}-${time.getTime()}`
    }
    return aqiData;
}