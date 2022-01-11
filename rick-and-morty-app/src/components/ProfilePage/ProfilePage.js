import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProfilePage.css';

export default function ProfilePage() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((res) => setCharacter(res.data));
  }, [id]);

  const { location, episode } = character;

  return (
    <div className="wrapper">
      <p>
        <img src={character.image} alt="character-image" />
      </p>
      <h3>{character.name}</h3>
      <p>
        {character.gender} - {character.species}
      </p>
      <p>Location: {location?.name}</p>
      <p>
        <i>{episode?.map((item) => (episode.length > 1 ? `${item} ` : item))}</i>
      </p>
      <p>Status: {character.status}</p>
      <p>Created: {character.created}</p>
    </div>
  );
}
