import { useState,useEffect } from "react";

const useSearch=(data)=>{
    const[query,setQuery]=useState("");
    const[filteredData,setFilteredData]=useState(data);
    useEffect(() => {
        const filtered = data.filter((item) =>
          Object.values(item).some((value) => 
          {
            if (typeof value === 'string') {
              return value.toLowerCase().includes(query.toLowerCase());
            }
            if (typeof value === 'number') {
              return value.toString().toLowerCase().includes(query.toLowerCase());
            }
          })
        );
        setFilteredData(filtered);
        }, [data, query]);
    
        const handleSearch = (newSearch) => {
            setQuery(newSearch);
        };
        return {
            query,
            filteredData,
            handleSearch,
        };
    };

export default useSearch;