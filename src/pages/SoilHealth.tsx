import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardCard from '../components/DashboardCard';
import { Leaf, Droplets } from 'lucide-react';

export default function SoilHealth() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Soil Health Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Track soil nutrients, moisture, and overall fertility to optimize crop growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <DashboardCard
            title="Nitrogen Level"
            value="45 kg/ha"
            subtitle="Optimal range: 40–60"
            icon={Leaf}
            color="green"
          />
          <DashboardCard
            title="Phosphorus Level"
            value="25 kg/ha"
            subtitle="Optimal range: 20–35"
            icon={Leaf}
            color="yellow"
          />
          <DashboardCard
            title="Potassium Level"
            value="30 kg/ha"
            subtitle="Optimal range: 25–40"
            icon={Leaf}
            color="blue"
          />
          <DashboardCard
            title="Soil Moisture"
            value="32%"
            subtitle="Optimal range: 30–40%"
            icon={Droplets}
            color="blue"
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recommendations
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Apply 20 kg/ha of Nitrogen fertilizer next week.</li>
            <li>Monitor soil moisture daily and irrigate if below 30%.</li>
            <li>Rotate crops to maintain balanced phosphorus and potassium levels.</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
