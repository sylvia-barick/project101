import React from 'react';
import { Link } from 'react-router-dom';
import { Database, BarChart, Activity } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Data Processing for Hospitals Project</h1>
      <p className="text-xl mb-8">Empowering healthcare with advanced data processing and analytics</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Database className="w-12 h-12 text-blue-500" />}
          title="Efficient Data Management"
          description="Streamline your hospital's data collection and storage processes"
        />
        <FeatureCard
          icon={<BarChart className="w-12 h-12 text-green-500" />}
          title="Advanced Analytics"
          description="Gain valuable insights from your healthcare data"
        />
        <FeatureCard
          icon={<Activity className="w-12 h-12 text-red-500" />}
          title="Improved Patient Outcomes"
          description="Leverage data-driven decisions for better healthcare"
        />
      </div>
      <Link to="/overview" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
        Learn More
      </Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Home;