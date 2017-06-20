import React from 'react';
import CarteiraBox from './CarteiraBox';
import { PageHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import { Form } from 'react-bootstrap';
import { animateScroll } from 'react-scroll';

export default class CarteiraCards extends React.Component {
    
    constructor() {
        super();
        this.state = {carteiras : [], linhas : []};        
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/carteiras')
            .then(response => {
                if (response.ok) {
                    response
                    .json()
                    .then(data => {
                        this.setState({carteiras: data});  
                        let linhas = this.montarLinhas(data);                      
                        this.setState({linhas: linhas});                        
                    });
                }
            }).catch(function(err){
                console.error('Erro no get', err);
            });
    }

    montarLinhas(carteiras) {        
        let carteirasLinha = [];
        let linhas = [];                
        carteiras.forEach(carteira => {            
            if (carteirasLinha.length < 4) {
                carteirasLinha.push(carteira);
            } else {
                linhas.push(carteirasLinha);
                carteirasLinha = [];
                carteirasLinha.push(carteira);
            }                         
        });
        if (carteirasLinha.length > 0) {            
            linhas.push(carteirasLinha);
        }    

        let count = 0;
        linhas.forEach(linha => {
            count++;
            linha.key = count;
        });
        return linhas;
    }

    novaCarteira(event) {
        event.preventDefault();    
        let carteiraVazia = this.criarCarteiraVazia();        
        let carteiras = this.state.carteiras;
        carteiras.push(carteiraVazia);
        
        this.setState({carteiras: carteiras});  
        let linhas = this.montarLinhas(carteiras);
        animateScroll.scrollToBottom();        
        this.setState({linhas: linhas}); 
    }

    criarCarteiraVazia() {
        return {
                "codigo": "",
                "descricao": "",            
                "saldo": 0.0,
                "valorMovimentacao": 0.0,
                "dataCota": new Date(),
                "variacaoCotaPercentual" : 0,
                "variacaoFinanceira" : 0,
                "novo" : true
            };
    }

    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <PageHeader>
                            <div className="row">
                                <div className="col-md-3">
                                    <span>Carteiras</span>
                                </div>
                                <div className="col-md-9 text-right">
                                    <Form onSubmit={this.novaCarteira.bind(this)} method="post">
                                        <Button type="submit"  bsStyle="primary" className="btn-circle btn-xl">
                                            <i className="fa fa-plus-circle" />                                
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </PageHeader>
                    </div>
                </div>                   
                <div className="row">
                    {
                        this.state.linhas.map(linha => <div key = {linha.key} className="row"><CardRows rows={linha}/></div>)
                    }                                               
                </div>                                               
            </div>
        );
    }
}

class CardRows extends React.Component {

    render() {
        return (            
            <div>
                {
                    this.props.rows.map(carteira => <div key = {carteira.codigo} className="col-md-3"><CarteiraBox carteira = {carteira}/></div>)
                }            
            </div>
        )
    }
}