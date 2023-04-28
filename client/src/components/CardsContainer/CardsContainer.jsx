

import Card from "../Card/Card"
import style from "./CardsContainer.module.css"; 





function CardsContainer({allDogs}) {
    const dogsList = allDogs
    const firstRow = dogsList.slice(0, 4);
  const secondRow = dogsList.slice(4, 8);

    
  return (

    <div className={style.container}>
   
      <div className={style.row}>
        {firstRow.map((dog, index) => (
          <Card key={dog.id || index} dog={dog} />
        ))}
      </div>
      <div className={style.row}>
        {secondRow.map((dog, index) => (
          <Card key={dog.id || index} dog={dog} />
        ))}
      </div>
    </div>
  );
}

export default CardsContainer 