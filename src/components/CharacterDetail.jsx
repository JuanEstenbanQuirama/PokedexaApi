import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CharacterDetail = () => {

    const [character, setCharacter] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setCharacter(res.data))
            .catch(error => console.log(error.response))

    }, [id]);
    console.log(character);

    return (
        <div className='container mt-5 container-detail'>
            <div className='detail'>
                <div className='container-1'>
                 <h1>{character?.name}</h1>
                    <img src={character?.sprites?.other.dream_world.front_default} alt="" />
                    <h3> height: <br /> {character?.height}</h3> 
                    <h3> weight: <br /> {character?.weight}</h3>
                    <h3>#: {character?.id}</h3>
                </div>
                <div className='container-2'> <h2>Type:</h2>
                    {
                        character.types?.map(type =>(
                            <h3>{type.type.name}</h3>
                        ))
                    }
                </div>
                <div className='container-3'> <h2>abilities: </h2>
                    {
                        character.abilities?.map(ability =>(
                            <h3>{ability.ability.name}</h3>
                        ))
                    }
                    
                </div>
                <div className='container-4'>
                    <h2>States</h2>
                    <h3> Hp: {character.stats?.[0].base_stat}</h3>
                    <h3> Attack: {character.stats?.[1].base_stat}</h3>
                    <h3> Defense: {character.stats?.[2].base_stat}</h3>
                    <h3> Speed: {character.stats?.[5].base_stat}</h3>
                    <h3> Special attack: {character.stats?.[3].base_stat}</h3>
                    <h3> Special defense: {character.stats?.[4].base_stat}</h3>
                </div>
                <div className='container-5'> <h1>movemenst:</h1>
                    {
                        character.moves?.map(move => (
                            <h3 key={move.move.url}>
                                {move.move.name}
                            </h3>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
