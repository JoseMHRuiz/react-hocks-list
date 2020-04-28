import React, { useState, useEffect } from 'react';
import TrainerForm from './trainerForm';
import trainerStore from '../stores/trainerStore';
import { toast } from 'react-toastify';
import * as trainerActions from '../actions/trainerActions';

const ManageTrainerPage = props => {
  const [errors, setErrors] = useState({});
  const [trainers, setTrainers] = useState(trainerStore.getTrainers());
  const [trainer, setTrainer] = useState({
      id: undefined,
      name: ''
  });

  useEffect(() => {
    trainerStore.addChangeListener(onChange);
    const id = Number(props.match.params.id);
    if (trainers.length === 0) {
      trainerActions.loadTrainers();
    } else if (id) {
      setTrainer(trainerStore.getTrainersById(id));
    }
    // return () => trainerStore.removeChangeListener(onChange);
  }, [trainers.length, props.match.params.id]);

  const onChange = () => {
    setTrainers(trainerStore.getTrainers());
  };

  const handleChange = event => {
    const updatedTrainer = {
      ...trainer,
      [event.target.name]: event.target.value
    };
    setTrainer(updatedTrainer);
  };
  const formIsValid = () => {
    const _errors = {};
    if (!trainer.name) _errors.name = 'Name is required';
    setErrors(_errors);
    //Form is valid is there is no errors, object is empty
    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) return;
    trainerActions.saveTrainer(trainer).then(() => {
      props.history.push('/trainers');
      toast.success('Trainer saved.');
    });
  };
  return (
    <>
      <h2>Manage Course</h2>
      <TrainerForm
        errors={errors}
        trainer={trainer}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* <Prompt
        when={true}
        message='Are you sure you want to save this?'
      ></Prompt> */}
    </>
  );
};
export default ManageTrainerPage;
