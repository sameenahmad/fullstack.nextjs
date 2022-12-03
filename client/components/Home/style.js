import styled from 'styled-components'

export const NameContainer = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    font-family: 'Metropolis';
    font-size: ${props => props.theme.fontSize.lg};
    color: ${props => props.theme.font.primary};


`