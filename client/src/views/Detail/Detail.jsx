import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByDetail, cleanDetail } from "../../redux/actions";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

function Detail() {
    
    const dispatch = useDispatch();
  
  
    const { idRaza } = useParams(); // Obtenemos el valor del parámetro "id"
  
    useEffect(() => {
      dispatch(getByDetail(idRaza)); // Pasamos el id al action creator
      return ()=>dispatch(cleanDetail()) //limpio el estado, la action se ejecuta cuando se monta el componente
    }, [dispatch, idRaza]); //update

    const detailDog = useSelector((state) => state.detailDog);
    
    if (!detailDog) {
    return <h1>Loading...</h1>;
    
  }
  const imageUrl = `https://cdn2.thedogapi.com/images/${detailDog.reference_image_id}.jpg`;//Esta propiedad contiene el identificador de la imagen correspondiente a la raza de perro.

          


    return (
        <div>
            <NavBar/>
    <div className={style.details}>
        
        <div className={style.container}>
          <h1>{detailDog.name}</h1>
          <img src={imageUrl} alt={detailDog.name} loading="lazy" />


          <div className={style.info}>
            <p>
              <span>Weight:</span> {detailDog.weight?.metric} KG
            </p>
            <p>
              <span>Height:</span> {detailDog.height?.metric} cm
            </p>
            <p>
              <span>Life Span:</span> {detailDog.life_span}
            </p>
            <p>
              <span>Temperament:</span> {detailDog.temperament}
            </p>
          </div>
          </div>

        </div>

        </div>
      );
    }
    
    export default Detail;
    
    
    
    
    