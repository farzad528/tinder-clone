import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "mark zuckerberg",
      url:
        "https://i.insider.com/5f2c858f4dca6856c856df42?width=900&format=jpeg&auto=webp",
    },
  ]);

  // Piece of code which runs based on a condition
  //   BAD
  //      const people = []
  //     people.push('farzad', 'phil')

  //   GOOD (Push to an array in REACT)
  //   setPeople([...people, 'farzad', 'phil'])

  return (
    <div>
      <h1> Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
