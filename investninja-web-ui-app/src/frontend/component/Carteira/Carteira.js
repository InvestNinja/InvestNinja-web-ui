import React from 'react';
import Input from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker';
import {Button, IconButton} from 'react-toolbox/lib/button';

export default class Carteira extends React.Component {

    render () {
      return (
        <section>        
          <form onSubmit={this.props.adicionarCarteira} method="post">
            <Input type='text' label='Código Carteira' name='codigoCarteira' value={this.props.codigoCarteira} onChange={this.props.setCodigoCarteira}/>
            <Input type='text' label='Descrição Carteira' name='descricaoCarteira' value={this.props.descricaoCarteira} onChange={this.props.setDescricaoCarteira}/>
            <Input type='number' label='Valor inicial da cota' name= 'cotaInicial' value={this.props.cotaInicial} onChange={this.props.setCotaInicial}/>
            <Input type='number' pattern="^\d+(\.|\,)\d{2}$" label='Saldo Inicial' name= 'saldoInicial' value={this.props.saldoInicial} onChange={this.props.setSaldoInicial}/>
            <DatePicker label='Data Inicial' name='DataInicial' locale='pt-br' value={this.props.dataInicial} onChange={this.props.setDataInicial}/>
            <Button type="submit" icon='bookmark' label='Adicionar Carteira' raised primary />
          </form>  
        </section>
      );
    }
}