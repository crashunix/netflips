import React from 'react';

import { AntDesign, Entypo } from '@expo/vector-icons';


import { Container, Movie, Img, Button, Actions, Label } from './styles';
import { View, Text } from 'react-native';

import img1 from '../../images/21-bridges.jpg';

import SectionTitle from '../../components/SectionTitle';

export default function Disponivel(props) {
    return (<>
        <SectionTitle>Já disponível</SectionTitle>
        <Container>
            <Movie>
                <Img source={{uri: props.data.img}} />
                <Actions>
                    <Button light><AntDesign name="caretright" /><Label light>Assistir</Label></Button>
                    <Button><Entypo name="plus" color="#fff" /><Label>Minha lista</Label></Button>
                </Actions>
            </Movie>
        </Container>
    </>);
}