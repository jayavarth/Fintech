import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InvestmentIdeas() {
  const [investmentIdeas, setInvestmentIdeas] = useState([]);

  useEffect(() => {
    const fetchInvestmentIdeas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/investment-ideas');
        setInvestmentIdeas(response.data);
      } catch (error) {
        console.error('Error fetching investment ideas:', error);
      }
    };

    fetchInvestmentIdeas();
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <div>
      <h1>Investment Ideas</h1>
      <ul>
        {investmentIdeas.map((idea, index) => (
          <li key={index}>
            {idea.investmentOption} - {idea.expectedReturn} ({idea.riskLevel})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvestmentIdeas;
