import React from 'react';

export default class CarteiraResumo extends React.Component {

    render () {
      return (              
        <div>            
            <div className="row">
                <div className="col-md-12">    
                    <h2>% {this.props.carteira.variacaoCotaPercentual}</h2>     
                </div>            
            </div>

            <div className="row">
                <div className="col-md-12">    
                    <h2>$ {this.props.carteira.variacaoFinanceira}</h2>     
                </div>            
            </div>

            <div className="row">
                <div className="col-md-12">    
                    <h2>Saldo: {this.props.carteira.saldo}</h2>     
                </div>            
            </div>
        </div>
      );
    }
}