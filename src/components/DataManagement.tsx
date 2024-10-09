import React, { useState } from 'react';
import { Element, Field, fields, fieldTranslations } from '../types';

interface DataManagementProps {
  elements: Element[];
  onUpdate: (updatedElement: Element) => void;
  onDelete: (elementToDelete: Element) => void;
}

const DataManagement: React.FC<DataManagementProps> = ({ elements, onUpdate, onDelete }) => {
  const [editingElement, setEditingElement] = useState<Element | null>(null);

  const handleEdit = (element: Element) => {
    setEditingElement(element);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingElement) {
      onUpdate(editingElement);
      setEditingElement(null);
    }
  };

  const handleDelete = (element: Element) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa yếu tố này?')) {
      onDelete(element);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Quản lý dữ liệu</h2>
      {elements.map((element) => (
        <div key={`${element.category}-${element.name}`} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">{element.name} ({element.category})</h3>
          <p className="mb-4">{element.generalDescription}</p>
          <div className="flex space-x-2">
            <button
              onClick={() => handleEdit(element)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Chỉnh sửa
            </button>
            <button
              onClick={() => handleDelete(element)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Xóa
            </button>
          </div>
        </div>
      ))}

      {editingElement && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold mb-4">Chỉnh sửa {editingElement.name}</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label htmlFor="edit-name" className="block mb-1">Tên:</label>
                <input
                  type="text"
                  id="edit-name"
                  value={editingElement.name}
                  onChange={(e) => setEditingElement({ ...editingElement, name: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="edit-category" className="block mb-1">Danh mục:</label>
                <select
                  id="edit-category"
                  value={editingElement.category}
                  onChange={(e) => setEditingElement({ ...editingElement, category: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="lucThan">Lục Thân</option>
                  <option value="lucThu">Lục Thú</option>
                  <option value="nguHanh">Ngũ Hành</option>
                </select>
              </div>
              <div>
                <label htmlFor="edit-description" className="block mb-1">Mô tả chung:</label>
                <textarea
                  id="edit-description"
                  value={editingElement.generalDescription}
                  onChange={(e) => setEditingElement({ ...editingElement, generalDescription: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                  rows={3}
                />
              </div>
              {fields.map((field) => (
                <div key={field}>
                  <label htmlFor={`edit-${field}`} className="block mb-1">{fieldTranslations[field]}:</label>
                  <textarea
                    id={`edit-${field}`}
                    value={editingElement.meanings[field]}
                    onChange={(e) => setEditingElement({
                      ...editingElement,
                      meanings: { ...editingElement.meanings, [field]: e.target.value }
                    })}
                    className="w-full p-2 border rounded"
                    rows={2}
                  />
                </div>
              ))}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingElement(null)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataManagement;