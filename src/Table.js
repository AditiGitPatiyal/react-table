import './Table.css'
import {useEffect,useState} from 'react'
import useSearch from './useSearch';


const Table=(props)=>{
    // const [data,setData]=useState([]);
    const data=props.data;
    const[heading,setHeading]=useState([]);
    const {  query, filteredData, handleSearch } = useSearch(data);


    const sethead=()=>{
        data.map((item)=>{
            const data_key = Object.keys(item);
            setHeading(data_key);
        })
    }
    useEffect(()=>{
        // setData(props.data);
        sethead(); 
    },[data])
    
    return(
        <> 
        <div className='container'>
            <form className="d-flex m-5">
                <input className="form-control me-2" type="search" placeholder="Search" value={query} onChange={(e) => handleSearch(e.target.value)} />
            </form>     
            <table className='table table-striped'>  
                <thead>
                    <tr>
                        {
                            heading.map((head, id) =>{ 
                            return(
                                <th key={id} width="100px">
                                    {head}
                                </th>
                            )
                            })
                        }  
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, idx) => (
                        <tr key={idx}>
                            {heading.map((head, id) => {
                                return(
                                    <td key={id}>{typeof item[head] === 'object' ? JSON.stringify(item[head]) : item[head]}</td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>  
            </table>
        </div> 
          
        </>
    );
}
export default Table