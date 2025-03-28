import axios from 'axios';

const getFinancialAdvice = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/get_advice', userData);
    console.log(response.data.advice);
    // Handle the response as needed in your application
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
};

export default getFinancialAdvice;