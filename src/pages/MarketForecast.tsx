import React, { useState } from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import ForecastChart from '../components/ForecastChart';
    import DashboardCard from '../components/DashboardCard';
    import RiskBadge from '../components/RiskBadge';
    import { TrendingUp, Calendar, Target, AlertCircle } from 'lucide-react';

    export default function MarketForecast() {
      const [selectedCrop, setSelectedCrop] = useState('rice');

      const forecastData = {
        rice: [
          { date: '2026-01-01', price: 2500, confidence_upper: 2800, confidence_lower: 2200 },
          { date: '2026-01-05', price: 2650, confidence_upper: 2950, confidence_lower: 2350 },
          { date: '2026-01-10', price: 2800, confidence_upper: 3100, confidence_lower: 2500 },
          { date: '2026-01-15', price: 2750, confidence_upper: 3050, confidence_lower: 2450 },
          { date: '2026-01-20', price: 2900, confidence_upper: 3200, confidence_lower: 2600 },
          { date: '2026-01-25', price: 3100, confidence_upper: 3400, confidence_lower: 2800 },
          { date: '2026-01-30', price: 3250, confidence_upper: 3550, confidence_lower: 2950 }
        ],
        wheat: [
          { date: '2026-01-01', price: 2200, confidence_upper: 2500, confidence_lower: 1900 },
          { date: '2026-01-05', price: 2350, confidence_upper: 2650, confidence_lower: 2050 },
          { date: '2026-01-10', price: 2400, confidence_upper: 2700, confidence_lower: 2100 },
          { date: '2026-01-15', price: 2300, confidence_upper: 2600, confidence_lower: 2000 },
          { date: '2026-01-20', price: 2450, confidence_upper: 2750, confidence_lower: 2150 },
          { date: '2026-01-25', price: 2600, confidence_upper: 2900, confidence_lower: 2300 },
          { date: '2026-01-30', price: 2750, confidence_upper: 3050, confidence_lower: 2450 }
        ]
      };

      const crops = [
        { id: 'rice', name: 'Rice', color: '#10b981' },
        { id: 'wheat', name: 'Wheat', color: '#f59e0b' },
        { id: 'maize', name: 'Maize', color: '#3b82f6' },
        { id: 'sugarcane', name: 'Sugarcane', color: '#8b5cf6' }
      ];

      const currentData = forecastData[selectedCrop] || forecastData.rice;
      const currentPrice = currentData[0]?.price || 0;
      const futurePrice = currentData[currentData.length - 1]?.price || 0;
      const priceChange = ((futurePrice - currentPrice) / currentPrice * 100).toFixed(1);

      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Market Forecast
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                30-day price predictions with confidence intervals
              </p>
            </div>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {crops.map((crop) => (
                  <button
                    key={crop.id}
                    onClick={() => setSelectedCrop(crop.id)}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      selectedCrop === crop.id
                        ? 'bg-green-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {crop.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <DashboardCard
                title="Current Price"
                value={`₹${currentPrice}`}
                subtitle="Per quintal"
                icon={TrendingUp}
                color="blue"
              />
              
              <DashboardCard
                title="30-Day Forecast"
                value={`₹${futurePrice}`}
                subtitle="Expected price"
                icon={Target}
                trend={parseFloat(priceChange) > 0 ? 'up' : 'down'}
                trendValue={`${priceChange}%`}
                color="green"
              />
              
              <DashboardCard
                title="Best Selling Window"
                value="Jan 25-30"
                subtitle="Optimal period"
                icon={Calendar}
                color="purple"
              />
              
              <DashboardCard
                title="Market Risk"
                value=""
                subtitle="Price volatility"
                icon={AlertCircle}
                color="yellow"
              >
                <RiskBadge level="medium" label="Moderate Risk" />
              </DashboardCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ForecastChart 
                  data={currentData}
                  title={`30-Day Price Forecast - ${crops.find(c => c.id === selectedCrop)?.name || 'Rice'}`}
                  color={crops.find(c => c.id === selectedCrop)?.color || '#10b981'}
                  showConfidence={true}
                />
              </div>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Market Insights
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Trend Analysis
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {parseFloat(priceChange) > 0 
                          ? `Upward trend expected with ${priceChange}% increase over 30 days.`
                          : `Downward trend expected with ${Math.abs(parseFloat(priceChange))}% decrease over 30 days.`
                        }
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Key Factors
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Seasonal demand patterns</li>
                        <li>• Weather conditions</li>
                        <li>• Export opportunities</li>
                        <li>• Government policies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Recommendations
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                      <p className="text-sm font-medium text-green-800 dark:text-green-300">
                        Optimal Selling Strategy
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Hold inventory until Jan 25-30 for maximum returns
                      </p>
                    </div>
                    
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                        Risk Management
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Consider partial selling to hedge against volatility
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Confidence Metrics
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Model Accuracy</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Data Quality</span>
                      <span className="text-sm font-medium text-green-600">High</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Prediction Range</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">±12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      );
    }