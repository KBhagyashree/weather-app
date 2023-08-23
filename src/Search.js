import {useState}  from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from './api';
import './Search.css'
import Welcome from './Welcome';

const Search =  ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const loadOptions = (inputValue) => {
     
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
            )
            .then((response) => {console.log(response); return response.json()})
            .then((response) => {
              return {
                options: response.data.map((city) => {
                  return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                  };
                }),
              };
            });
    }
    
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
      };
    
    return (       
      
      <div className="search-location">
          <AsyncPaginate
          className="search-bar"
          placeholder="Search for city"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          />
          {!search && <Welcome />}
      </div> 
      
     );
}
 
export default Search;
