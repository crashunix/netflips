import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Header, Container, Logo, Nav, NavItem } from './styles';

import EmAlta from '../../components/EmAlta';

import SimpleList from '../../components/SimpleList';
import Main from '../../components/Main';
import Disponivel from '../../components/Disponivel';

import logo from '../../images/Netflix-logo2.png';

import img1 from '../../images/the-astronaut.jpg';
import img2 from '../../images/movie-title.jpg';
import img3 from '../../images/21-bridges.jpg';
import img4 from '../../images/replicas.jpg';
import img5 from '../../images/after.jpg';
import img6 from '../../images/joker.jpg';
import img7 from '../../images/1917.jpg';


const emAlta =
{
    key: String(Math.random()),
    title: 'Em alta',
    movies: [
        {
            key: String(Math.random()),
            img: img5,
            label: 'Doações',
            mark: true,
            newEps: true,
        },
        {
            key: String(Math.random()),
            img: img3,
            label: 'Doações',
            mark: true,
            newEps: false,
        },
        {
            key: String(Math.random()),
            img: img4,
            label: 'Doações',
            mark: true,
            newEps: false,
        },
        {
            key: String(Math.random()),
            img: img1,
            label: 'Doações',
            mark: true,
            newEps: false,
        },
        {
            key: String(Math.random()),
            img: img2,
            label: 'Doações',
            mark: true,
            newEps: false,
        },
        {
            key: String(Math.random()),
            img: img6,
            label: 'Doações',
            mark: true,
            newEps: false,
        },
    ],
};

const novoNaNetflix =
{
    key: String(Math.random()),
    title: 'Recente na Netflix',
    movies: [
        {
            key: String(Math.random()),
            img: img5,
            label: 'Doações',
            mark: true,
            newEps: true,
        },
        {
            key: String(Math.random()),
            img: img3,
            label: 'Doações',
            mark: true,
            newEps: false,
        },
        {
            key: String(Math.random()),
            img: img4,
            label: 'Doações',
            mark: true,
            newEps: false,
        },
        {
            key: String(Math.random()),
            img: img1,
            label: 'Doações',
            mark: true,
            newEps: false,
        },
        {
            key: String(Math.random()),
            img: img2,
            label: 'Doações',
            mark: true,
            newEps: false,
        },
        {
            key: String(Math.random()),
            img: img6,
            label: 'Doações',
            mark: true,
            newEps: false,
        },
    ],
};

export default function Home() {
    return <Wrapper>
        <Container>
            <Header>
                <Logo source={logo}></Logo>
                <NavItem>Séries</NavItem>
                <NavItem>Filmes</NavItem>
                <NavItem>Minha lista</NavItem>
            </Header>
            <Main></Main>
            <SimpleList key={emAlta.key} sectionTitle={emAlta.title} data={emAlta.movies}></SimpleList>
            <Disponivel></Disponivel>
            <SimpleList key={novoNaNetflix.key} sectionTitle={novoNaNetflix.title} data={novoNaNetflix.movies}></SimpleList>
        </Container>
    </Wrapper>
}