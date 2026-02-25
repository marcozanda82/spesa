import React from 'react';
import GhostModeDashboard from './GhostModeDashboard';

/**
 * Struttura pasti: per ogni mealKey (merenda1, pranzo, merenda2, cena)
 * - target: { kcal, prot, carb, fat, fibre } (strategia Ghost)
 * - real:   { kcal, prot, carb, fat, fibre } (consumo utente)
 */
const sampleMealsData = {
  merenda1: {
    target: { kcal: 420, prot: 28, carb: 52, fat: 14, fibre: 6 },
    real:   { kcal: 398, prot: 26, carb: 48, fat: 13, fibre: 5 },
  },
  pranzo: {
    target: { kcal: 735, prot: 49, carb: 91, fat: 24, fibre: 10 },
    real:   { kcal: 810, prot: 58, carb: 85, fat: 28, fibre: 9 },
  },
  merenda2: {
    target: { kcal: 315, prot: 21, carb: 39, fat: 10, fibre: 4 },
    real:   { kcal: 280, prot: 18, carb: 32, fat: 9, fibre: 4 },
  },
  cena: {
    target: { kcal: 630, prot: 42, carb: 78, fat: 21, fibre: 9 },
    real:   { kcal: 0, prot: 0, carb: 0, fat: 0, fibre: 0 },
  },
};

export default function App() {
  return (
    <GhostModeDashboard mealsData={sampleMealsData} />
  );
}
