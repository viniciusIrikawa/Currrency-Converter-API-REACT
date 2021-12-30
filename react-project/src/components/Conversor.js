import React, {Component} from "react"
import styles from './Conversor.css';

export default class Conversor extends Component{

    constructor(props){
        super(props);

        this.state = {
            'moedaA_valor': '',
            'moedaB_valor': 0,

        }
    }
    convertValue = () => {
        let value = `${this.props.moedaA}_${this.props.moedaB}`
        
        fetch(`https://free.currconv.com/api/v7/convert?q=${value}&compact=ultra&apiKey=c7a6c1c43010dabfc100`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            let cotacao = json[value];
            let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2);
            this.setState({moedaB_valor});
            
        })
        .catch(error => console.log(error))
        
    }

    render(){
        return(
            <div className="conversor">
                <h2> {this.props.moedaA} to {this.props.moedaB} </h2>
                <input type="text" autoComplete="off" placeholder="Insert the value" id="iptValue" onChange={(e) => {
                    this.setState({moedaA_valor:e.target.value})}
                    }/>
                <input className="button" type="button" value='Convert it' onClick={this.convertValue} />
                <div className="result">
                    <span> R${this.state.moedaB_valor} </span>
                </div>

            </div>

        )

    }









}