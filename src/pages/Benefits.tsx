import React from 'react';
import { Heart, TrendingUp, Brain } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Benefits</h1>
      <div className="space-y-8">
        <BenefitCard
          icon={<Heart className="w-12 h-12 text-red-500" />}
          title="Improved Patient Outcomes"
          description="Our data processing system enables personalized medicine and enhanced disease diagnosis and treatment."
          items={[
            "Data-driven insights for tailored patient care",
            "Early detection of potential health issues",
            "Optimized treatment plans based on historical data"
          ]}
        />
        <BenefitCard
          icon={<TrendingUp className="w-12 h-12 text-green-500" />}
          title="Increased Efficiency"
          description="Automate data processing and analysis to save time and reduce errors."
          items={[
            "Streamlined data entry and management processes",
            "Reduced manual errors in data handling",
            "Faster access to critical patient information"
          ]}
        />
        <BenefitCard
          icon={<Brain className="w-12 h-12 text-blue-500" />}
          title="Better Decision Making"
          description="Empower healthcare professionals with data-driven insights for improved resource allocation and planning."
          items={[
            "Real-time analytics for informed decision-making",
            "Predictive models for resource allocation",
            "Trend analysis for proactive healthcare management"
          ]}
        />
      </div>
    </div>
  );
};

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string; items: string[] }> = ({ icon, title, description, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-semibold ml-4">{title}</h2>
      </div>
      <p className="mb-4">{description}</p>
      <ul className="list-disc list-inside space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;