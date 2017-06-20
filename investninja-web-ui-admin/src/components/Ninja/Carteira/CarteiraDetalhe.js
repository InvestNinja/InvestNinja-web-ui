import React from 'react';
import history from '../../../core/history';
import { PageHeader } from 'react-bootstrap';

export default class CarteiraDetalhe extends React.Component {

    constructor() {
        super();
        this.state = {carteira:{}};
    }

    componentDidMount() {
        const codigoCarteira = history.getCurrentLocation().query.codigoCarteira;
        fetch(`http://localhost:5000/api/carteiras/${codigoCarteira}`)
            .then(response => {
                if (response.ok) {
                    response
                    .json()
                    .then(data => {
                        this.setState({carteira: data});                          
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
                            <div className="col-md-1">
                                <h4>{this.state.carteira.codigo}</h4>
                            </div>                                                                
                            <div className="col-md-11 text-left">
                                <h4>{this.state.carteira.descricao}</h4>                                    
                            </div>                                                                                        
                        </div>
                    </PageHeader>
                </div>
            </div>      
        </div>                        
      );
    }
}