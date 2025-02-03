import { useLocation, useNavigate, useLoaderData } from "react-router-dom";  

const ComplexPaginationContainer = () => {  
  const { meta } = useLoaderData();  
  const { page, pageCount } = meta.pagination;  

  // Generate an array of pages from 1 to pageCount  
   
  const { search, pathname } = useLocation();  
  const navigate = useNavigate();  

  const handlePageChange = (pageNumber) => {  
    const searchParams = new URLSearchParams(search);  
    searchParams.set("page", pageNumber);  
    navigate(`${pathname}?${searchParams.toString()}`);  
  };  

  const addPageButtons=({pageNumber,activeClass})=>{
return  <button  
key={pageNumber}  
className={`btn btn-xs sm:btn-md join-item ${  
  activeClass  ? "active bg-base-300 border-base-300" : ""  
}`}  
onClick={() => handlePageChange(pageNumber)}  
>  
{pageNumber}  
</button>  
  }

  const renderPageButtons = () => {
    const pageBUttons = [];
    // FIRST BUTTON
    pageBUttons.push(addPageButtons({pageNumber:1,activeClass:page === 1}));
    //Dots
if(page > 2){
    pageBUttons.push(<span key="dots-1" className=" join-item btn btn-xs sm:btn-md">...</span>);
}
    // Active class
    if(page !== 1 &&  page !==pageCount){
        pageBUttons.push(addPageButtons({pageNumber:page,activeClass:true}));
    }

    // dots
    if(page < pageCount - 1){
        pageBUttons.push(<span key="dots-2" className=" join-item btn btn-xs sm:btn-md">...</span>);
    }
    // SECOND BUTTON
    pageBUttons.push(addPageButtons({pageNumber:pageCount,activeClass:page === pageCount}));

    return pageBUttons;
  }

  if (pageCount < 2) return null;  

  return (  
    <div className="mt-16 flex justify-end">  
      <div className="join">  
        <button  
          className="btn btn-xs sm:btn-md join-item"  
          onClick={() => {  
            let prevPage = page - 1;  
            if (prevPage < 1) prevPage = pageCount;  
            handlePageChange(prevPage);  
          }}  
        >  
          Prev  
        </button>  

        {renderPageButtons()}

        <button  
          className="btn btn-xs sm:btn-md join-item"  
          onClick={() => {  
            let nextPage = page + 1;  
            if (nextPage > pageCount) nextPage = 1;  
            handlePageChange(nextPage);  
          }}  
        >  
          Next  
        </button>  
      </div>  
    </div>  
  );  
};  

export default ComplexPaginationContainer;