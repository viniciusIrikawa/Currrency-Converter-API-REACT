// import React, {Component} from "react"
import React, {useState} from "react"
import styles from './Conversor.css';

function Conversor(){
    const [moedaA_valor, setMoedaA] = useState('USD');
    const [moedaB_valor, setMoedaB] = useState('BRL');
    const [inputValue, setInputValue] = useState('');

    const [result, setResult] = useState(0);

    const getDropdownValue = (e) => {
        // console.log(e.target.value);
        setMoedaA(e.target.value);
    }
      
      const getValue = (e) => {
        setInputValue(e.target.value)
    }

    const validation = () => {
      console.log(typeof inputValue)
      if (inputValue == '') {
        alert('Please, insert a valid number!')
      }
    }

    const convertValue = () => {
      validation()

      const value = `${moedaA_valor}_${moedaB_valor}`;
      console.log(value)

      fetch(`https://free.currconv.com/api/v7/convert?q=${value}&compact=ultra&apiKey=c7a6c1c43010dabfc100`)
      .then((res) => res.json())
      .then((json) => {
          setResult(json[value] * inputValue)
      })
      .catch((error) => console.log(error));
    }
   
    return(
      <div className="conversor">
        <div className="wrapper-title">
          <select className="select-box" value={moedaA_valor} onChange={getDropdownValue}>
            <option value="USD"> USD </option>
            <option value="EUR"> EUR </option>
            <option value="JPY"> JPY </option>
            <option value="ARS"> ARS </option>
          </select>
          <h2> to {moedaB_valor} </h2>

        </div>
          <input type="text" autoComplete="off" placeholder="Insert the value" id="iptValue" value={inputValue} onChange={getValue} />
          <input className="button" type="button" value="Convert it" onClick={convertValue} />
        <div className="result">
          <span> R${result.toFixed(2)} </span>
        </div>
    </div>
    )
}

export default Conversor