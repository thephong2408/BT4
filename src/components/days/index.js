import React from "react";
import { LineChart } from "@mui/x-charts";
import { useState } from "react";
import classNames from "classnames";

function Days({ weatherData }) {
  const [day, setDay] = useState(0);

  const [selectedDay, setSelectedDay] = useState(0);
  const handleCLick = (index) => {
    setSelectedDay(index);
    setDay(index);
  };
  if (!weatherData)
    return (
      <div className="w-full h-full">
        <img
          alt="Weather Icon"
          src="https://lh6.googleusercontent.com/8iEGI7zU2TXsr8p8Uj7oLD7ZTnFU1c09VGhsZHKjaRNH6ZjMusFYXlY49tmBtGs6My0qTCqPTHFfTBVDMsI-h5hqUhMSFJzmOrNPtdW5p6FrjQxcyRnekEmotNjUMBOy3ySUTTi-"
        />
      </div>
    );

  // Chuyển đổi dữ liệu từ weatherData thành dạng phù hợp cho LineChart
  const data = weatherData.forecast.forecastday[day].hour.map((hour) => ({
    y: hour.temp_c,
    f: hour.uv,
    z: hour.humidity,
  }));
  const yValues = data.map((point) => point.y);
  const fValues = data.map((point) => point.f);
  const zValues = data.map((point) => point.z);

  // Tùy chọn để chỉ hiển thị mỗi đường và ẩn nền, lưới và nhãn của trục
  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Ẩn lưới trục x
        },
        ticks: {
          display: false, // Ẩn nhãn trục x
        },
      },
      y: {
        grid: {
          display: false, // Ẩn lưới trục y
        },
        ticks: {
          display: false, // Ẩn nhãn trục y
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Ẩn chú giải (legend)
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4">
      <div className="w-full h-[180px] bg-[#fff] p-2 flex justify-between border-[1px]">
        <LineChart
          series={[
            {
              data: fValues,
              area: false, // Không tô màu dưới đường
              label: "UV",
              backgroundColor: "transparent", // Đặt nộ trong suốt
              borderColor: "red", // Màu của đường
              borderWidth: 2, // Độ dạy của đường
            },
            {
              data: yValues,
              area: false, // Không tô màu dưới đường
              label: "Nhiệt độ",
              backgroundColor: "transparent", // Đặt nền trong suốt
              borderColor: "blue", // Màu của đường
              borderWidth: 2, // Độ dày của đường
            },
            {
              data: zValues,
              area: false, // Không tô màu dưới đường
              label: "Độ ẩm",
              backgroundColor: "transparent", // Đặt nộ trong suốt
              borderColor: "green", // Màu của đường
              borderWidth: 2, // Độ dạy của đường
            },
          ]}
          width={600}
          height={200}
          options={options}
          slots={{
            axisLine: "none",
            axisTick: "none",
            axisTickLabel: "none",
          }}
        />
      </div>
      <div className="w-full h-[160px] bg-[#fff] p-2 flex justify-between">
        {/* Ngày hôm nay */}
        <div className="w-[135px] h-full bg-[#fff] border-[1px] rounded-md flex flex-col items-center justify-between py-2">
          <span>Today</span>
          <div className="w-[60px] h-[60px] bg-[#fff]">
            <img
              alt="Weather Icon"
              src={weatherData?.current?.condition?.icon}
              className="w-full h-full"
            />
          </div>
          <ul className="w-full text-[12px]">
            <li className="w-full text-center">Humidity</li>
            <li className="w-full text-center">
              {weatherData?.current?.humidity}%
            </li>
          </ul>
        </div>
        {weatherData.forecast.forecastday.map((day, index) => (
          <div
            onClick={() => handleCLick(index)}
            key={index}
            className={classNames(
              "w-[135px] h-full border-[1px] rounded-md flex flex-col items-center justify-between py-2",
              {
                "bg-[#0048ff] text-[#fff]": selectedDay === index,
                "bg-[#fff]": selectedDay !== index,
              }
            )}
          >
            <span>{day.date}</span>
            <div className="w-[60px] h-[60px] bg-[transparent]">
              <img
                alt="Weather Icon"
                src={day.day.condition.icon}
                className="w-full h-full"
              />
            </div>
            <ul className="w-full text-[12px]">
              <li className="w-full text-center">Humidity</li>
              <li className="w-full text-center">{day.day.avghumidity}%</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Days;
