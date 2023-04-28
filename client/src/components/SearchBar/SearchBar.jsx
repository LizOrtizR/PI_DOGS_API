

const SearchBar = ({handleChange, handleSubmit})=>{
    return(
        <div >
          <form onChange={handleChange}>
            <input placeholder="busqueda" type="search" />
            <button type="submit" onClick={handleSubmit}>Buscar</button>
          </form>
          
        </div>
    )
}

export default SearchBar; 