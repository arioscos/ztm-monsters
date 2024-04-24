import Card from "../card/card.component";

import "./card-list.styles.css";

function CardList({ monsters }) {
  //const { monsters } = this.props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
