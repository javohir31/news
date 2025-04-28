import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./card.css";
// import { Rating } from "react-simple-star-rating";

function Card() {
    const [menu, setMenu] = useState([])

    async function getMenu() {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setMenu(json))
    }

    useEffect(() => {
        getMenu()
    }, [])

    function random() {
        Math.round(Math.random() * 5)
    }

    return (
        <div className="grid">
            {menu.map(el => (
                <div key={el.id} className="card">
                    <img src={el.image} alt={el.title} className="card-img" />
                    <div className="card-info">
                        <div className="card-info_top">
                            <h2 className="card-title">{el.title}</h2>
                            <span className="card-price">{el.price}$</span>
                        </div>
                        <p className="card-text">{el.description}</p>
                        <div className="card-rate">
                            {/* <Rating ratingValue={random}
                            /* Available Props */
                            /> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card