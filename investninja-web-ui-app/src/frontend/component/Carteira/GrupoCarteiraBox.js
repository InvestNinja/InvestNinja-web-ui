import React from 'react';
import Input from 'react-toolbox/lib/input';
import GrupoCarteira from './GrupoCarteira.js';    // A button with complex overrides

export default class GrupoCarteiraBox extends React.Component {

    constructor() {
        super();
        this.state = { nomeGrupoCarteira: ''}
    }  

    handleChangeNomeGrupoCarteira(novoNome) {
        this.setState({nomeGrupoCarteira: novoNome})
    }

    render () {
        return (
        <section>
            <GrupoCarteira nomeGrupoCarteira = {this.state.nomeGrupoCarteira} handleChangeNomeGrupoCarteira = {this.handleChangeNomeGrupoCarteira} />
        </section>
        );
    }
}