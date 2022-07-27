import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharacterItem from './CharacterItem';

const Pokedex = () => {

    const user = useSelector(state => state.user )

    const [ characters, setCharacters ] = useState([]);
    const [characterSearch, setCharacterSearch] = useState("");
    const [types, setTypes] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
            .then(res => setCharacters(res.data.results))
            .catch(error => console.log(error.response))
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setTypes(res.data.results))

    },[])

    console.log(types)
    console.log(characters)
    
    const search = e => {
        e.preventDefault();
        navigate(`/pokedex/${characterSearch}`)
    }

    const filterType = e => {
        axios.get(e.target.value)
            .then(res =>setCharacters(res.data.pokemon))
    }
    const [page, setPage] = useState (1);
    const lastIndex= page *20
    const firstIndex = lastIndex -20
    const pokemonsPaginated = characters.slice(firstIndex, lastIndex)
    const lastPage =Math.ceil(characters.length / 20)

    const numbers = []
    for(let i =1; i<=lastPage;i++){
        numbers.push(i)
    }
    

    return (
        <div className='container  mt-5' >
            <h1>Pokedex</h1>
            <p>Welcome  <b>{user}</b> this is pokedex wiki</p>
            <p>Here you can find your favorite pokemon</p>
            
            <div className='box'>
                <form onSubmit={search}>
                    <input 
                        type="text" 
                        value={characterSearch}
                        onChange={e => setCharacterSearch(e.target.value)}
                        placeholder="Search here for name"
                    />
                    <button className="btn btn-success">Go!</button>
                </form>
            </div>

            <select onChange={filterType}>
                <option value="">Search here for type</option>
                {
                    types.map(type => (
                        <option value={type.url} key={type.url}>
                            {type.name}
                        </option>
                    ))
                }
                
            </select>

            <div className='rows'>
                {
                    pokemonsPaginated.map(character => (
                        <div 
                        className='general-card'
                        key={character.url ? character.url :character.pokemon.url}>
                            <CharacterItem characterUrl={character.url ? character.url :character.pokemon.url}/>
                        </div>
                    ))

                }
                
            </div>
            <button 
                onClick={()=>setPage(page -1)}
                disabled={page ===1}
            >
                Prev page
            </button>
            {   
                numbers.map(number =>(
                    <button 
                        onClick={()=>setPage(number)}
                    >
                            {number}
                    </button>
                ))
            }
            <button 
                onClick={()=>setPage(page +1)}
                disabled={page ===lastPage}
            >
                Next page
            </button>
        </div>
    );
};

export default Pokedex;

