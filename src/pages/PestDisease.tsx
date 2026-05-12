import React from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import DashboardCard from '../components/DashboardCard';
    import RiskBadge from '../components/RiskBadge';
    import { Bug, Shield, AlertTriangle, Eye, Zap, Calendar } from 'lucide-react';

    export default function PestDisease() {
      const pestRisks = [
        {
          name: 'Brown Planthopper',
          probability: 25,
          severity: 'medium',
          urgency: 'low',
          prevention: ['Use resistant varieties', 'Maintain proper water levels', 'Apply neem oil spray'],
          symptoms: ['Yellowing of leaves', 'Stunted growth', 'Honeydew secretion']
        },
        {
          name: 'Stem Borer',
          probability: 45,
          severity: 'high',
          urgency: 'medium',
          prevention: ['Pheromone traps', 'Early planting', 'Remove crop residues'],
          symptoms: ['Dead hearts', 'White ears', 'Holes in stem']
        },
        {
          name: 'Blast Disease',
          probability: 35,
          severity: 'high',
          urgency: 'high',
          prevention: ['Seed treatment', 'Balanced fertilization', 'Proper spacing'],
          symptoms: ['Leaf spots', 'Neck rot', 'Panicle infection']
        }
      ];

      const getSeverityColor = (severity: string) => {
        switch (severity) {
          case 'low': return 'green';
          case 'medium': return 'yellow';
          case 'high': return 'red';
          default: return 'gray';
        }
      };

      const getUrgencyLevel = (urgency: string): 'low' | 'medium' | 'high' => {
        return urgency as 'low' | 'medium' | 'high';
      };

      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Pest & Disease Prediction
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                AI-powered early detection and prevention recommendations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <DashboardCard
                title="Overall Risk"
                value="Medium"
                subtitle="Current assessment"
                icon={Shield}
                color="yellow"
              >
                <RiskBadge level="medium" label="Active Monitoring" />
              </DashboardCard>
              
              <DashboardCard
                title="High Priority Threats"
                value="2"
                subtitle="Require attention"
                icon={AlertTriangle}
                color="red"
                trend="up"
                trendValue="1 new"
              />
              
              <DashboardCard
                title="Prevention Score"
                value="7.5/10"
                subtitle="Current measures"
                icon={Eye}
                color="green"
                trend="up"
                trendValue="Good"
              />
              
              <DashboardCard
                title="Next Inspection"
                value="3 days"
                subtitle="Recommended"
                icon={Calendar}
                color="blue"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Current Threat Assessment
                  </h2>
                  
                  <div className="space-y-4">
                    {pestRisks.map((pest, index) => (
                      <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {pest.name}
                          </h3>
                          <RiskBadge level={getUrgencyLevel(pest.urgency)} />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Probability</p>
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    pest.probability > 60 ? 'bg-red-500' : 
                                    pest.probability > 30 ? 'bg-yellow-500' : 'bg-green-500'
                                  }`}
                                  style={{ width: `${pest.probability}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {pest.probability}%
                              </span>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Severity</p>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              pest.severity === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300' :
                              pest.severity === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
                              'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                            }`}>
                              {pest.severity.charAt(0).toUpperCase() + pest.severity.slice(1)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                              Key Symptoms:
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {pest.symptoms.join(', ')}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Prevention Recommendations
                  </h3>
                  
                  <div className="space-y-4">
                    {pestRisks.filter(pest => pest.urgency !== 'low').map((pest, index) => (
                      <div key={index} className="border-l-4 border-yellow-400 pl-4">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                          {pest.name} Prevention
                        </h4>
                        <ul className="space-y-1">
                          {pest.prevention.map((measure, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {measure}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Treatment Schedule
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-5 w-5 text-red-500" />
                        <div>
                          <p className="text-sm font-medium text-red-800 dark:text-red-300">
                            Immediate Action
                          </p>
                          <p className="text-xs text-red-600 dark:text-red-400">
                            Blast disease treatment
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-red-600 dark:text-red-400">Today</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                      <div className="flex items-center space-x-3">
                        <Bug className="h-5 w-5 text-yellow-500" />
                        <div>
                          <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                            Preventive Spray
                          </p>
                          <p className="text-xs text-yellow-600 dark:text-yellow-400">
                            Stem borer control
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-yellow-600 dark:text-yellow-400">In 3 days</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                      <div className="flex items-center space-x-3">
                        <Eye className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="text-sm font-medium text-green-800 dark:text-green-300">
                            Field Inspection
                          </p>
                          <p className="text-xs text-green-600 dark:text-green-400">
                            Monitor all threats
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-green-600 dark:text-green-400">Weekly</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Environmental Factors
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Temperature</span>
                      <span className="text-sm font-medium text-yellow-600">High (32°C)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Humidity</span>
                      <span className="text-sm font-medium text-red-600">Very High (85%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Rainfall</span>
                      <span className="text-sm font-medium text-green-600">Moderate</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Wind Speed</span>
                      <span className="text-sm font-medium text-green-600">Low</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                      <strong>Alert:</strong> High humidity conditions favor fungal diseases. 
                      Increase monitoring frequency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      );
    }