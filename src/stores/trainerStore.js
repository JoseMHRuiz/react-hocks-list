import { EventEmitter } from 'events';
import Dispatcher from '../appDispacher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _trainers = [];
console.log(CHANGE_EVENT)
class TrainerStore extends EventEmitter {
  addChangeListener(callback) {
    console.log('add trainer')

    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    console.log('remove trainer')

    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getTrainers() {
    return _trainers;
  }

  getTrainersById(id) {
    return _trainers.find(trainer => trainer.id === id);
  }
}

const store = new TrainerStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_TRAINER:
      _trainers.push(action.trainer);
      store.emitChange();
      break;
    case actionTypes.DELETE_TRAINER:
      _trainers = _trainers.filter(
        trainer => trainer.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_TRAINERS:
      _trainers = action.trainers;
      store.emitChange();
      break;
    case actionTypes.UPDATE_TRAINER:
      _trainers = _trainers.map(trainer =>
        trainer.id === action.trainer.id ? action.trainer : trainer
      );
      store.emitChange();
      break;
    default:
  }
});

export default store;
