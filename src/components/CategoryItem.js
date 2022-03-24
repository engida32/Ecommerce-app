import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
bottom: none;
padding: 10px;
background-color:white;
color: gray;
cursor: pointer;
font-weight: 900;
`

const CategoryITem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} key={item.id} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP MOE</Button>
      </Info>
    </Container>
  )
}

export default CategoryITem