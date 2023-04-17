import React, { useState } from "react";
import Stars from "../Components/Stars";

const Panier = ({ articles, setArticles }) => {
  const handleDelete = (articletodelate) => {
    const articleCopy = articles.filter(
      (article) => article.id !== articletodelate.id
    );

    setArticles(articleCopy);
  };

  return (
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
  );
};

export default Panier;
