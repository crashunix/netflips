import React from 'react';


import { Container, Movie, Img, Button, Actions, Label } from './styles';
import { View, Text } from 'react-native';

import Entypo from '@expo/vector-icons';

import img1 from '../../images/after.jpg';

import SectionTitle from '../../components/SectionTitle';

const movie = {
    key: String(Math.random()),
    img: img1,
    label: 'Doações',
    mark: true,
    newEps: true,
};

export default function Disponivel() {
    return <>
        <SectionTitle>Já disponível</SectionTitle>
        <Container>
            <Movie>
                <Img source={movie.img} />
                <Actions>
                        <Button light><Label>Assistir</Label></Button>
                        <Button><Label>Assistir</Label></Button>
                </Actions>
            </Movie>
        </Container></>;
}