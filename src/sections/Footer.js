import {
  FacebookOutlined,
  Instagram,
  MailOutlined,
  PhoneAndroidOutlined,
  RoomOutlined,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { styled  } from "@mui/system";
import { Grid,Box } from "@mui/material";
import { Typography } from "@mui/material";
 
const Logo = styled('h1',{})({});
const Desc = styled('p',{})({

  margin: '20px 0px',
  display: 'flex'
  
});
const SocialContainer = styled(Box,{})({

  display: 'flex'
});

const SocialIcon = styled('div',{})({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  color: 'white',
  backgroundColor:'gray',
  //TODO:change with prop
  // backgroundColor: `'#${(props) => props.color}'`,
  display: 'flex',
  alignItems: 'center',
  justifycontent: 'center',
  marginRight: '20px',
});


// const SocialIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   color: white;
//   background-color: #${(props) => props.color};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
// `;

// const Center = styled.div`
//   flex: 1;
//   padding: 20px;
//   ${mobile({
//     display: "none",
//   })}
// `;
// const Title = styled.h3`
//   margin-bottom: 30px;
//   //
// `;
// const ContactItem = styled.li`
//   list-style: none;
//   /* justify-content: space-around; */
//   margin-bottom: 20px;
//   display: flex;
//   align-items: center;
// `;
const List = styled('ul',{})({

  listStyle: 'none',
  margin: 0,
  padding: 0,
  // padding: '10px',
  display: 'flex',
  flexWrap: 'wrap'
   
});
const ListItem = styled('li',{})({

  marginBottom: '10px',
  width: '50%'
});
`;
// const Right = styled.div`
//   flex: 1;
//   padding: 20px;
//   ${mobile({
//     backgroundColor: "lightgray",
//   })}
// `;
// const Payment = styled.img`
//   margin-top: 10px;
// `;

const Footer = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 9 }}
      // columns={{ xs: 1, sm: 3, md: 4 }}
      sx={{
        margin:'10px',
        display: "flex",
        justifyContent:'space-evenly'
      }}
    >
      <Grid item xs={3}>
        <Logo>DEV</Logo>
        <Desc sx={{margin:'10px'}}>
          Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
          aliquid. ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          ipsum mole stiae unde natus, provident reiciendis itaque soluta
          quisquam! Sint, sunt?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlined />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Telegram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Grid>
      <Grid item xs={4}>
        <Typography> Usefull Link</Typography>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Discount</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          flex: 1,
          p: "20px",
        }}
      >
        <Typography fontWeight={300}>Contact</Typography>
        <List
          sx={{
            marginBottom: "10px",
            width: "50%",
          }}
        >
          <RoomOutlined style={{ marginRight: "10px" }} />
          321 AA bole{" "}
        </List>
        <List>
          <PhoneAndroidOutlined style={{ marginRight: "10px" }} />
          (125) 435 4522
        </List>
        <List>
          <MailOutlined style={{ marginRight: "10px" }} />
          contact@dev.com
        </List>
        {/* <Image src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
      </Grid>
    </Grid>
  );
};

export default Footer;
