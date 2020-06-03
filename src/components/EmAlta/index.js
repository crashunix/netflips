import React from 'react';

import { Container, Option, Img, Label } from './styles';

import img1 from '../../images/the-astronaut.jpg';
import img2 from '../../images/movie-title.jpg';
import img3 from '../../images/21-bridges.jpg';
import img4 from '../../images/replicas.jpg';
import img5 from '../../images/after.jpg';
import img6 from '../../images/joker.jpg';
import img7 from '../../images/1917.jpg';

import Movie from '../Movie';

import SectionTitle from '../../components/SectionTitle';

const movies = [
    {
        key: String(Math.random()),
        img: img1,
        label: 'Doações',
        mark: true,
        newEps: true,
    },
    {
        key: String(Math.random()),
        img: img2,
        label: 'Doações',
        mark: false,
        newEps: true,
    },
    {
        key: String(Math.random()),
        img: img3,
        label: 'Doações',
        mark: false,
    },
    {
        key: String(Math.random()),
        img: img4,
        label: 'Doações',
        mark: false,
    },
    {
        key: String(Math.random()),
        img: img5,
        label: 'Doações',
        mark: true,
    },
    {
        key: String(Math.random()),
        img: img6,
        label: 'Doações',
        mark: false,
    },
    {
        key: String(Math.random()),
        img: img7,
        label: 'Doações',
        mark: true,
    },
];

export default function EmAlta() {
    return <>
        <SectionTitle>Em alta</SectionTitle>
        <Container>
            {movies.map((movie) => (
                <Movie key={movie.key} image={movie.img} mark={movie.mark} newEps={movie.newEps} />
            ))}
        </Container></>;
}