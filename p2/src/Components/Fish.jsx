import React from "react";
import Stars from "./Stars";
import { Button } from "react-bootstrap";

const Fish = ({ fish, handleAddArticle }) => {
  return (
    <>
      <h3>name:{fish.name}</h3>
      <h4> price: {fish.price},00$</h4>
      <img src={fish.image_url} alt="" />

      <Stars note={fish.note} />
      <Button onClick={() => handleAddArticle(fish)} size="lg" variant="info">
        Ajouter
      </Button>
    </>
  );
};

export default Fish;
