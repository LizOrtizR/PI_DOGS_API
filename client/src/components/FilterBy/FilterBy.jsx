import React from "react";
import style from "./FilterBy.module.css"; 
import { getByTemperaments, filterBy, chargeAll, orderBy } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const FilterBy = () => {
  const dispatch = useDispatch();
  const temperament = useSelector((state) => state.temperament);

  const handleSelect = (e) => {
    dispatch(getByTemperaments(e.target.value));
    e.target.value = "default";
  };

  const handleSelect2 = (e) => {
    dispatch(orderBy(e.target.value));
    e.target.value = "default";
  };

  return (
    <section>
      <div className={style.selectdiv}>
        <select className={style.select} onChange={handleSelect} name="" id="">
          <option value="default">FILTER BY...</option>
          <optgroup label="TEMPERAMENTS...">
            {temperament &&
              temperament.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
          </optgroup>
        </select>

        <select className={style.select} onChange={handleSelect2} name="" id="">
          <option value="default">ORDER BY...</option>
          <optgroup label="Weight">
            <option value="asc">Max to Min</option>
            <option value="desc">Min to Max</option>
          </optgroup>
          <optgroup label="Alphabetic">
            <option value="A-Z">A - Z</option>
            <option value="Z-A">Z - A</option>
          </optgroup>
        </select>

        <div>
          
        </div>
        <div className={style.buttons}>
          <button className={style.buton} value="TODOS" onClick={() => dispatch(chargeAll())}>
            ALL
          </button>
          <button className={style.buton} value="db" onClick={() => dispatch(filterBy("db"))}>
            DATABASE
          </button>
          <button className={style.buton} value="api" onClick={() => dispatch(filterBy("api"))}>
            API
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterBy;

