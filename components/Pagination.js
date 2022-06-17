export const Pagination = ({ page, setPage }) => {
  return (
    <div className={`text-white text-center flex gap-3 m-auto`}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, i) => {
        return (
          <button
            type='button'
            onClick={(e) => {
              setPage(Number(e.target.value) * 10);
            }}
            value={number}
            key={number}
            className={`transition-all w-5 h-5 text-black  rounded-2xl flex items-center justify-center ${
              page / 10 === number
                ? 'bg-orange-300 text-white'
                : 'bg-white text-black'
            }`}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};
