import axios from 'axios';
import { BASE_URL } from '../utils/constants';


class NoDataError extends Error {
    constructor(message) {
      super(message);
      this.name = "NoDataError";
    }
}
  
class DataFormatError extends Error {
    constructor(message) {
      super(message);
      this.name = "DataFormatError";
    }
}

const fetchCourses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}training_modules/courses/`);
    if (!response.data || response.data.length === 0) {
      throw new NoDataError('No data returned from the server');
    }
    if (!Array.isArray(response.data)) {
      throw new DataFormatError('Data returned in an incorrect format');
    }
    return response.data;
  } catch (error) {
    if (error instanceof NoDataError || error instanceof DataFormatError) {
      console.error(error.message);
    } else if (error.response) {
      console.error('Server responded with status code:', error.response.status);
    } else if (error.request) {
      console.error('No response received for the request');
    } else {
      console.error('Error making request:', error.message);
    }
    return [];
  }
};

const fetchTrainingEntries = async () => {
  try {
    const entries = [];
    for (let i = 0; i < 100; i++) {
      const response = await axios.get(`${BASE_URL}training/`);
      if (!response.data || Object.keys(response.data).length === 0) {
        throw new NoDataError('No data returned from the server');
      }
      if (typeof response.data !== 'object' || response.data === null ) {
        throw new DataFormatError('Data returned in an incorrect format');
      }
      entries.push(response.data.score);
    }
    entries.sort((a, b) => b - a);
    return entries;
  } catch (error) {
    if (error instanceof NoDataError || error instanceof DataFormatError) {
      console.error(error.message);
    } else if (error.response) {
      console.error('Server responded with status code:', error.response.status);
    } else if (error.request) {
      console.error('No response received for the request');
    } else {
      console.error('Error making request:', error.message);
    }
    return [];
  }
};

export { fetchCourses, fetchTrainingEntries }