import React from 'react';
import history from '../../../core/history';
import { PageHeader, Panel, Accordion } from 'react-bootstrap';
import CarteiraResumo from './CarteiraResumo';
import CarteiraDetalheValores from './CarteiraDetalheValores';

export default class CarteiraDetalhe extends React.Component {

    constructor() {
        super();
        this.state = {carteira:{}};
    }

    componentDidMount() {        
        const codigoCarteira = history.getCurrentLocation().query.codigoCarteira;
        // fetch(`http://localhost:5000/api/carteiras/${codigoCarteira}`)
        fetch("http://localhost:5000/api/carteiras/payload/teste")
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

    formatarData(dataParam){        
        let data = new Date(dataParam);
        let dia = data.getDate();
        if (dia.toString().length == 1)
            dia = "0"+dia;

        let mes = data.getMonth()+1;        
        if (mes.toString().length == 1)
            mes = "0"+mes;

        let ano = data.getFullYear();  

        return dia+"/"+mes+"/"+ano;
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
            <div className="row">
                <div className="col-md-3">
                    <CarteiraResumo carteira ={this.state.carteira} />                      
                </div>

                <div className="col-md-9">
                    <div className="row">                        
                            <Panel>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4>Saldo inicial: R$ {this.state.carteira.saldoInicial}</h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h4>Aplicado: R$ {this.state.carteira.totalAplicado}</h4>
                                            </div>                        
                                        </div> 
                                    </div>
                                    <div className="col-md-4">
                                        <CarteiraDetalheValores                         
                                            header = "Inicial"                        
                                            quantidade = {this.state.carteira.qtdCotasInicial}
                                            valor = {this.state.carteira.valorCotaInicial}
                                        />
                                    </div>  
                                    <div className="col-md-4">
                                        <CarteiraDetalheValores                         
                                            header = "Atual"                        
                                            quantidade = {this.state.carteira.qtdCotasAtual}
                                            valor = {this.state.carteira.valorCotaAtual}
                                        />
                                    </div>                                
                                </div>                                  
                            </Panel>                                                                 
                    </div>                       
                </div>    

                <div className="row">
                    <div className="col-lg-12">
                    <Panel header={<span>Histórico</span>} >
                        <Accordion>
                            {   this.state.carteira.itens ?                             
                                this.state.carteira.itens.map(item => 
                                    <Panel
                                        header = {
                                            <h4 className="panel-title">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        Data: {this.formatarData(item.dataCota)}
                                                    </div>

                                                    <div className="col-md-3">
                                                        Valor R$: {item.valorMovimentacoes}
                                                    </div>

                                                    <div className="col-md-3">
                                                        Variação: {item.variacaoCotaPercentual} % R$ {item.variacaoFinanceira}
                                                    </div>

                                                    <div className="col-md-3">
                                                        Saldo: R$ {item.saldo}
                                                    </div>
                                                </div>
                                            </h4>
                                        } 
                                        eventKey= {item.dataCota}
                                        key = {item.dataCota}
                                    >         
                                    <Timeline movimentacoes = {item.movimentacoes} />
                                    </Panel>) 
                                : "carregando..."                             
                            }                        
                        </Accordion>
                    </Panel>
                    </div>
                </div>        
            </div>
        </div>                        
      );
    }
}

class Timeline extends React.Component {

    operacaoPositiva(movimentacao) {        
        return movimentacao.tipo !== 1;
    }

    render() {
        return (
            <ul className="timeline">
                {
                    this.props.movimentacoes.map(movimentacao => 
                        <li className={this.operacaoPositiva(movimentacao) ? "" : "timeline-inverted" } key={movimentacao.ordem} >
                            <div className={this.operacaoPositiva(movimentacao) ? "timeline-badge success" : "timeline-badge danger" }>                            
                                <i className={this.operacaoPositiva(movimentacao) ? "fa fa-plus-circle"  : "fa fa-minus-circle" } />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="timeline-title">{movimentacao.descricao}</h4>                                    
                                </div>
                                <div className="timeline-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            Valor: R$ {movimentacao.valor}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            Tipo: {movimentacao.tipoDescricao}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>  
                    )
                }             
            </ul> 
        )        
    }
}