import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const getColleges = async (params: any) => {
  const { data } = await api.get('/colleges', { params });
  return data.data; // { colleges, total, page, limit }
};

export const getCollegeById = async (id: number) => {
  const { data } = await api.get(`/colleges/${id}`);
  return data.data;
};

export const compareColleges = async (ids: number[]) => {
  const { data } = await api.get(`/colleges/compare`, {
    params: { ids: ids.join(',') }
  });
  return data.data;
};
