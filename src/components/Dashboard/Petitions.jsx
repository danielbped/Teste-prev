import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PetitionCard from './PetitionCard';
import Loading from '../Loading';

const Petitions = ({ page }) => {
  const authorization = localStorage.getItem('token');
  const [petitions, setPetitions] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      url: `http://localhost:8080/peticoes?_page=${page}&_limit=2`,
      method: 'GET',
      headers: { authorization },
    }).then(({ data }) => setPetitions(data));
    setLoading(false);
  }, [page, authorization])

  if (loading) return <Loading />

  return (
    <div>
      { petitions.map((petition) => <PetitionCard petition={ petition } key={ petition.id } />) }
    </div>
  );
};

export default Petitions;
