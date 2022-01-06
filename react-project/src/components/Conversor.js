// import React, {Component} from "react"
import React, {useState} from "react"
import styles from './Conversor.css';

function Conversor({moedaA, moedaB}){
    const [moedaA_valor, setMoedaA] = useState('')
    const [moedaB_valor, setMoedaB] = useState(0)

    const getValue = (e) => {
        setMoedaA(e.target.value)
    }

    const convertValue = () => {
        let value = `${moedaA}_${moedaB}`

        fetch(`https://free.currconv.com/api/v7/convert?q=${value}&compact=ultra&apiKey=c7a6c1c43010dabfc100`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            let cotacao = json[value]

            let moedaB_valor = (Number(moedaA_valor * cotacao)).toFixed(2);
            console.log(moedaB_valor)

            setMoedaB(moedaB_valor);
            
        })
        .catch(error => console.log(error))
    
    }
   
    return(
        <div className="conversor">
            <h2> {moedaA} to {moedaB} </h2>
            <input type="text" autoComplete="off" placeholder="Insert the value" id="iptValue" onChange={getValue}/>
            <input className="button" type="button" value='Convert it' onClick={convertValue} />
            <div className="result">
                <span> R${moedaB_valor} </span>
            </div>
        </div>
    )

}

export default Conversor