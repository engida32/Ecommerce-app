import { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from '../data/data.js'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;


`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease ;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #${props => (props.bg)};
    align-items: center;


`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size:70px`
const Desc = styled.h2`
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    font-weight: bold;
    margin:50px 0px`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    justify-content: center;
    background-color: gray;
    display: flex;
    border-radius: 50%;
    align-items: center;
    position: absolute;
    top: 0 ;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: .8;
    z-index: 1;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ?slideIndex-1:2)
        }
        else(setSlideIndex(slideIndex<2?slideIndex+1:0))

    }
    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowBackIosIcon />
            </Arrow>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowForwardIosIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map(item => (<Slide bg={item.bg}key={item.id}>
                    <ImageContainer >
                        <Image src={item.img}
                        />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc> {item.desc}</Desc>
                        <Button> BUY NOW</Button>
                    </InfoContainer>
                </Slide>


                ))}



            </Wrapper>
        </Container>
    )
}

export default Slider