import React, { useState } from "react";
import SelectPage from "./component/SelectPage";

const App = () => {
  const numberOfPages = [0, 1, 2, 3, 4]; // we can also use Array.from(4).fill() but i m using this also 0 represents all pages option
  const [selectedPages, setSelectedPages] = useState([]);

  const handleUserClick = (page) => {
    const alreadyExisted = selectedPages.includes(page);
    const remainingEle = selectedPages.filter((selected) => selected !== page);

    // user clicks on all pages & which is not selected firstly
    if (page === 0 && !alreadyExisted) return setSelectedPages(numberOfPages);
    // user clicks on all pages & which is selected
    else if (page === 0 && alreadyExisted) return setSelectedPages([]);
    // user clicks on any other pages & which is selected
    else if (alreadyExisted)
      return setSelectedPages(
        remainingEle[0] === 0 ? remainingEle.slice(1) : remainingEle
      );
    // user selects all other pages accept all pages options
    else if ([...remainingEle, page].length === numberOfPages.length - 1)
      return setSelectedPages(numberOfPages);
    setSelectedPages([...remainingEle, page]);
  };

  const handleSubmit = () => {
    if (selectedPages.length > 0) window.alert("Thanks for your response");
    else window.alert("Please select one");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 12px" }}
        className="min-w-[290px] xsss:min-w-[320px] xss:min-w-[370px] p-5 pt-3 rounded-md"
      >
        <div>
          {numberOfPages.map((page, index) => {
            return (
              <React.Fragment key={index}>
                <SelectPage
                  pageNo={page}
                  selectedPages={selectedPages}
                  handleUserClick={handleUserClick}
                />
              </React.Fragment>
            );
          })}
        </div>
        <hr />
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full mt-5 h-10 rounded-md mx-auto font-light bg-[#FFCE22] hover:bg-[#FFD84D] transition-all duration-200 ease-in-out cursor-none lg:cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default App;
