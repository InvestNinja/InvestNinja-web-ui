import React from 'react';

export default class CarteiraResumo extends React.Component {

    render () {
      return (              
        <div>            
            <div className="row">
                <div className="col-md-6">    
                    <h2>%</h2>     
                </div>            
                <div className="col-md-6">    
                    <h2>{this.props.carteira.variacaoCotaPercentual}</h2>     
                </div>            
            </div>

            <div className="row">
                <div className="col-md-6">    
                    <h2>R$:</h2>     
                </div>            
                <div className="col-md-6">    
                    <h2>{this.props.carteira.variacaoFinanceira}</h2>     
                </div>            
            </div>

            <div className="row">
                <div className="col-md-6">    
                    <h2>Saldo:</h2>     
                </div>            
                <div className="col-md-6">    
                    <h2>{this.props.carteira.saldo}</h2>     
                </div>            
            </div>
        </div>
      );
    }
}