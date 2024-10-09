import React from 'react';
import { Field, fieldTranslations } from '../types';

interface SearchResultsProps {
  field: Field;
  lucThan: string;
  lucThu: string;
  diaChi: string;
  results: {
    lucThan?: string;
    lucThu?: string;
    diaChi?: string;
  };
}

const SearchResults: React.FC<SearchResultsProps> = ({ field, lucThan, lucThu, diaChi, results }) => {
  if (!results.lucThan && !results.lucThu && !results.diaChi) {
    return null;
  }

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {fieldTranslations[field]} - {lucThan && `Lục Thân: ${lucThan}`} {lucThu && `- Lục Thú: ${lucThu}`} {diaChi && `- Địa Chi: ${diaChi}`}
      </h2>
      <div className="space-y-4">
        {results.lucThan && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Lục Thân - {lucThan}:</h3>
            <p>{results.lucThan}</p>
          </div>
        )}
        {results.lucThu && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Lục Thú - {lucThu}:</h3>
            <p>{results.lucThu}</p>
          </div>
        )}
        {results.diaChi && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Địa Chi - {diaChi}:</h3>
            <p>{results.diaChi}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;