import React from 'react';
import { BookOpen } from 'lucide-react';

interface HeaderProps {
  activeTab: 'search' | 'input' | 'manage';
  setActiveTab: (tab: 'search' | 'input' | 'manage') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <BookOpen className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Bí Kíp Lục Hào</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setActiveTab('search')}
                className={`hover:text-indigo-200 ${activeTab === 'search' ? 'font-bold' : ''}`}
              >
                Tra cứu
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('input')}
                className={`hover:text-indigo-200 ${activeTab === 'input' ? 'font-bold' : ''}`}
              >
                Nạp dữ liệu
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('manage')}
                className={`hover:text-indigo-200 ${activeTab === 'manage' ? 'font-bold' : ''}`}
              >
                Quản lý
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;