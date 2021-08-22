import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";

export default function Options({ optionType }) {
  const [items, setItems] = useState([
      // {name:'chocolate', imagePath:'/images/choco.png'},{name:'vanilla', imagePath:'/images/vanilla.png'}
    ]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/${optionType}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;
  const ToRender=items.length>0?(items.map((item) =>     
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      ></ItemComponent>
    
  )):null

  return (
    <div>
      <h1>Please select option from below</h1>

      {ToRender}

    </div>
  );
}
