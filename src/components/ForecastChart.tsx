import React from 'react';
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

    interface ForecastData {
      date: string;
      price: number;
      confidence_upper?: number;
      confidence_lower?: number;
    }

    interface ForecastChartProps {
      data: ForecastData[];
      title?: string;
      color?: string;
      showConfidence?: boolean;
    }

    const ForecastChart: React.FC<ForecastChartProps> = ({ 
      data, 
      title = "Price Forecast", 
      color = "#10b981",
      showConfidence = true 
    }) => {
      return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {showConfidence ? (
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="date" 
                    className="text-xs"
                    tick={{ fill: 'currentColor' }}
                  />
                  <YAxis 
                    className="text-xs"
                    tick={{ fill: 'currentColor' }}
                    tickFormatter={(value) => `₹${value}`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--foreground)'
                    }}
                    formatter={(value: number, name: string) => [
                      `₹${value.toFixed(2)}`,
                      name === 'price' ? 'Price' : 
                      name === 'confidence_upper' ? 'Upper Bound' : 'Lower Bound'
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="confidence_upper"
                    stackId="1"
                    stroke="none"
                    fill={color}
                    fillOpacity={0.1}
                  />
                  <Area
                    type="monotone"
                    dataKey="confidence_lower"
                    stackId="1"
                    stroke="none"
                    fill={color}
                    fillOpacity={0.1}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke={color}
                    strokeWidth={3}
                    dot={{ fill: color, strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
                  />
                </AreaChart>
              ) : (
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="date" 
                    className="text-xs"
                    tick={{ fill: 'currentColor' }}
                  />
                  <YAxis 
                    className="text-xs"
                    tick={{ fill: 'currentColor' }}
                    tickFormatter={(value) => `₹${value}`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--foreground)'
                    }}
                    formatter={(value: number) => [`₹${value.toFixed(2)}`, 'Price']}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke={color}
                    strokeWidth={3}
                    dot={{ fill: color, strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      );
    };

    export default ForecastChart;