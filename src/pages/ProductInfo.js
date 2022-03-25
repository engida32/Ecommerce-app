import React from 'react'
import styled from 'styled-components'
import Navbar from '../sections/Navbar';
import NewsLetter from '../sections/NewsLetter';
import Footer from '../sections/Footer';
import Announcement from '../sections/Announcement';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../util/responsive';

const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({
    flexDirection: 'column', padding: '10px'
})}

`
const ImageContainer = styled.div`
flex: 1;

`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({
    height: '50%'
})}
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({
    padding: '10px'
})}
`
const Title = styled.h1`
font-weight: 200;

`
const Desc = styled.h2`
font-weight: 200;
margin: 20px 0px ;
`
const Price = styled.h2`

font-weight: 500;
font-size: 40px;`

const FilterContainer = styled.div`
display:flex;
width: 50%;
margin: 30px,0px;
justify-content: space-between;
${mobile({
    width: '100%'
})}

`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight:200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile({
    width: '100%'
})}
`
const AmountContainer = styled.div`
 display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
margin-left: 30px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background: teal;
      transition: 3 sec ease-in;
  }
`


const ProductInfo = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src='https://i.ibb.co/S6qMxwr/jean.jpg/' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jump Suit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Volupta
                        tum voluptatibus ducimus delectus ut, deserunt nihil obcaecati odit p
                        laceat voluptas quasi exImage plicabo voluptate. Maxime dolor neque ullam
                        placeat nisi  facilis ipsam. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. In, reprehenderit!
                    </Desc>

                    <Price> $ 40</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle> Color</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='darkblue' />
                            <FilterColor color='gray' />
                        </Filter>
                        <Filter>
                            <FilterTitle> Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount> 1</Amount>
                            <Add />
                            <Button>ADD TO CART</Button>
                        </AmountContainer>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />

        </Container>
    )
}

export default ProductInfo