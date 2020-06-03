import React from 'react';

import { Container } from './styles';

import Movie from '../Movie';

import SectionTitle from '../../components/SectionTitle';

export default function SimpleList(props) {
    const movies = props.data;
    return <>
        <SectionTitle>{props.sectionTitle}</SectionTitle>
        <Container>
            {props.data.map((movie) => (
                <Movie key={movie.key} image={movie.img} mark={movie.mark} newEps={movie.newEps} />
            ))}
        </Container></>;
}