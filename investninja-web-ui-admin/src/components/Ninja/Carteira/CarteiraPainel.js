import React, { PropTypes } from 'react';
import { Panel, Button } from 'react-bootstrap';
import Carteira from './Carteira';
import CarteiraResumo from './CarteiraResumo';
import history from '../../../core/history';

export default class CarteiraPainel extends React.Component {

    constructor() {
        super();        
    }     

    render() {
        return (
            <Panel 
                header={<span>{this.props.carteira.codigo}</span>} className="panel-primary"
                footer={
                    <div className = "row">
                        <div className="col-md-6 text-left">   
                            <form onSubmit={(event) => {
                                    event.preventDefault();                            
                                    this.props.onEdit(this.props.carteira);
                                }}>
                                <Button type = "submit" bsSize="large" bsStyle="primary" className="btn-circle">
                                    <i className="fa fa-list" />
                                </Button>
                            </form>
                        </div>
                        <div className="col-md-6 text-right">
                            <form onSubmit={(event) => {
                                    event.preventDefault();                            
                                    history.push(`/carteira-detalhes?codigoCarteira=${this.props.carteira.codigo}`)                                    
                                }}>
                                <Button type = "submit" bsSize="large" bsStyle="primary" className="btn-circle">
                                    <i className="fa fa-pencil-square" />
                                </Button>
                            </form>
                        </div>
                    </div>
                }>
            <div>     
                {
                    this.props.editando
                    ? <Carteira          
                        carteira = {this.props.carteira}              

                        setCodigoCarteira = {this.props.setCodigoCarteira}
                        setDescricaoCarteira = {this.props.setDescricaoCarteira}
                        setCotaInicial = {this.props.setCotaInicial}
                        setSaldoInicial = {this.props.setSaldoInicial}
                        setDataInicial = {this.props.setDataInicial}                        
                        adicionarCarteira = {this.props.adicionarCarteira}/>    

                    : <CarteiraResumo carteira = {this.props.carteira} />
                }                                   
            </div>
          </Panel>
        );        
    }
}

