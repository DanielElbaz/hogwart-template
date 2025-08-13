import React from 'react';
import Entity from './Entity';
import './Entities.css';
import { useParams } from 'react-router-dom';

const Entities = ({ getCategoryData }) => {
  const { category } = useParams();
  const list = getCategoryData(category) || [];
  return (
    <div className="entity-list">
      {list.map((entity, i) => (
        <Entity key={i} category={category} name={entity.name} img={entity.img} level={entity.level} />
      ))}
    </div>
  );
}

export default Entities;
