import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import trainerStore from '../stores/trainerStore';
import { Link } from 'react-router-dom';
import { loadTrainers, deleteTrainer } from '../actions/trainerActions';
import TrainerList from './trainerList';

const TrainerPage = () => {
  const [trainers, setTrainers] = useState(trainerStore.getTrainers());

  useEffect(() => {
    trainerStore.addChangeListener(onChange);
    if (trainerStore.getTrainers().length === 0) loadTrainers();
    return () => {
      trainerStore.removeChangeListener(onChange);
    };
  }, []);

  const onChange = () => {
    setTrainers(trainerStore.getTrainers());
  };

  return (
    <>
      <h2>Courses</h2>
      <Link className='btn btn-primary' to='/trainer'>
        Add Trainer
      </Link>
      <TrainerList
        trainers={trainers}
        deleteTrainer={deleteTrainer}
      />
    </>
  );
};

export default TrainerPage;

TrainerList.propTypes = {
  name: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};
