import styled from 'styled-components/native';

import {LinearGradient} from 'expo-linear-gradient';

export const Movie = styled.View `
    width: 100%;
    /* height: 268px; */
`;

export const Container = styled.View`
    margin-top: -50px;
`;

export const Img = styled.View `
    width: 100%;
    height: 405px;
`;

export const Fade = styled(LinearGradient)`
    width: 100%;
    height: 600px;
`;

export const Button = styled.TouchableOpacity `
    padding: 10px;
    background: ${props => props.light ? '#fff' : '#333'};
    width: 46%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.Text `
    color: ${props => props.light ? '#333' : '#fff'};
    text-align: center;
    margin-left: 10px;
`;

export const Actions = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    margin-top: -50px;
`;