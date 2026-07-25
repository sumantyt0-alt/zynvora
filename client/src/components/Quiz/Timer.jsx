const Timer = ({ minutes, seconds }) => {

  const totalSeconds = minutes * 60 + seconds;

  const isWarning = totalSeconds <= 10;


  return (
    <div
      className={`
        px-5
        py-3
        rounded-xl
        font-bold
        text-lg
        transition-all
        ${
          isWarning
          ? "bg-red-200 text-red-700 animate-pulse"
          : "bg-red-100 text-red-600"
        }
      `}
    >
      ⏳{" "}
      {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </div>
  );
};

export default Timer;