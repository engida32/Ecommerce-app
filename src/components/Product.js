import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components';

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
background-color: rgb(0,0,0,0.2);
align-items: center;
justify-content: center;
display: flex;
z-index: 3;
transition: all 0.6s ease-in-out;
`
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;

  margin-left:100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
      opacity:1;
  }
  cursor: pointer;

`
const Circle = styled.div`
width: 200px;
height: 200px;
position: absolute;
border-radius: 50%;
background-color: whitesmoke;


`
const Image = styled.img`
    height:75%;
    z-index: 2;
`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
align-items: center;
justify-content: center;
margin: 10px;
display: flex;
transition: all 0.5s ease-in-out;

&:hover{
background-color: #e9f232;
transform: scale(1.5);
}

`


const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product