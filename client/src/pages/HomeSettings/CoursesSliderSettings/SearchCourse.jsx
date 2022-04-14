import React, {useState} from 'react';

import * as styles from './style.module.css';

const SearchCourse =(props)=>{
    const [searchValue,setSearchValue] = useState(null);
    console.log(props.title);
    const handleChange =(e)=>{
        setSearchValue(e.target.value);
    }

    const searchCourse =(event)=> {
        if(event.key === 'Enter'){
            console.log("Search Value");
        }
    }
    return(
        <div className = {styles.SearchCourse}>
            <div className = {styles.searchBar}>
                <div>
                    <p>Search {props.title} For Slider</p>
                </div>
                <div>
                    <input onKeyPress={searchCourse} onChange = {handleChange} placeholder="Search Course"/>
                </div>
            </div>
        </div>
    )
}
export default SearchCourse;