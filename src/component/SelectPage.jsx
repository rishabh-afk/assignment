const SelectPage = ({ pageNo, selectedPages, handleUserClick }) => {
  return (
    <>
      <div className="flex justify-between items-center py-3 cursor-none lg:cursor-pointer">
        <span onClick={() => handleUserClick(pageNo)}>
          {pageNo > 0 ? "Page" + pageNo : "All Pages"}
        </span>
        <span>
          <label className="relative inline-flex items-center">
            <input
              type="checkbox"
              onChange={() => handleUserClick(pageNo)}
              checked={selectedPages.includes(pageNo)}
              className="absolute opacity-0 z-0"
            />
            <span
              className={`w-6 h-6 border rounded-md flex items-center justify-center transition-all cursor-none lg:cursor-pointer duration-300 ${
                selectedPages.includes(pageNo)
                  ? "bg-[#2469F6] border-[#2469F6] hover:bg-blue-400 hover:border-blue-400"
                  : "border-cyan-400 hover:box-border"
              }
        `}
              style={{ borderRadius: "0.4rem" }} // Change border-radius here
            >
              <svg
                className={`w-6 h-6 text-white z-10 ${
                  !selectedPages.includes(pageNo) && "hover:text-cyan-300"
                } transition-all duration-200`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </label>
        </span>
      </div>
      {pageNo === 0 && <hr />}
    </>
  );
};

export default SelectPage;
