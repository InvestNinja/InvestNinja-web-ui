import React from 'react';

export default class CarteiraResumo extends React.Component {

    render () {
      return (              
        <div>            
            <div className="row">                
                <div className="col-md-4">    
                    <h3>{this.props.carteira.variacaoCotaPercentual} %</h3>     
                </div>            
                <div className="col-md-8">    
                    <h2>R$: {this.props.carteira.variacaoFinanceira}</h2>     
                </div>                            
            </div>

            <div className="row">
                <div className="col-md-12">    
                    <h3>Saldo: R$ {this.props.carteira.saldo}</h3>     
                </div>                            
            </div>
        </div>
      );
    }
}