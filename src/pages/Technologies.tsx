import React from 'react';
import { Code, Database, Server, Brain } from 'lucide-react';

const Technologies: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Technologies Used</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TechnologyCard
          icon={<Code className="w-8 h-8 text-blue-500" />}
          title="Programming Languages"
          items={[
            "Python (NumPy, pandas, scikit-learn)",
            "R (dplyr, tidyr, caret)"
          ]}
        />
        <TechnologyCard
          icon={<Database className="w-8 h-8 text-green-500" />}
          title="Data Storage Solutions"
          items={[
            "Relational databases (MySQL, PostgreSQL)",
            "NoSQL databases (MongoDB, Cassandra)"
          ]}
        />
        <TechnologyCard
          icon={<Server className="w-8 h-8 text-purple-500" />}
          title="Data Processing Frameworks"
          items={[
            "Apache Spark",
            "Apache Hadoop"
          ]}
        />
        <TechnologyCard
          icon={<Brain className="w-8 h-8 text-red-500" />}
          title="Machine Learning Libraries"
          items={[
            "scikit-learn",
            "TensorFlow",
            "PyTorch"
          ]}
        />
      </div>
    </div>
  );
};

const TechnologyCard: React.FC<{ icon: React.ReactNode; title: string; items: string[] }> = ({ icon, title, items }) => {
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

export default Technologies;