import React, { useState } from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import DashboardCard from '../components/DashboardCard';
    import RiskBadge from '../components/RiskBadge';
    import { Calculator, TrendingDown, CloudRain, Bug, AlertTriangle } from 'lucide-react';

    export default function RiskSimulator() {
      const [scenarios, setScenarios] = useState({
        priceDropPercent: 15,
        yieldDropPercent: 20,
        rainfallFailure: false
      });

      const [baseMetrics] = useState({
        expectedYield: 4.2, // tons per hectare
        currentPrice: 3200, // per quintal
        costPerHectare: 45000,
        baseProfit: 89400
      });

      const calculateScenarioImpact = () => {
        const { priceDropPercent, yieldDropPercent, rainfallFailure } = scenarios;
        
        let adjustedPrice = baseMetrics.currentPrice * (1 - priceDropPercent / 100);
        let adjustedYield = baseMetrics.expectedYield * (1 - yieldDropPercent / 100);
        
        if (rainfallFailure) {
          adjustedYield *= 0.7; // Additional 30% yield reduction
          adjustedPrice *= 1.1; // 10% price increase due to scarcity
        }

        const revenue = adjustedYield * 10 * adjustedPrice; // 10 quintals per ton
        const adjustedProfit = revenue - baseMetrics.costPerHectare;
        const profitChange = ((adjustedProfit - baseMetrics.baseProfit) / baseMetrics.baseProfit * 100);

        return {
          adjustedPrice,
          adjustedYield,
          adjustedProfit,
          profitChange,
          revenue
        };
      };

      const scenarioResults = calculateScenarioImpact();

      const handleScenarioChange = (field: string, value: number | boolean) => {
        setScenarios(prev => ({
          ...prev,
          [field]: value
        }));
      };

      const getRiskLevel = (profitChange: number): 'low' | 'medium' | 'high' => {
        if (profitChange > -10) return 'low';
        if (profitChange > -30) return 'medium';
        return 'high';
      };

      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Risk & Scenario Simulator
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Analyze potential impacts of various risk scenarios on your farming operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Scenario Parameters
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Price Drop Scenario
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="range"
                          min="0"
                          max="50"
                          value={scenarios.priceDropPercent}
                          onChange={(e) => handleScenarioChange('priceDropPercent', parseInt(e.target.value))}
                          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white w-12">
                          {scenarios.priceDropPercent}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Simulate market price reduction
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Yield Drop Scenario
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="range"
                          min="0"
                          max="60"
                          value={scenarios.yieldDropPercent}
                          onChange={(e) => handleScenarioChange('yieldDropPercent', parseInt(e.target.value))}
                          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white w-12">
                          {scenarios.yieldDropPercent}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Simulate crop yield reduction
                      </p>
                    </div>

                    <div>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={scenarios.rainfallFailure}
                          onChange={(e) => handleScenarioChange('rainfallFailure', e.target.checked)}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Rainfall Failure Scenario
                        </span>
                      </label>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-7">
                        Simulate drought conditions (additional 30% yield loss)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Base Scenario (No Risk)
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Expected Yield</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {baseMetrics.expectedYield} tons/ha
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Current Price</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        ₹{baseMetrics.currentPrice}/quintal
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Production Cost</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        ₹{baseMetrics.costPerHectare.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Expected Profit</p>
                      <p className="text-lg font-semibold text-green-600">
                        ₹{baseMetrics.baseProfit.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DashboardCard
                    title="Adjusted Profit"
                    value={`₹${Math.round(scenarioResults.adjustedProfit).toLocaleString()}`}
                    subtitle="After risk scenarios"
                    icon={Calculator}
                    trend={scenarioResults.profitChange > 0 ? 'up' : 'down'}
                    trendValue={`${scenarioResults.profitChange.toFixed(1)}%`}
                    color={scenarioResults.profitChange > -10 ? 'green' : scenarioResults.profitChange > -30 ? 'yellow' : 'red'}
                  />
                  
                  <DashboardCard
                    title="Risk Level"
                    value=""
                    subtitle="Overall assessment"
                    icon={AlertTriangle}
                    color={getRiskLevel(scenarioResults.profitChange) === 'low' ? 'green' : 
                           getRiskLevel(scenarioResults.profitChange) === 'medium' ? 'yellow' : 'red'}
                  >
                    <RiskBadge level={getRiskLevel(scenarioResults.profitChange)} />
                  </DashboardCard>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Scenario Impact Analysis
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                      <div className="flex items-center space-x-3">
                        <TrendingDown className="h-5 w-5 text-red-500" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Price Impact
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        ₹{Math.round(scenarioResults.adjustedPrice)}/quintal
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                      <div className="flex items-center space-x-3">
                        <Bug className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Yield Impact
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {scenarioResults.adjustedYield.toFixed(1)} tons/ha
                      </span>
                    </div>

                    {scenarios.rainfallFailure && (
                      <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
                        <div className="flex items-center space-x-3">
                          <CloudRain className="h-5 w-5 text-red-500" />
                          <span className="text-sm font-medium text-red-800 dark:text-red-300">
                            Drought Conditions
                          </span>
                        </div>
                        <span className="text-sm text-red-600 dark:text-red-400">
                          Active
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Risk Mitigation Strategies
                  </h3>
                  <div className="space-y-3">
                    {scenarioResults.profitChange < -20 && (
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
                        <p className="text-sm font-medium text-red-800 dark:text-red-300">
                          High Risk Detected
                        </p>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          Consider crop insurance and diversification
                        </p>
                      </div>
                    )}
                    
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                        Diversification
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Plant multiple crops to spread risk
                      </p>
                    </div>
                    
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                      <p className="text-sm font-medium text-green-800 dark:text-green-300">
                        Forward Contracts
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Lock in prices to reduce market risk
                      </p>
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