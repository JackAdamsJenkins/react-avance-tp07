import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulation d'appel API
    setTimeout(() => {
      setData({ users: 42, active: 12, revenue: 1200 });
    }, 500);
  }, []);

  return (
    <div className="page">
      <h1>Tableau de Bord</h1>
      {!data ? (
        <p>Chargement des données...</p>
      ) : (
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Utilisateurs</h3>
            <span className="value">{data.users}</span>
          </div>
          <div className="stat-card">
            <h3>En Ligne</h3>
            <span className="value active">{data.active}</span>
          </div>
          <div className="stat-card">
            <h3>Revenus</h3>
            <span className="value">{data.revenue}€</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
