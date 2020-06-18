import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 4,
    },
}))`
    padding: 10px 0;
    margin-bottom: 10px;
`;