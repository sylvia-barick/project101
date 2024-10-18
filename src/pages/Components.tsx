import React from 'react';
import { Database, HardDrive, BarChart2, FileText } from 'lucide-react';

const Components: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Key Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ComponentCard
          icon={<FileText className="w-8 h-8 text-blue-500" />}
          title="Data Collection"
          items={[
            "Electronic Health Records (EHRs)",
            "Medical imaging data (e.g., X-rays, MRIs)",
            "Laboratory test results",
            "Patient demographics and medical history"
          ]}
        />
        <ComponentCard
          icon={<Database className="w-8 h-8 text-green-500" />}
          title="Data Storage"
          items={[
            "Relational databases (e.g., MySQL, PostgreSQL)",
            "NoSQL databases (e.g., MongoDB, Cassandra)",
            "Data warehousing solutions (e.g., Amazon Redshift, Google BigQuery)"
          ]}
        />
        <ComponentCard
          icon={<HardDrive className="w-8 h-8 text-purple-500" />}
          title="Data Processing"
          items={[
            "Data cleaning and preprocessing",
            "Data transformation and normalization",
            "Data analysis and visualization"
          ]}
        />
        <ComponentCard
          icon={<BarChart2 className="w-8 h-8 text-red-500" />}
          title="Data Analysis"
          items={[
            "Predictive analytics (e.g., disease diagnosis, patient outcomes)",
            "Descriptive analytics (e.g., patient demographics, treatment outcomes)",
            "Prescriptive analytics (e.g., personalized medicine, treatment recommendations)"
          ]}
        />
      </div>
    </div>
  );
};

const ComponentCard: React.FC<{ icon: React.ReactNode; title: string; items: string[] }> = ({ icon, title, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-2">{title}</h2>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Components;