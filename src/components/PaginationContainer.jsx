import { useLocation, useNavigate, useLoaderData } from "react-router-dom";
const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const {search ,pathname} = useLocation();
  const navigate=useNavigate();
  const handlePageChange = (pageNumber) => {
    //creating URLSearchParams object.
    const searchParams =new URLSearchParams(search);
    //updating the page query parameter.
    searchParams.set("page",pageNumber);
    //navigate to the new URL.
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  if (pageCount < 1) return null;
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage =page -1;
            if(prevPage < 1) prevPage =pageCount;
            handlePageChange(prevPage)}}
        >
          prev
        </button>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`btn btn-xs sm:btn-md join-item ${
              pageNumber === page ? "active bg-base-300 border-base-300" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage =page +1;
            if(nextPage > pageCount) nextPage =1;
            handlePageChange(nextPage)}}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
