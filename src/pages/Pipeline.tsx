import React from 'react';
import { Download, RefreshCw, PieChart, Upload } from 'lucide-react';

const Pipeline: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Data Processing Pipeline</h1>
      <div className="space-y-8">
        <PipelineStep
          icon={<Download className="w-8 h-8 text-blue-500" />}
          title="1. Data Ingestion"
          description="Collect data from various sources and store it in a centralized repository."
          items={[
            "Collect data from EHRs, medical devices, and other sources",
            "Store data in a data lake or data warehouse"
          ]}
        />
        <PipelineStep
          icon={<RefreshCw className="w-8 h-8 text-green-500" />}
          title="2. Data Processing"
          description="Clean, preprocess, and transform the data for analysis."
          items={[
            "Handle missing values and normalize data",
            "Perform feature engineering and data transformation"
          ]}
        />
        <PipelineStep
          icon={<PieChart className="w-8 h-8 text-purple-500" />}
          title="3. Data Analysis"
          description="Apply advanced analytics techniques to extract insights from the data."
          items={[
            "Use machine learning algorithms for predictive and prescriptive analytics",
            "Create visualizations to represent data insights"
          ]}
        />
        <PipelineStep
          icon={<Upload className="w-8 h-8 text-red-500" />}
          title="4. Data Deployment"
          description="Deploy models and insights to support clinical decision-making."
          items={[
            "Integrate results into clinical decision support systems",
            "Update EHRs and other healthcare systems with new insights"
          ]}
        />
      </div>
    </div>
  );
};

const PipelineStep: React.FC<{ icon: React.ReactNode; title: string; description: string; items: string[] }> = ({ icon, title, description, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-2">{title}</h2>
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

export default Pipeline;