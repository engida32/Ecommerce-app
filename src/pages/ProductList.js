import React from 'react'
import styled from 'styled-components';
import Navbar from '../sections/Navbar';
import Announcement from '../sections/Announcement';
import Products from '../sections/Products';
import NewsLetter from '../sections/NewsLetter';
import Footer from '../sections/Footer';
const Container = styled.div`
`

const Title = styled.h1`
margin: 20px;`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
margin-left: 10px;
`
const Filter = styled.div`
margin: 20px;`

const FilterText = styled.span`
font-size: 20px;
font-weight:600;
margin-right: 20px;
`
const Select = styled.select`
padding:10px;

margin-right:20px ;
margin-left:20px;
`
const Option = styled.option``
const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title> Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Product
                        <Select>
                            <Option disabled selected> Color</Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Red</Option>
                            <Option>Yellow</Option>
                            <Option>Green</Option>
                            <Option>Pink</Option>
                        </Select>
                        <Select>
                            <Option disabled selected> Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                            <Option>XXL</Option>
                        </Select>
                    </FilterText>
                </Filter>
                <Filter>
                    <FilterText> Sort Product
                        <Select>
                            <Option disabled selected> Newest</Option>
                            <Option>Price(asc)</Option>
                            <Option>Price(desc)</Option>

                        </Select>
                    </FilterText>

                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList