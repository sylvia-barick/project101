import React from 'react';
import { Link } from 'react-router-dom';
import { Database } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Database size={32} />
          <span className="text-xl font-bold">Hospital Data Processing</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/overview" className="hover:text-blue-200">Overview</Link></li>
            <li><Link to="/components" className="hover:text-blue-200">Components</Link></li>
            <li><Link to="/pipeline" className="hover:text-blue-200">Pipeline</Link></li>
            <li><Link to="/technologies" className="hover:text-blue-200">Technologies</Link></li>
            <li><Link to="/benefits" className="hover:text-blue-200">Benefits</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;