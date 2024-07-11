function Today({ weatherData }) {
  // Extract current time and date values
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const day = currentTime.getDate();
  const month = currentTime.getMonth() + 1; // Months are zero-indexed
  const year = currentTime.getFullYear();

  if (weatherData === null) {
    return (
      <div className="w-full flex flex-col items-center mt-5">
        <span className="w-full text-center">Nav</span>
        <div className="w-full flex mt-5">
          <div className="flex-1 h-[120px] bg-slate-400 flex justify-center items-center">
            <img
              alt="Weather Icon"
              src="https://lh6.googleusercontent.com/8iEGI7zU2TXsr8p8Uj7oLD7ZTnFU1c09VGhsZHKjaRNH6ZjMusFYXlY49tmBtGs6My0qTCqPTHFfTBVDMsI-h5hqUhMSFJzmOrNPtdW5p6FrjQxcyRnekEmotNjUMBOy3ySUTTi-"
            />
          </div>
          <div className="flex-1 h-[120px] flex justify-center items-center text-4xl">
            <span className="relative font-bold">
              Nav
              <span className="absolute text-[10px] top-[-10px] right-[-7px]">
                o
              </span>
              <span className="absolute text-[13px] font-bold top-[-9px] right-[-15px]">
                F
              </span>
            </span>
          </div>
        </div>
        <span className="w-full font-bold text-xl flex justify-center mt-5">
          Nav
        </span>
        <nav className="flex justify-between mt-5">
          <ul className="w-[90px]">
            <li className="w-full">Humidity</li>
            <li className="w-full">Nav%</li>
          </ul>
          <ul className="w-[90px]">
            <li className="w-full">Wind speed</li>
            <li className="w-full">Nav km/h</li>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center mt-5">
      <span className="w-full text-center">
        {hours}:{minutes}:{seconds} PM, {day} / {month} / {year}
      </span>
      <div className="w-full flex mt-5">
        <div className="flex-1 h-[120px]  flex justify-center items-center">
          <img alt="Weather Icon" src={weatherData?.current?.condition?.icon} />
        </div>
        <div className="flex-1 h-[120px]  flex justify-center items-center text-4xl">
          <span className="relative font-bold">
            {weatherData?.current?.temp_f}
            <span className="absolute text-[10px] top-[-10px] right-[-7px]">
              o
            </span>
            <span className="absolute text-[13px] font-bold top-[-9px] right-[-15px]">
              F
            </span>
          </span>
        </div>
      </div>
      <span className="w-full font-bold text-xl flex justify-center mt-5">
        {weatherData?.current?.condition?.text}
      </span>
      <nav className="flex justify-between mt-5">
        <ul className="w-[90px]">
          <li className="w-full">Humidity</li>
          <li className="w-full">{weatherData?.current?.humidity}%</li>
        </ul>
        <ul className="w-[90px]">
          <li className="w-full">Wind speed</li>
          <li className="w-full">{weatherData?.current?.wind_kph} km/h</li>
        </ul>
      </nav>
    </div>
  );
}

export default Today;
