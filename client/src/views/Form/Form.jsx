import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import { Link } from "react-router-dom";
import validate from "./validate";
import style  from "./Form.module.css"
import {getTemperaments} from "../../redux/actions"
import Footer from "../Footer/Footer.jsx"

const Form = () => {
  //formulario y estado deben de tener los mismos valores
  const dispatch = useDispatch()
  const temperaments = useSelector(state => state.temperament)
  const [selectNameState, setSelectNameState] = useState([])



   useEffect(()=> {
      dispatch(getTemperaments())
   }, [dispatch])
  

  const [form, setForm] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    life_span: "",
    temperament: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    weight: "",
    life_span: "",
    temperament: "",
    image: "",
  });
  const changeHandler = (e) => {
    //e, me dice quien disparo el event
    const property = e.target.name;
    const value = e.target.value;
    setErrors(validate({ ...form, [property]: value })); //el mismo estado tiene validate y va a la par
    setForm({ ...form, [property]: value }); //cambio el estado y cambia el input
  };

function handleSelect(e){
if(form.temperament.includes(e.target.value)) return

  setForm({
    ...form,
    temperament: [...form.temperament, e.target.value]
  })

  const selectName = e.target.value;
  if(selectName === "default") return;
  setForm({...form , temperament:[...form.temperament, selectName]})
  setSelectNameState([...selectNameState, temperaments.find(e => e.id === parseInt(selectName))])
}



  
  const submitHandler = (e) => {
    const height = `${form.min_height}-${form.max_height}`; //creo las variables y las concateno separandolas con un guion
    const weight = `${form.min_weight}-${form.max_weight}`;
   
    e.preventDefault(); ///ya no se va la pag ref
    axios
      .post("http://localhost:3001/dogs", { ...form, height, weight }) //envio el body form  junto con las variables (weight y hei)
      .then((res) => alert("el perro ha sido creado con exito"))
      .catch((err) => alert("error al enviar la informacion"));
  };
  function handleDelete(e){
    
    setSelectNameState(selectNameState.filter(t => t.id !== parseInt(e.target.value)))
  }

  return (
    <div>
        <h2 className={style.title}>Create a new Dog</h2>

   
    <div className= {style.cardContainer}>
         
        
    <form className= { style.ent} onSubmit={submitHandler}>
      <div>
       

        <label className={style.label}>Name:</label>
        <input
          type="text "
          value={form.name}
          onChange={changeHandler}
          name="name"
          placeholder="Name"

        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label className={style.label} >Min Height:</label>
        <input
          type="text"
          value={form.min_height}
          onChange={changeHandler}
          name="min_height"

          className="number"
              placeholder="Height Min"

        />
        {errors.min_height && <span>{errors.min_height}</span>}
      </div>

      <div>
        <label className={style.label} >Max Height:</label>
        <input
          type="text"
          value={form.max_height}
          onChange={changeHandler}
          name="max_height"
          placeholder="Height Max"
        />
        {errors.max_height && <span>{errors.max_height}</span>}
      </div>
      <div></div>
      <div>
        <label className={style.label}>Min Weight:</label>
        <input
          type="text"
          value={form.min_weight}
          onChange={changeHandler}
          name="min_weight"
          placeholder="Weight Min"
        />
         {errors.min_weight && <span>{errors.min_weight}</span>}
      </div>
      <div>
        <label className={style.label}>Max Weight:</label>
        <input
          type="text"
          value={form.max_weight}
          onChange={changeHandler}
          name="max_weight"
          placeholder="Weight Max"
        />
        {errors.max_weight && <span>{errors.max_weight}</span>}
      </div>
      <div>
        <label className={style.label}>Life Span:</label>
        <input
          type="text "
          value={form.life_span}
          onChange={changeHandler}
          name="life_span"
          placeholder="Life Span"
        />
        {errors.life_span && <span>{errors.life_span}</span>}
        <div>
        <label className={style.label}>image:</label>
        <input
          type="text "
          value={form.image}
          onChange={changeHandler}
          name="image"
          placeholder="Put a URL"
        />
        </div>
      </div>
      <div>
      <label className={style.label}>Temperaments</label>
      <option value="default">Choose</option>
            <select className={style.select} name="temperamentos" onChange={handleSelect}>
              {temperaments.map((t, i) => {
                return(
                  <option className= {style.select}key={i} value={t.id}>{t.name}</option>
                )
              })}
            </select>
   
          <div className='div_form_final_temps'>
            <ul className='ul_temp'>
              {selectNameState.map((e, i) => {
                return(
                <li className='li_temp' key={i}>
                  {e.name}
                  <button className='delete_temp' type='button' value={e.id} onClick={handleDelete}>x</button>
                </li>
                )
              })}
            </ul>
          </div>
        
        
      </div>
      <button className={style.submit}type="submit">Let's Create</button>
    </form>
    
    </div>
    <Link to="/home">
    <button className={style.btn}>Back To Home</button>
    </Link>
    <Footer/>
    </div>
  );
};

export default Form;
