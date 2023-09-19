import "./Table.css";
import { useEffect, useState } from "react";
import useSearch from "./useSearch";
import Pagination from "./Pagination";

const Table = (props) => {
  const data = props.data;
  const [heading, setHeading] = useState([]);
  const { query, filteredData, handleSearch } = useSearch(data);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage,setrecordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(filteredData.length / recordsPerPage);

  const sethead = () => {
    data.map((item) => {
      const data_key = Object.keys(item);
      setHeading(data_key);
    });
  };
  useEffect(() => {
    sethead();
  }, [data]);
  const handleSortAsc = (column) => {
      setSortColumn(column);
      setSortDirection('asc');
  };
  const handleSortDes = (column) => {
      setSortColumn(column);
      setSortDirection('des');
  };

  return (
    <>
      <div className="container">
        <div className="box my-5 d-flex justify-content-between">
            <form>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                style={{width:"500px"}}
            />
            </form>
            <div className="d-flex align-items-center" >
                <h6 className="me-2">Records Per Page</h6>
                <select className="form-select" onChange={(e)=>setrecordsPerPage(e.target.value)} style={{width:"70px"}} >
                    <option value="5" selected="">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              {heading.map((head, id) => {
                return (
                  <th key={id} width="15%" >
                    <div className="d-flex">{head}
                        <span className={`ms-1  ${heading[id] === sortColumn && sortDirection==='asc' ? 'icon-selected' : ''}`} onClick={() => handleSortAsc(head)}>▲</span>
                        <span className={`ms-1  ${heading[id] === sortColumn && sortDirection==='des' ? 'icon-selected' : ''}`} onClick={() => handleSortDes(head)}>▼</span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {filteredData
              .sort((a, b) => {
                if (sortColumn) {
                  if (typeof a[sortColumn] === "string") {
                    return sortDirection === "asc"
                      ? a[sortColumn].localeCompare(b[sortColumn])
                      : b[sortColumn].localeCompare(a[sortColumn]);
                  } else if (typeof a[sortColumn] === "number") {
                    return sortDirection === "asc"
                      ? a[sortColumn] - b[sortColumn]
                      : b[sortColumn] - a[sortColumn];
                  }
                }
                return 0;
              }).slice(indexOfFirstRecord,indexOfLastRecord)
              .map((item, idx) => (
                <tr key={idx}>
                  {heading.map((head, id) => {
                    return (
                      <td key={id} className="text-break">
                        {typeof item[head] === "object"
                          ? JSON.stringify(item[head])
                          : item[head]}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};
export default Table;
