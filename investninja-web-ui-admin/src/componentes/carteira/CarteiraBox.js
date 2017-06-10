import React from 'react';
import Carteira from './Carteira';

export default class CarteiraBox extends React.Component {

    constructor() {
        super();
        this.state = {
            "codigo": "",
            "descricao": "",            
            "saldo": 0.0,
            "valorMovimentacao": 0.0,
            "dataCota": new Date()
        };

        this.setCodigoCarteira = this.setCodigoCarteira.bind(this);
        this.setDescricaoCarteira = this.setDescricaoCarteira.bind(this);
        this.setCotaInicial = this.setCotaInicial.bind(this);
        this.setSaldoInicial = this.setSaldoInicial.bind(this);
        this.setDataInicial = this.setDataInicial.bind(this);   
        this.adicionarCarteira = this.adicionarCarteira.bind(this);    
    }

    setCodigoCarteira(event) {                
        this.setState({"codigo" : event.target.value});
    };

    setDescricaoCarteira(event) {        
        this.setState({"descricao" : event.target.value});
    };

    setCotaInicial(event) {        
        this.setState({"valorCotaInicial" : event.target.value});
    };

    setSaldoInicial(event) {        
        this.setState({"saldo" : event.target.value});
    };

    setDataInicial(moment) {            
        this.setState({"dataCota" : moment.toDate()});
    };

    adicionarCarteira(event) {        
        event.preventDefault();
        const requestInfo = {
            method:'POST',
            body:JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type':'application/json',
                'Accept': 'application/json' 
            })
        };

        fetch('http://localhost:5000/api/carteiras', requestInfo)
            .then(function(response){
                response
                    .json()
                    .then(function(data) {
                        console.log(data);
                    });
            }).catch(function(err){
                console.error('Failed retrieving information', err);
            });

        console.log(this.state);
    };

    render () {
        return (
            <div>
                <Carteira 
                    codigoCarteira = {this.state.codigo}
                    setCodigoCarteira = {this.setCodigoCarteira}

                    descricaoCarteira = {this.state.descricao}
                    setDescricaoCarteira = {this.setDescricaoCarteira}

                    cotaInicial = {this.state.valorCotaInicial}
                    setCotaInicial = {this.setCotaInicial}

                    saldoInicial = {this.state.saldo}
                    setSaldoInicial = {this.setSaldoInicial}

                    dataInicial = {this.state.dataCota}
                    setDataInicial = {this.setDataInicial}
                    
                    adicionarCarteira = {this.adicionarCarteira}/>
            </div>
        );
    }
}