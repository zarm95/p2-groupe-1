import { Offcanvas, Stack } from "react-bootstrap";
import Stars from "./Stars";

import React from "react";

const SideBar = ({ show, setShow, articles, setArticles }) => {
  const handleClose = () => {
    setShow(false);
  };
  const handleDelete = (articletodelate) => {
    const articleCopy = articles.filter(
      (article) => article.id !== articletodelate.id
    );

    setArticles(articleCopy);
  };

  return (
    <Offcanvas show={show} placement="end" onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>carte</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          <div>
            <h1>ceci est un panier</h1>
            {articles?.map((article) => (
              <>
                <h1>{article.price}</h1>
                <h2>{article["file-name"]}</h2>

                <img src={article.image_uri} alt="" />
                <img src={article.image_url} alt="" />

                <Stars note={article.note} />

                <button key={article.cle} onClick={() => handleDelete(article)}>
                  delete
                </button>
              </>
            ))}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;
