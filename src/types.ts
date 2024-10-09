export interface Element {
  category: string;
  name: string;
  generalDescription: string;
  meanings: {
    [key in Field]: string;
  };
}

export interface Category {
  name: string;
  elements: Element[];
}

export type Field =
  | 'investment'
  | 'business'
  | 'relationship'
  | 'pregnancy'
  | 'fengShui'
  | 'spiritual'
  | 'health'
  | 'missingPerson'
  | 'travel'
  | 'education'
  | 'weather'
  | 'career';

export const fields: Field[] = [
  'investment',
  'business',
  'relationship',
  'pregnancy',
  'fengShui',
  'spiritual',
  'health',
  'missingPerson',
  'travel',
  'education',
  'weather',
  'career',
];

export const fieldTranslations: { [key in Field]: string } = {
  investment: 'Đầu tư',
  business: 'Kinh doanh',
  relationship: 'Tình cảm/Hôn nhân',
  pregnancy: 'Thai sản',
  fengShui: 'Phong thủy/Mồ mả',
  spiritual: 'Tâm linh',
  health: 'Bệnh tật',
  missingPerson: 'Tìm người mất tích',
  travel: 'Xuất ngoại',
  education: 'Học hành',
  weather: 'Thời tiết',
  career: 'Công việc',
};