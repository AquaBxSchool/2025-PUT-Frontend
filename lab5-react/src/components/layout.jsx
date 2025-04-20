import {useState} from "react";


export function Layout() {

    let [cats, setCats] = useState([])

    let getData = async () => {
        let data = await fetch("https://cataas.com/api/cats")
        let resp = await data.json()
        setCats(resp.map((el) => `https://cataas.com/cat/${el.id}`))
    }

    return (
        <div className="layout">
            <button onClick={getData}>retrieve cats</button>
            {cats.map(el => <img src={el}/>)}
        </div>
    )
}




