import React from 'react';

import { AntDesign, Entypo } from '@expo/vector-icons';


import { Container, Movie, Img, Button, Actions, Label, Fade } from './styles';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import img1 from '../../images/1004905453.webp';

const movie = {
    key: String(Math.random()),
    img: img1,
    label: 'Doações',
    mark: true,
    newEps: true,
};

export default function Main() {
    return (<>
        <Container>
            <Movie>
                <ImageBackground source={movie.img} style={styles.image} >
                    <Fade colors={['rgba(255,255,255,0)', '#212121']}>
                    </Fade>
                </ImageBackground>

            </Movie>
        </Container>
    </>);
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 600,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
});