import React from 'react';
import Input from '../visuais/Input'

export default class Carteira extends React.Component {

    render () {
      return (        
          <form onSubmit={this.props.adicionarCarteira} method="post" className="form-horizontal">
            <Input type='text' label='Código Carteira' name='codigoCarteira' columns='4' value={this.props.codigoCarteira}  onChange={this.props.setCodigoCarteira} />          
            <Input type='text' label='Descrição Carteira' name='descricaoCarteira' columns='4' value={this.props.descricaoCarteira} onChange={this.props.setDescricaoCarteira}/>
            <Input type='number' label='Valor inicial da cota' name= 'cotaInicial' columns='4' value={this.props.cotaInicial} onChange={this.props.setCotaInicial}/>
            <Input type='number' label='Saldo Inicial'  columns='4'  name='saldoInicial' value={this.props.saldoInicial} onChange={this.props.setSaldoInicial}/>

            {/*<DatePicker label='Data Inicial' name='DataInicial' locale='pt-br' value={this.props.dataInicial} onChange={this.props.setDataInicial}/>*/}
            {/*<Button type="submit" icon='bookmark' label='Adicionar Carteira' raised primary />*/}
          </form>          
      );
    }
}