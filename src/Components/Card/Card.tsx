import "./Card.css";
import { Card as CardData } from "../../SiteData";

type CardProps = {
    card: CardData;
};

function Card({ card }: CardProps) {
    return (
        <section className="card-container">
            <img
                className="card-cover-image"
                src={"/" + card.cover}
                alt={card.header}
            ></img>

            <section className="card-content">
                <h1>{card.header}</h1>
                <h2>{card["sub-header"]}</h2>
            </section>
        </section>
    );
}

export default Card;
