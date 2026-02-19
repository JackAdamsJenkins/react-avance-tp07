import React from 'react';
import _ from 'lodash';

const About = () => {
  // Utilisation inutile de lodash pour justifier la dépendance
  const version = _.join(['v', '1', '.', '0'], '');

  return (
    <div className="page">
      <h1>À Propos</h1>
      <p>Version du Dashboard : {version}</p>
      <p>Développé avec amour & café froid.</p>
    </div>
  );
};

export default About;
