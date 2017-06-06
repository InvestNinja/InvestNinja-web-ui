import React from 'react';
import Input from 'react-toolbox/lib/input';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

export default class GrupoCarteira extends React.Component {
  render () {
    return (
      <section>
        <Input type='text' label='Nome' name='nome' value={this.props.nomeGrupoCarteira} onChange={this.props.handleChangeNomeGrupoCarteira.bind(this)} maxLength={16 } />
        <List selectable ripple>
            <ListSubHeader caption='Explore characters' />
            <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
            caption='Dr. Manhattan'
            legend="Jonathan 'Jon' Osterman"
            rightIcon='star'
            />
            <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
            caption='Ozymandias'
            legend='Adrian Veidt'
            rightIcon='star'
            />
            <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
            caption='Rorschach'
            legend='Walter Joseph Kovacs'
            rightIcon='star'
            />
            <ListSubHeader caption='Configuration' />
            <ListCheckbox checked caption='Notify new comics' legend='You will receive a notification when a new one is published' />
            <ListDivider />
            <ListItem caption='Contact the publisher' leftIcon='send' />
            <ListItem caption='Remove this publication' leftIcon='delete' />
        </List>
      </section>
    );
  }
}