import React, { useState } from 'react';
import GhostModeDashboard from './GhostModeDashboard';
import MealTracker from './MealTracker'; // Riga magica 1: Importa il tracker
import { INITIAL_MEALS_DATA } from './constants';
import './index.css';

function App() {
  const [mealsData, setMealsData] = useState(INITIAL_MEALS_DATA);

  const handleUpdateMeal = (mealKey, realValues) => {
    setMealsData(prev => ({
      ...prev,
      [mealKey]: {
        ...prev[mealKey],
        real: { ...prev[mealKey].real, ...realValues }
      }
    }));
  };

  return (
    <div className="app-container">
      {/* 1. Il Grafico Neon */}
      <GhostModeDashboard mealsData={mealsData} />

      {/* 2. Il Tracker che mancava */}
      <div className="tracker-wrapper" style={{ padding: '20px', backgroundColor: '#0a0a0a' }}>
        <h2 style={{ color: '#00f2ff', textAlign: 'center', fontFamily: 'sans-serif' }}>
          Log Pasti Strategia Ghost
        </h2>
        <MealTracker 
          mealsData={mealsData} 
          onUpdateMeal={handleUpdateMeal} 
        />
      </div>
    </div>
  );
}

export default App;