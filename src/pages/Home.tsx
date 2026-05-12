import React from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import DashboardCard from '../components/DashboardCard';
    import RiskBadge from '../components/RiskBadge';
    import ForecastChart from '../components/ForecastChart';
    import { 
      Sprout, 
      TrendingUp, 
      Shield, 
      Droplets, 
      Bug, 
      Thermometer,
      AlertTriangle,
      Leaf
    } from 'lucide-react';

    export default function Home() {
      const forecastData = [
        { date: '2026-01-01', price: 2500, confidence_upper: 2800, confidence_lower: 2200 },
        { date: '2026-01-05', price: 2650, confidence_upper: 2950, confidence_lower: 2350 },
        { date: '2026-01-10', price: 2800, confidence_upper: 3100, confidence_lower: 2500 },
        { date: '2026-01-15', price: 2750, confidence_upper: 3050, confidence_lower: 2450 },
        { date: '2026-01-20', price: 2900, confidence_upper: 3200, confidence_lower: 2600 },
        { date: '2026-01-25', price: 3100, confidence_upper: 3400, confidence_lower: 2800 },
        { date: '2026-01-30', price: 3250, confidence_upper: 3550, confidence_lower: 2950 }
      ];

      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Smart Agriculture Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                AI-powered insights for optimal farming decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <DashboardCard
                title="Recommended Crop"
                value="Rice"
                subtitle="92% confidence"
                icon={Sprout}
                trend="up"
                trendValue="8% yield increase"
                color="green"
              />
              
              <DashboardCard
                title="Expected Profit"
                value="₹45,200"
                subtitle="Per hectare"
                icon={TrendingUp}
                trend="up"
                trendValue="12% above avg"
                color="blue"
              />
              
              <DashboardCard
                title="Soil Health Score"
                value="8.2/10"
                subtitle="Excellent condition"
                icon={Leaf}
                trend="up"
                trendValue="0.3 improvement"
                color="green"
              />
              
              <DashboardCard
                title="Risk Level"
                value=""
                subtitle="Current assessment"
                icon={Shield}
                color="yellow"
              >
                <RiskBadge level="medium" label="Weather Risk" />
              </DashboardCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <ForecastChart 
                  data={forecastData}
                  title="30-Day Price Forecast - Rice"
                  color="#10b981"
                  showConfidence={true}
                />
              </div>
              
              <div className="space-y-6">
                <DashboardCard
                  title="Pest Risk"
                  value="Low"
                  subtitle="Brown planthopper"
                  icon={Bug}
                  color="green"
                >
                  <div className="mt-2">
                    <RiskBadge level="low" size="sm" />
                  </div>
                </DashboardCard>
                
                <DashboardCard
                  title="Water Efficiency"
                  value="85%"
                  subtitle="Optimal usage"
                  icon={Droplets}
                  trend="up"
                  trendValue="5% saved"
                  color="blue"
                />
                
                <DashboardCard
                  title="Temperature Alert"
                  value="32°C"
                  subtitle="Heat stress risk"
                  icon={Thermometer}
                  color="yellow"
                >
                  <div className="mt-2">
                    <RiskBadge level="medium" label="Heat Stress" size="sm" />
                  </div>
                </DashboardCard>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Alerts
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Weather Warning
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Heavy rainfall expected in 2 days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Price Spike
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Rice prices up 8% this week
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Market Intelligence
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Best Market</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Delhi Mandi</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Current Price</span>
                    <span className="text-sm font-medium text-green-600">₹3,200/quintal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Best Selling Window</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Next 5 days</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Sustainability Score
                </h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">7.8/10</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Good environmental impact
                  </p>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Carbon footprint</span>
                      <span className="text-green-600">Low</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Water usage</span>
                      <span className="text-green-600">Efficient</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Soil health</span>
                      <span className="text-green-600">Excellent</span>
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