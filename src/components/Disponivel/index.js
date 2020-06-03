import React from 'react';

import { AntDesign, Entypo } from '@expo/vector-icons';


import { Container, Movie, Img, Button, Actions, Label } from './styles';
import { View, Text } from 'react-native';

import img1 from '../../images/21-bridges.jpg';

import SectionTitle from '../../components/SectionTitle';

const movie = {
    key: String(Math.random()),
    img: img1,
    label: 'Doações',
    mark: true,
    newEps: true,
};

export default function Disponivel() {
    return (<>
        <SectionTitle>Já disponível</SectionTitle>
        <Container>
            <Movie>
                <Img source={movie.img} />
                <Actions>
                    <Button light><AntDesign name="caretright" /><Label light>Assistir</Label></Button>
                    <Button><Entypo name="plus" color="#fff" /><Label>Minha lista</Label></Button>
                </Actions>
            </Movie>
        </Container>
    </>);
}