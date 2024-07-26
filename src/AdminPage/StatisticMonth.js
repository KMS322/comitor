import "../CSS/statisticsMonth.css";
import React, { useState, useEffect } from "react";

const StatisticMonth = ({ datas }) => {
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [showDatas, setShowDatas] = useState(false);
  useEffect(() => {
    // Populate years from 2000 to the current year
    const currentYear = new Date().getFullYear();
    const yearsArray = [];
    for (let year = 2024; year <= currentYear; year++) {
      yearsArray.push(year);
    }
    setYears(yearsArray);

    // Populate months
    const monthsArray = Array.from({ length: 12 }, (v, k) => k + 1);
    setMonths(monthsArray);
  }, []);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const getSelectedValues = () => {
    const year = selectedYear;
    const month = selectedMonth;
    setShowDatas(!showDatas);
  };
  console.log("datas : ", datas);
  return (
    <div className="statisticsMonth">
      <p>월별 통계</p>
      <div>
        <label htmlFor="yearSelect">Select Year:</label>
        <select
          id="yearSelect"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="">--Select Year--</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="monthSelect">Select Month:</label>
        <select
          id="monthSelect"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <option value="">--Select Month--</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <button onClick={getSelectedValues}>Get Selected Values</button>
      {showDatas && <p>{`${selectedYear}년 ${selectedMonth}월 판매량 순위`}</p>}
      {showDatas &&
        datas.map((data, index) => {
          return (
            <div className="month_rank" key={index}>
              <p>
                {index + 1}위(판매량 : {data.totalCnt}개)
              </p>
              <p>{data.pName}</p>
            </div>
          );
        })}
    </div>
  );
};

export default StatisticMonth;
