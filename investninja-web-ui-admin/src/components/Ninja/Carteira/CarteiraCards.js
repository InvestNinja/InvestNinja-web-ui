import React from 'react';
import CarteiraBox from './CarteiraBox';
import { PageHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';

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
                        let carteirasLinha = [];
                        let linhas = [];
                        console.log(data);
                        let count = 0;
                        data.forEach(carteira => {
                            count++;                            
                            carteirasLinha.key = count;
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
                        console.log(linhas);
                        this.setState({linhas: linhas});
                    });
                }
            }).catch(function(err){
                console.error('Erro no get', err);
            });
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
                                    <Button bsStyle="primary" className="btn-circle btn-xl">
                                        <i className="fa fa-plus-circle" />                                
                                    </Button>
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