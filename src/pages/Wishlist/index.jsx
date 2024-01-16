import React, { useContext } from "react";
import "./index.scss";
import { WishlistContext } from "../../context/wishlistContext";

function Wishlist() {
  const { wishlist, addWishlist,isWishlist } = useContext(WishlistContext);
  console.log(wishlist);
  return (
    wishlist.length ? <div className="wishlistPage">
    <div className="card">
      {wishlist.map((x) => (
        <ul className="pages" key={x._id}>
          <li className={`${x.icon} icon`}></li>
          <li className="name">{x.name}</li>
          <li className="desc">{x.description}</li>
          <li onClick={() => addWishlist(x)}>
            <i  class={`fa-regular fa-heart ${isWishlist(x) ? "red" : ""}`}></i>
          </li>
        </ul>
      ))}
    </div>
  </div>
  : <h1>Wishlistde Mehsul yoxdur</h1>
  );
}

export default Wishlist;
