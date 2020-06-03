import styled from 'styled-components/native';

export const Option = styled.TouchableOpacity`
    width: 108px;
    margin-right: 6px;
    align-items: center;
`;
export const Img = styled.Image`
    width: 100%;
    height: 155px;
`;

export const Mark = styled.Image`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 3px;
    left: 0;
    z-index: 999;
`;

export const NewEps = styled.Text`
    width: 95px;
    padding: 3px;
    background: #E50914;
    border-radius: 3px;
    position: absolute;
    top: 128px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    font-weight: bold;
`;