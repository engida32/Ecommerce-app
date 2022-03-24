import styled from "styled-components"
import Product from '../components/Product'
import { popularProducts } from '../data/data';
const Container = styled.div`
  /* padding: 20px; */
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products