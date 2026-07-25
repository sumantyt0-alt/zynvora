const Timer = ({ minutes, seconds }) => {
  return (
    <div className="bg-red-100 text-red-600 px-5 py-3 rounded-xl font-bold text-lg">
      ⏳ {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </div>
  );
};

export default Timer;