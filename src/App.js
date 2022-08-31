import React from "react";
import Card from "./components/Card"
import data from "./components/Model"
import Header from "./components/Header";
export default function App(){
    const Data= data.map(items=>{
        return(
            <Card
            key={items.map}
            {...items}
            />

        )
    })

    return(
        <div>
            <Header/>
            {Data}
        </div>
       )
}