import { categories } from "../util/data";
import React from "react";
import CategoryITem from "../components/CategoryItem";
import { Grid } from "@mui/material";

const Categories = () => {
  return (
    <Grid container md={12} spacing={4}>
      {categories.map((items) => (
        <Grid item xs={12} md={4} key={items.id}>
          <CategoryITem item={items} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
