import React from 'react';

const Overview: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Project Overview</h1>
      <p className="mb-4">
        The Data Processing for Hospitals Project aims to design and implement an efficient data processing system for hospitals, enabling them to manage and analyze large amounts of patient data, medical records, and other healthcare-related information.
      </p>
      <p className="mb-4">
        Our system leverages cutting-edge technologies and best practices in data management to provide hospitals with a comprehensive solution for their data processing needs. By implementing this system, healthcare providers can improve patient outcomes, increase operational efficiency, and make data-driven decisions.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Objectives</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Streamline data collection and storage processes</li>
        <li>Implement robust data processing and analysis pipelines</li>
        <li>Provide actionable insights through advanced analytics</li>
        <li>Enhance decision-making capabilities for healthcare professionals</li>
        <li>Improve overall patient care and outcomes</li>
      </ul>
    </div>
  );
};

export default Overview;