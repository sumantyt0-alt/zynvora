const SuggestionCard = ({ text, onClick }) => {
  return (
    <button
      onClick={() => onClick(text)}
      className="
        px-4 py-3
        bg-white
        border
        rounded-xl
        shadow-sm
        hover:shadow-md
        hover:bg-blue-50
        transition
        text-sm
        text-gray-700
      "
    >
      {text}
    </button>
  );
};

export default SuggestionCard;