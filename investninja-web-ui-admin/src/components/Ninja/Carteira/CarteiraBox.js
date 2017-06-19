import React from 'react';
import Carteira from './Carteira';
import CarteiraPainel from './CarteiraPainel';
import { PageHeader } from 'react-bootstrap';

export default class CarteiraBox extends React.Component {
    
    constructor() {
        super();
        this.state = {
            "editando" : true,
            "carteira" : {
                "codigo": "",
                "descricao": "",            
                "saldo": 0.0,
                "valorMovimentacao": 0.0,
                "dataCota": new Date(),
                "variacaoCotaPercentual" : 0,
                "variacaoFinanceira" : 0
            }
        };
        
        this.setCodigoCarteira = this.setCodigoCarteira.bind(this);
        this.setDescricaoCarteira = this.setDescricaoCarteira.bind(this);
        this.setCotaInicial = this.setCotaInicial.bind(this);
        this.setSaldoInicial = this.setSaldoInicial.bind(this);
        this.setDataInicial = this.setDataInicial.bind(this);   
        this.adicionarCarteira = this.adicionarCarteira.bind(this);    
        this.onEdit = this.onEdit.bind(this);
    }

    setCodigoCarteira(event) {                
        this.state.carteira.codigo = event.target.value;
        this.setState({"carteira" : this.state.carteira});
    };

    setDescricaoCarteira(event) {        
        this.state.carteira.descricao = event.target.value;
        this.setState({"carteira" : this.state.carteira});
    };

    setCotaInicial(event) {        
        this.state.carteira.valorCotaInicial = event.target.value;
        this.setState({"carteira" : this.state.carteira});
    };

    setSaldoInicial(event) {        
        this.state.carteira.saldo = event.target.value;
        this.setState({"carteira" : this.state.carteira});
    };

    setDataInicial(event) {        
        this.state.carteira.dataCota = event.target.value;
        this.setState({"carteira" : this.state.carteira});
    };

    adicionarCarteira(event) {        
        event.preventDefault();

        const requestInfo = {
            method:'POST',
            body:JSON.stringify(this.state.carteira),
            headers: new Headers({
                'Content-Type':'application/json',
                'Accept': 'application/json' 
            })
        };

        fetch('http://localhost:5000/api/carteiras', requestInfo)
            .then(response => {
                if (response.ok) {
                    this.setState({"editando" : false});
                    console.log("Carteira salva com sucesso");
                } else {
                    console.log(response);
                }
            }).catch(function(err){
                console.error(err.message, err);
            });
                
    };

    componentDidMount() {     
        if (this.props.carteira) {
            this.state.carteira = this.props.carteira;
            this.setState({"carteira" : this.state.carteira});
            this.setState({"editando" : false});
            if (this.state.carteira.novo) {
                this.setState({"editando" : true});
            }
            
        }        
    }

    onEdit(carteira) {
        this.state.carteira = carteira;
        this.setState({"carteira" : this.state.carteira});
        this.setState({"editando" : !this.state.editando});
    }   

    render () {
        return (
            <div>                
                <CarteiraPainel 
                    carteira = {this.state.carteira}
                    
                    setCodigoCarteira = {this.setCodigoCarteira}                    
                    setDescricaoCarteira = {this.setDescricaoCarteira}
                    setCotaInicial = {this.setCotaInicial}
                    setSaldoInicial = {this.setSaldoInicial}                    
                    setDataInicial = {this.setDataInicial}
                    adicionarCarteira = {this.adicionarCarteira}
                    onEdit = {this.onEdit}
                    editando = {this.state.editando}/>
            </div>
        );
    }
}