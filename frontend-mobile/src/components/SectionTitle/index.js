import React from 'react';

import { Title } from './styles';

export default function SectionTitle(props) {
    return (
        <Title>{props.children}</Title>
    );
}