import React from 'react'
import styled from 'styled-components'
import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'
import NewsLetter from './NewsLetter'
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
background-color: ${(props) => props.type === 'filled' ? 'black' : 'transparent'};
color: ${(props) => props.type === 'filled' && 'white'};
border: ${(props) => props.type === 'filled' && 'none'};
`
const TopTexts = styled.div`


`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
 flex: 3;
/*
display: flex; */
`

const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  /*
justify-content: space-between; */

`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
 width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px
  `
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 5px;
padding: 20px;
height: 50vh;
`

const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px ;
display: flex;
justify-content: space-between;
font-size: ${props => props.type === 'total' && '30px'};
font-weight: ${props => props.type === 'total' && '800'};

`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
width: 100%;
margin-top: 145px;
padding:10px;
background-color: black;
color: white;
font-weight: 600;
`

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG </Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Wish List(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW </TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image
                                    src="https://o.remove.bg/downloads/17fecde4-de52-4e02-ab35-376dea727dcf/selected-femme-alice-wide-jeans-removebg-preview.png"
                                />
                                <Details>
                                    <ProductName><b>Product</b> JESSIE THUNDER SHOES  </ProductName>
                                    <ProductId> <b>ID</b> 09323438748</ProductId>
                                    <ProductColor color='black' />
                                    <ProductSize><b> Size</b> 38.3</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount> 2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 222</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image
                                    src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'
                                />
                                <Details>
                                    <ProductName><b>Product</b> JESSIE THUNDER SHOES  </ProductName>
                                    <ProductId> <b>ID</b> 09323438748</ProductId>
                                    <ProductColor color='green' />
                                    <ProductSize><b> Size</b> 38.3</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount> 2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 222</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle> ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText> Subtotal</SummaryItemText>
                            <SummaryItemPrice> $ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText> Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice> $ 5.8</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText> Discount</SummaryItemText>
                            <SummaryItemPrice> $ - 3.6</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText > Total</SummaryItemText>
                            <SummaryItemPrice> $ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton> CHECKOUT</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Cart