import React from 'react';
import Input from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker';

export default class Carteira extends React.Component {
  render () {
    return (
      <section>        
        <Input type='text' label='Código Carteira' name='CodigoCarteira' value='teste'/>
        <Input type='text' label='Descrição Carteira' name='DescricaoCarteira' />
        <Input type='number' label='Valor inicial da cota' name= 'CotaInicial'/>
        <Input type='number' pattern="^\d+(\.|\,)\d{2}$" label='Saldo Inicial' name= 'SaldoInicial'/>
        <DatePicker label='Data Inicial' name='Data Inicial' locale='pt-br' />
      </section>
    );
  }
}