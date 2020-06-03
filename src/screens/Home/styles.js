import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
background: #212121;
flex: 1;
`;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Container = styled.ScrollView``;

export const Logo = styled.Image`
    width: 46px;
    height: 46px;
    margin-left: -20px;
`;

export const Nav = styled.View`
    color: #fff;
    display: flex;
    flex-direction: row;
`;

export const NavItem = styled.Text`
    color: #fff;
    font-size: 16px;
    margin: 0 10px;
`;