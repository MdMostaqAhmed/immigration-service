import React, { useState } from "react";
import person1 from "../../../../images/person/p1.jpg";
import person2 from "../../../../images/person/p2.jpg";
import person3 from "../../../../images/person/p3.jpg";
import Client from "../Client/Client";
import "./Clients.css";

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "Razan Z",
      img: "https://i.ibb.co/Bz4K2vD/p1.jpg",
      comment:
        " Crystal took care of my application and was with me step by step. I received my pr in 6 months after she filed my application!! I am so happy with how everything turned out and extremely grateful for all her help. Thank you Matthew Jeffery Law Firm",
    },
    {
      id: 2,
      name: "Tiffany E",
      img: "https://i.ibb.co/85bxzt0/p2.jpg",
      comment:
        "It was not a simple file, it was a 55- month journey since applying for a work permit and, then, finding a new stream to apply for being a permanent residence. During this time, Crystal accompanied my family and I step by step presicely and diligently.",
    },
    {
      id: 3,
      name: "Cristiano F",
      img: "https://i.ibb.co/Wn7xLP4/p3.jpg",
      comment:
        "No words to express my gratitude to Mr. Jeffery and team (Maryam and Crystal) that supported my appeal case. All the professionalism and dedication for my case was instrumental for the successful results we achieved. I would recommend Jeffery for all types of immigration cases.",
    },
  ];
  return (
    <div>
      <h2>WHAT OUR CLIENTS SAY</h2>
      <div className="clients-container">
        {clients.map((client) => (
          <Client key={client.id} client={client}></Client>
        ))}
      </div>
    </div>
  );
};

export default Clients;
