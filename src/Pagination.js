const Pagination = (props) => {
    const pageNumbers = [...Array(props.nPages + 1).keys()].slice(1);
    console.log(pageNumbers);
    const goToNextPage = () => {
        props.setCurrentPage(props.currentPage + 1)
    }
    const goToPrevPage = () => {
        props.setCurrentPage(props.currentPage - 1)
    }
  return (
    <>
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className={`page-link ${props.currentPage === 1 ? "disabled" : ""}`} onClick={goToPrevPage}>
              Previous
            </button>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item ${
                props.currentPage === pgNumber ? "active" : ""
              } `}
            >
              <button
                onClick={() => props.setCurrentPage(pgNumber)}
                className="page-link"
              >
                {pgNumber}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className={`page-link ${props.currentPage === props.nPages ? "disabled" : ""}`} onClick={goToNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Pagination;
