import React, { useState } from 'react';
import { Field, fields, fieldTranslations } from '../types';

interface SearchFormProps {
  onSearch: (field: Field, lucThan: string, lucThu: string, diaChi: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [field, setField] = useState<Field>('investment');
  const [lucThan, setLucThan] = useState('');
  const [lucThu, setLucThu] = useState('');
  const [diaChi, setDiaChi] = useState('');

  const lucThanOptions = ['Phụ Mẫu', 'Huynh Đệ', 'Tử Tôn', 'Thê Tài', 'Quan Quỷ'];
  const lucThuOptions = ['Bạch Hổ', 'Chu Tước', 'Đằng Xà', 'Huyền Vũ', 'Thanh Long', 'Câu Trần'];
  const diaChiOptions = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(field, lucThan, lucThu, diaChi);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="field" className="block mb-1">Lĩnh vực:</label>
        <select
          id="field"
          value={field}
          onChange={(e) => setField(e.target.value as Field)}
          className="w-full p-2 border rounded"
        >
          {fields.map((f) => (
            <option key={f} value={f}>{fieldTranslations[f]}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="lucThan" className="block mb-1">Lục Thân:</label>
        <select
          id="lucThan"
          value={lucThan}
          onChange={(e) => setLucThan(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Chọn Lục Thân</option>
          {lucThanOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="lucThu" className="block mb-1">Lục Thú:</label>
        <select
          id="lucThu"
          value={lucThu}
          onChange={(e) => setLucThu(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Chọn Lục Thú</option>
          {lucThuOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="diaChi" className="block mb-1">12 Địa Chi:</label>
        <select
          id="diaChi"
          value={diaChi}
          onChange={(e) => setDiaChi(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Chọn Địa Chi</option>
          {diaChiOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Tra cứu
      </button>
    </form>
  );
};

export default SearchForm;