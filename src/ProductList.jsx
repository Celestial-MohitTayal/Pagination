import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const ProductList = ({currentData}) => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ flexWrap: "wrap", padding: 13 }}
    >
      {currentData?.map((product) => {
        return (
          <div style={{ margin: "10px" }} key={product.id}>
            <Card sx={{ width: "750px" }}>
              <CardActionArea sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  height="275"
                  image={product.images[0]}
                  sx={{ objectFit: "fill" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.brand}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", marginBottom: "20px" }}
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", marginBottom: "10px" }}
                  >
                    MRP: {product.price}$
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Rating: {product.rating} / 5.00
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button size="small" color="primary">
                  Add to cart..
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </Stack>
  );
};

export default ProductList;
