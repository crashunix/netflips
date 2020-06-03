import styled from 'styled-components/native';

export const Movie = styled.View`
    width: 100%;
    /* height: 268px; */
`;

export const Container = styled.View`
    padding: 10px 0;
`;

export const Img = styled.Image`
    width: 100%;
    height: 215px;
`;

export const Button = styled.TouchableOpacity`
    padding: 10px;
    background: ${props => props.light ? '#fff' : '#333'};
`;

export const Label = styled.Text`
    text-align: center;
    color: ${props => props.light ? '#333' : '#fff'};
`;

export const Actions = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
`;