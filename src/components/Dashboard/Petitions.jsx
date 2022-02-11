import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PetitionCard from './PetitionCard'

const Petitions = ({ page }) => {
  const authorization = localStorage.getItem('token');
  const [petitions, setPetitions] = useState([])

  useEffect(() => {
    axios({
      url: `http://localhost:8080/peticoes?_page=${page}&_limit=2`,
      method: 'GET',
      headers: { authorization },
    }).then(({ data }) => setPetitions(data))
  }, [page, authorization])

  return (
    <div>
      { petitions.map((petition) => <PetitionCard petition={ petition } key={ petition.id } />) }
    </div>
  );
};

export default Petitions;
