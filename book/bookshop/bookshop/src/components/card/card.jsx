import { Rating } from "../rating/rating";
import { Button } from "../button/button.jsx";
import React from 'react';

export function Card({ image, author, title, rating, text, cost, review }) {
    return (
        <div className="card card-shelf mb-4">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={image} className="img-fluid-card img-fluid rounded-start" alt="Book cover" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <p className="card-text card-text-book card-book-author">{Array.isArray(author) ? author.join(', ') : 'Unknown Author'}</p>
                        <h5 className="card-title card-title-book">{title || 'Unknown Title'}</h5>
                        <div>
                            <Rating value={rating || 0} review={review || 0} />
                        </div>
                        <p className="container-text card-text card-text-book">{text || 'No description'}</p>
                        <p className="card-title card-title-book">{cost || 'Price not available'}</p>
                        <div>
                            <Button buttonText={'BUY NOW'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}