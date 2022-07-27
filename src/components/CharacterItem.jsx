import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CharacterItem = ({characterUrl}) => {

    const [character, setCharacter] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(characterUrl)
            .then(res => setCharacter(res.data))
    },[])
console.log(character)
    

    return (
        <div className='container-character-item'>
            <div className='cards'
                onClick={()=> navigate(`/pokedex/${character.id}`)}>
                <h2>{character.name}</h2>
                <div> type:
                {
                    character.types?.map(type =>(
                        <h2>{type.type.name}</h2>
                    ))
                }
            </div>
                <h2> Hp: {character.stats?.[0].base_stat}</h2>
                <h2> Attack: {character.stats?.[1].base_stat}</h2>
                <h2> Defense: {character.stats?.[2].base_stat}</h2>
                <h2> Speed: {character.stats?.[4].base_stat}</h2>
                <div className='img'>
                    <img src={character?.sprites?.other.dream_world.front_default} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default CharacterItem;