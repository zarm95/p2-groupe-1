import React from "react";
import Stars from "./Stars";
import { Button } from "react-bootstrap";

const Villager = ({ villager, handleAddArticle, villager_2 }) => {
  return (
    <>
      <h3> name : {villager_2["USen-name"]}</h3>

      <h4> price: {villager_2.price},00$</h4>

      <img src={villager.image_uri} alt="" />

      <Stars note={villager_2.note} />
      <Button
        onClick={() => handleAddArticle(villager)}
        size="lg"
        variant="info"
      >
        Ajouter
      </Button>
    </>
  );
};

export default Villager;
