import React from "react";
import starIcon from "../assets/Star_fill.svg";
import noRatingIcon from "../assets/Star.svg";
export default function CoffeeCard({
    id,
    name,
    image,
    price,
    rating,
    votes,
    popular,
    available
}) {
    return (
    <div className="card">
        <img src={image} alt={name} className="card-img"/>
        <div className="card-header">
            <div className="card-name">{name}</div>
            <div className="card-price">{price}</div>
        </div>
        <div className="card-footer">
            <div className="card-feedback">
                {(rating ===  null) ? (
                    <>
                    <img src={noRatingIcon} alt="star" className="card-star" />
                    <div className="card-votes">No ratings</div>
                    </>
                ) : (
                    <>
                    <img src={starIcon} alt="star" className="card-star" />
                    <div className="card-rating">{rating}</div>
                    <div className="card-votes">({votes} votes)</div>
                    </>
                )}
            </div>
            <div className="card-available">{available ? "" : "Sold out"}</div>
        </div>
        
        <div className="card-popular">
            {popular ? <div className="badge" aria-label="Popular">Popular</div> : ""}
        </div>
    </div>
    )
}