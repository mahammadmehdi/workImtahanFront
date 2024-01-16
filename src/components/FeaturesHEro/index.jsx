import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { SearchContext } from "../../context/serachContext";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";

function FeaturesHero() {
    const {addWishlist,isWishlist} = useContext(WishlistContext)
  const [hero, setHero] = useState([]);
  const { handleSearch, search } = useContext(SearchContext);
  const [sortedProperty, setSortedProperty] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setHero(data));
  }, []);

  return (
    <div className="featuresHero">
      <div className="featuresHeroAll">
        <h3 className="header">Features That Make Us Hero</h3>
        <p className="about">
          If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each.
        </p>
        <div className="sort">
          <input type="text" onChange={(e) => handleSearch(e)} />
          <button
            onClick={() => setSortedProperty({ property: "name", asc: true })}
          >
            A-Z
          </button>
          <button
            onClick={() => setSortedProperty({ property: "name", asc: false })}
          >
            Z-A
          </button>
          <button onClick={() => setSortedProperty(null)}>Default</button>
        </div>
        <div className="cards">
          {hero
            .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (sortedProperty && sortedProperty.asc) {
                return a[sortedProperty.property] > b[sortedProperty.property]
                  ? 1
                  : b[sortedProperty.property] > a[sortedProperty.property]
                  ? -1
                  : 0;
              } else if (sortedProperty && sortedProperty.asc === false) {
                return a[sortedProperty.property] < b[sortedProperty.property]
                  ? 1
                  : b[sortedProperty.property] < a[sortedProperty.property]
                  ? -1
                  : 0;
              } else {
                return 0;
              }
            })
            .map((x) => (
              <ul key={x._id} className="pages">
                <li className={`${x.icon} icon`}></li>
                <li className="name">{x.name}</li>
                <li className="desc">{x.description}</li>
                <li className="icon" onClick={() => addWishlist(x)}>
                  <i class={`fa-regular fa-heart ${isWishlist(x) ? "red" : ""}`}></i>
                </li>
                <li><NavLink to={"/detail/"+x._id}>Go To Learn More</NavLink></li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesHero;
