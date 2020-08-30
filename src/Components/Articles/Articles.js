import React from "react";
import { Button } from "@material-ui/core";
import { Jumbotron } from "react-bootstrap";

const Articles = (props) => {
  return (
    <>
      <Jumbotron>
        <div>
          <img
            src={props.article.urlToImage}
            alt=""
            style={{ width: "400px" }}
          />
        </div>
        <div>
          <h1 className="text-primary">
            Title: <span>{props.article.title}</span>
          </h1>
          <h3>Author: {props.article.author}</h3>
          <h3>Content: {props.article.content}</h3>
          <h3>Description: {props.article.description}</h3>
          <h3>Date Published: {props.article.publishedAt}</h3>
          <h3>Source: {props.article.source.name}</h3>
          <h3>
            Link:{" "}
            <Button variant="contained" color="primary">
              <a href={props.article.url}>Enter to read full article</a>
            </Button>
          </h3>
        </div>
      </Jumbotron>
    </>
  );
};

export default Articles;
