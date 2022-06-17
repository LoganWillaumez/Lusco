export const Pagination = ({ page, setPage, data }) => {
  return (
    <div className={`text-white text-center flex gap-3 m-auto`}>
      {new Array(Math.floor(data.data.results.length / 10))
        .fill([])
        .map((number, i) => {
          return (
            <button
              type='button'
              onClick={(e) => {
                setPage(Number(e.target.value) * 10);
              }}
              value={i}
              key={i}
              className={`transition-all w-5 h-5 text-black  rounded-2xl flex items-center justify-center ${
                page / 10 === i
                  ? 'bg-orange-400 text-gray-100'
                  : 'bg-white text-black'
              }`}
            >
              {i}
            </button>
          );
        })}
    </div>
  );
};
