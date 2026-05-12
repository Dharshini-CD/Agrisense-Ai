import React from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';

    export default function Alerts() {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center py-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Smart Alerts System
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Coming soon
              </p>
              
            </div>
          </main>

          <Footer />
        </div>
      );
    }
