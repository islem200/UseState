import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("No advice Yet");
  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      console.log(response);
      setAdvice(response.data.slip.advice);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAdvice;
  },[]);

  return (
    <div className="advice">
      <p>{advice}</p>
      <button onClick={fetchAdvice} className="btn primary">
        New Advice
      </button>
    </div>
  );
};

export default Advice;
