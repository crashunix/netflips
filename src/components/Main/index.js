import React from 'react';

import { AntDesign, Entypo } from '@expo/vector-icons';


import { Container, Movie, Img, Button, Actions, Label, Fade } from './styles';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import img1 from '../../images/1004905453.webp';

export default function Main(props) {
    return (<>
        <Container>
            <Movie>
                <ImageBackground source={props.data.img} style={styles.image} >
                    <Fade colors={['rgba(255,255,255,0)', '#000']}>
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