import React from 'react';
import PropTypes from 'prop-types';

const PatientList = ({ patients, status }) => {
    const patientList = patients
              .filter(patient => (
                  patient.status === status
              ))
              .map(patient => (
        <li key={patient.id}>
          <span className="patient-name">{patient.name}</span>
        </li>
    ));

    return (
        <span>
          Patients in the "{status}" status
          <ul>
            {patientList}
          </ul>
        </span>
    );
};

PatientList.propTypes = {
    patients: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        },
    )).isRequired,
    status: PropTypes.string.isRequired,
};

export default PatientList;
