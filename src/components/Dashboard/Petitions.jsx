import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PetitionCard from './PetitionCard';
import Loading from '../Loading';
import PetitionModal from '../Modal/PetitionModal';
import DataContext from '../../context/DataContext';

const Petitions = ({ page }) => {
  const authorization = localStorage.getItem('token');
  const [petitions, setPetitions] = useState([])
  const [loading, setLoading] = useState(true);
  const { showPetitionModal } = useContext(DataContext);

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
      { petitions.map((petition) => {
        return (
          <>
            <PetitionCard petition={ petition } key={ petition.id } />
            <PetitionModal 
              showModal = { showPetitionModal }
              petition={ petition }
            />
          </>
        )
      }) }
    </div>
  );
};

export default Petitions;
