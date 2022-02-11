import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PetitionCard from './PetitionCard';
import Loading from '../Loading';
import PetitionModal from '../Modal/PetitionModal';
import DataContext from '../../context/DataContext';
import NoPetitions from './NoPetitions';
import PropTypes from 'prop-types';

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

  if (petitions.length === 0) return <NoPetitions />

  return (
    <div>
      { petitions.map((petition) => {
        return (
          <>
            <PetitionCard petition={ petition } key={ `${petition.id}-card` } />
            <PetitionModal
              key={ `${petition.id}-modal` } 
              showModal = { showPetitionModal }
              petition={ petition }
            />
          </>
        )
      }) }
    </div>
  );
};

Petitions.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Petitions;
