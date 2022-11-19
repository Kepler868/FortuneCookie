import React from "react";
import Item from "./Item.js";
import uuid from "react-uuid";
import cookie1 from "./images/cookie1.png";
import cookie2 from "./images/cookie2.png";
import cookie3 from "./images/cookie3.png";

export default function Cookies(props) {
  const { isLogined, contract } = props;
  const cookies = [
    {
      name: "ORDINARY COOKIE",
      desc: [
        "Can't gather with your thoughts?",
        "This cookie will show you the way."
      ],
      value: "0.01",
      image: cookie1,
      type: "ordinary"
    },
    {
      name: "LOVE COOKIE",
      desc: [
        "Looking for a new love story?",
        "Get advice from relationship gurus."
      ],
      value: "0.02",
      image: cookie2,
      type: "love"
    },
    {
      name: "MONEY COOKIE",
      desc: [
        "Do you want to know where to earn money?",
        "Be careful, this may affect your future..."
      ],
      value: "0.03",
      image: cookie3,
      type: "money"
    }
  ];

  return (
    <div className="main-container">
      {cookies.map((element) => (
        <Item
          key={uuid()}
          name={element.name}
          desc={element.desc}
          value={element.value}
          image={element.image}
          type={element.type}
          isLogined={isLogined}
          contract={contract}
        />
      ))}
    </div>
  );
}
