import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash, FiCheckCircle } from 'react-icons/fi';

export default function TechItem({ tech, onDelete }) {
  return (
    <li >
      {tech}
      <div className="operations">
      <FiCheckCircle style={{ color: '#fff', fontSize: '18px', cursor: 'pointer' }}/>
      <FiTrash onClick={onDelete} style={{ color: '#fff', fontSize: '18px', cursor: 'pointer', marginLeft: '10px' }}/>
      </div>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}