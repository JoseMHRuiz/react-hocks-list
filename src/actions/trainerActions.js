import dispatcher from '../appDispacher';
import * as trainerApi from '../api/trainerApi';
import actionTypes from './actionTypes';

export function saveTrainer(trainer) {
  console.log(trainer)
  return trainerApi.saveTrainer(trainer).then(savedTrainer => {
    console.log(savedTrainer)
    dispatcher.dispatch({
      actionType: trainer.id
        ? actionTypes.UPDATE_TRAINER
        : actionTypes.CREATE_TRAINER,
      trainer: savedTrainer
    });
  });
}

export function loadTrainers() {
  return trainerApi.getTrainers().then(trainers => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_TRAINERS,
      trainers: trainers
      
    });
  });
}

export function deleteTrainer(id) {
  return trainerApi.deleteTrainer(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_TRAINER,
      id: id
    });
  });
}
