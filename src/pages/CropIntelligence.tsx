import React, { useState } from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import DashboardCard from '../components/DashboardCard';
    import { Sprout, Thermometer, Droplets, Zap, Calculator } from 'lucide-react';

    export default function CropIntelligence() {
      const [formData, setFormData] = useState({
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        ph: '',
        temperature: '',
        rainfall: '',
        humidity: ''
      });

      const [recommendation, setRecommendation] = useState(null);

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate AI recommendation
        setRecommendation({
          primary: { crop: 'Rice', confidence: 92 },
          alternatives: [
            { crop: 'Wheat', confidence: 78 },
            { crop: 'Maize', confidence: 65 },
            { crop: 'Sugarcane', confidence: 58 }
          ]
        });
      };

      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Crop Intelligence
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                AI-powered crop recommendations based on soil and environmental conditions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Input Parameters
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nitrogen (N)
                      </label>
                      <input
                        type="number"
                        name="nitrogen"
                        value={formData.nitrogen}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        placeholder="mg/kg"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phosphorus (P)
                      </label>
                      <input
                        type="number"
                        name="phosphorus"
                        value={formData.phosphorus}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        placeholder="mg/kg"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Potassium (K)
                      </label>
                      <input
                        type="number"
                        name="potassium"
                        value={formData.potassium}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        placeholder="mg/kg"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        pH Level
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        name="ph"
                        value={formData.ph}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        placeholder="0-14"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Temperature
                      </label>
                      <input
                        type="number"
                        name="temperature"
                        value={formData.temperature}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        placeholder="°C"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Rainfall
                      </label>
                      <input
                        type="number"
                        name="rainfall"
                        value={formData.rainfall}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        placeholder="mm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Humidity
                      </label>
                      <input
                        type="number"
                        name="humidity"
                        value={formData.humidity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                        placeholder="%"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Get AI Recommendation
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                {recommendation ? (
                  <>
                    <DashboardCard
                      title="Primary Recommendation"
                      value={recommendation.primary.crop}
                      subtitle={`${recommendation.primary.confidence}% confidence`}
                      icon={Sprout}
                      color="green"
                      trend="up"
                      trendValue="Best match"
                    />

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Alternative Crops
                      </h3>
                      <div className="space-y-3">
                        {recommendation.alternatives.map((alt, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                            <span className="font-medium text-gray-900 dark:text-white">{alt.crop}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{alt.confidence}% confidence</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <DashboardCard
                        title="Expected Yield"
                        value="4.2 tons"
                        subtitle="Per hectare"
                        icon={Calculator}
                        color="blue"
                      />
                      
                      <DashboardCard
                        title="Growth Period"
                        value="120 days"
                        subtitle="Seed to harvest"
                        icon={Zap}
                        color="purple"
                      />
                    </div>
                  </>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
                    <Sprout className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Ready for Analysis
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Fill in the soil and environmental parameters to get AI-powered crop recommendations.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </main>

          <Footer />
        </div>
      );
    }