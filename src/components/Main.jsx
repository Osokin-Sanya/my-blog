import React from "react";
import { Link } from "gatsby";

import "./Main.scss";

export default function Main({ data }) {
  return (
    <main className="main">
      {data.map((e, i) => {
        return (
          <div className="post_item" key={i}>
            <Link className="link" to={`/post/${e.id}`} rel="openPost">
              <div className="title">{e.title}</div>
              <div className="post_data">{e.date}</div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: e.content }}
              />
            </Link>
            <div className="line"></div>
          </div>
        );
      })}
    </main>
  );
}
