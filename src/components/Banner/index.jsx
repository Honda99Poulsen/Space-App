import styled from "styled-components"


const Container = styled.div`
 background-image: ${props => `url(${props.$backgroundImage})`};
 flex-grow: 1;
 background-repeat: no-repeat;
 background-size: cover;
 border-radius: 20px;
 max-width:100%;
 display: flex;
 align-items: center;
 height: 328px;
`

const H1 = styled.h1`
    color: #fff;
    font-size: 40px;
    font-weight: 400;
    max-width: 301px;
    padding-left: 64px;
    line-height: 48px;
`

const Banner = ({texto, backgroundImage}) => {
    return (
        <Container $backgroundImage={backgroundImage}>
            <H1>{texto}</H1>
        </Container>
    )
}

export default Banner