import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const TrainerList = props => {
  console.log(props)
  return (
    <>
      <h2>Trainers</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Name</th>
            <th>Trainer ID</th>
          </tr>
        </thead>
        <tbody>
          {props.trainers.map(trainer => {
            return (
              <tr key={trainer.name}>
                <td>
                  <button
                    className='btn btn-outline-danger'
                    onClick={() => {
                      props.deleteTrainer(trainer.id);
                      toast.error('Trainer deleted.');
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={'/trainer/' + trainer.id}>{trainer.name}</Link>
                </td>
                <td>{trainer.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default TrainerList;
