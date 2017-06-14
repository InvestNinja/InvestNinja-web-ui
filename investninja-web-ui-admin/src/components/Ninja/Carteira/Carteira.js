import React from 'react';
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

export default class Carteira extends React.Component {

    render () {
      return (              
        <div className="row">
          <div className="col-md-12">    
              <Form onSubmit={this.props.adicionarCarteira} method="post">                                     

                <FormGroup controlId="formBasicText" >
                  <ControlLabel>Código da carteira</ControlLabel>
                  <FormControl type="text" value={this.props.carteira.codigo} onChange={this.props.setCodigoCarteira}/>                  
                  <HelpBlock>Identificador único da carteira</HelpBlock>
                </FormGroup>

                <FormGroup controlId="formBasicText" >
                  <ControlLabel>Descrição da carteira</ControlLabel>
                  <FormControl type="text" value={this.props.carteira.descricao} onChange={this.props.setDescricaoCarteira}/>                                
                </FormGroup>

                <FormGroup>
                  <InputGroup>
                    <ControlLabel>Valor cota inicial</ControlLabel>
                    <FormControl type="number"  value={this.props.carteira.valorCotaInicial} onChange={this.props.setCotaInicial} />                    
                  </InputGroup>
                </FormGroup>   

                <FormGroup>
                  <InputGroup>
                    <ControlLabel>Saldo inicial</ControlLabel>                    
                    <FormControl type="number" value={this.props.carteira.saldo} onChange={this.props.setSaldoInicial}/>                    
                  </InputGroup>
                </FormGroup>

                {/*<FormGroup controlId="formBasicText" >
                  <ControlLabel>Data inicial</ControlLabel>
                  <FormControl type="date" value={this.props.carteira.dataCota} onChange={this.props.setDataInicial}/>                                    
                </FormGroup>   */}

                <Button type="submit"  bsStyle="primary" bsSize="large" block>Salvar</Button>                         
              </Form>           
            </div>
          </div>                
      );
    }
}