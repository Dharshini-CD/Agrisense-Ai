import React from 'react';
   // import { LucideIcon } from 'lucide-react';


    interface DashboardCardProps {
      title: string;
      value: string | number;
      subtitle?: string;
      icon: any;
      trend?: 'up' | 'down' | 'neutral';
      trendValue?: string;
      color?: 'green' | 'blue' | 'yellow' | 'red' | 'purple';
      children?: React.ReactNode;
    }

    const DashboardCard: React.FC<DashboardCardProps> = ({
      title,
      value,
      subtitle,
      icon: Icon,
      trend,
      trendValue,
      color = 'green',
      children
    }) => {
      const colorClasses = {
        green: 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400',
        blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400',
        yellow: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400',
        red: 'text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400',
        purple: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400'
      };

      const trendClasses = {
        up: 'text-green-600 dark:text-green-400',
        down: 'text-red-600 dark:text-red-400',
        neutral: 'text-gray-600 dark:text-gray-400'
      };

      return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
              <Icon className="h-6 w-6" />
            </div>
            {trend && trendValue && (
              <span className={`text-sm font-medium ${trendClasses[trend]}`}>
                {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'} {trendValue}
              </span>
            )}
          </div>
          
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
            {subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
            )}
          </div>

          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      );
    };

    export default DashboardCard;