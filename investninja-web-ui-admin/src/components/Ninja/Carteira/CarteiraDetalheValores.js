import React from 'react';
import { Panel } from 'react-bootstrap';

export default class CarteiraDetalheValores extends React.Component {

    render () {
      return (              
        <div>            
            <Panel
            header={<span><h4>Cota {this.props.header} </h4></span>}>
            <div className="row"> 
                <div className="col-md-12">    
                    Qtd: {this.props.quantidade}
                </div>                                       
            </div>                     
            <div className="row">   
                <div className="col-md-12">    
                    Valor: R$: {this.props.valor}
                </div>                                       
            </div>
          </Panel>                              
        </div>
      );
    }
}