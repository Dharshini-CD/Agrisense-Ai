import React from 'react';

    interface RiskBadgeProps {
      level: 'low' | 'medium' | 'high';
      label?: string;
      size?: 'sm' | 'md' | 'lg';
    }

    const RiskBadge: React.FC<RiskBadgeProps> = ({ level, label, size = 'md' }) => {
      const levelConfig = {
        low: {
          bg: 'bg-green-100 dark:bg-green-900/20',
          text: 'text-green-800 dark:text-green-300',
          border: 'border-green-200 dark:border-green-800',
          defaultLabel: 'Low Risk'
        },
        medium: {
          bg: 'bg-yellow-100 dark:bg-yellow-900/20',
          text: 'text-yellow-800 dark:text-yellow-300',
          border: 'border-yellow-200 dark:border-yellow-800',
          defaultLabel: 'Medium Risk'
        },
        high: {
          bg: 'bg-red-100 dark:bg-red-900/20',
          text: 'text-red-800 dark:text-red-300',
          border: 'border-red-200 dark:border-red-800',
          defaultLabel: 'High Risk'
        }
      };

      const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base'
      };

      const config = levelConfig[level];
      const displayLabel = label || config.defaultLabel;

      return (
        <span className={`
          inline-flex items-center rounded-full border font-medium
          ${config.bg} ${config.text} ${config.border} ${sizeClasses[size]}
        `}>
          <span className={`w-2 h-2 rounded-full mr-2 ${
            level === 'low' ? 'bg-green-500' : 
            level === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
          }`} />
          {displayLabel}
        </span>
      );
    };

    export default RiskBadge;