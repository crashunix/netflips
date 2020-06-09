import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, Container, Logo, Nav, NavItem, NoConnection } from './styles';

import SimpleList from '../../components/SimpleList';
import Main from '../../components/Main';
import Disponivel from '../../components/Disponivel';

import logo from '../../images/Netflix-logo2.png';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            rows: false,
        };
    }

    async componentDidMount() {
        const response = await fetch('http://192.168.1.135:3000/rows');
        const data = await response.json(); 
        this.setState({ rows: data });
    }

    render() {

        const { rows } = this.state;

        var content = '';
        if(rows) {
            content = rows.map((item) => {
                if (item.type == 'list') {
                    return (<SimpleList key={item.id} sectionTitle={item.title} data={item.movies}></SimpleList>);
                } else if (item.type == 'available') {
                    return (<Disponivel key={item.id} data={item.movie}></Disponivel>);
                } else if (item.type == 'main') {
                    return (<Main key={item.id} data={item.movie}></Main>);
                }
            });
        } else {
            content = <NoConnection>Não foi possível se conectar à Netflips</NoConnection>
        }

        return (
            <Wrapper>
                <Container>
                    <Header>
                        <Logo source={logo}></Logo>
                        <NavItem>Séries</NavItem>
                        <NavItem>Filmes</NavItem>
                        <NavItem>Minha lista</NavItem>
                    </Header>
                    {content}
                </Container>
            </Wrapper>
        );
    }
}

export default Home;