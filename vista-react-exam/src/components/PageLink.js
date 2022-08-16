import React, {useEffect, useState} from 'react';


const PageLink = ({postsPerPage, totalPosts, paginate, currentPage}) => {

// initialize page number set in total post
const pageNumbers = [];

for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
  // push a value of rounded total of page into array pageNumbers
  pageNumbers.push(i);
}

const [activeId, setActiveId] = useState();

useEffect(() => {
  console.log(activeId);
}, [])

return (
    <nav>
      <ul className="pagination">{pageNumbers.map(number => {
         return <li key={number} className="page-item">
            <a onClick={(e) => { 
                // get the value of array pageNumbers
                paginate(number); 
                setActiveId(number);
            }} href="#/" className={`${activeId === undefined && number === 1 ? 'active ' : ''} 
                  page-link bg-light text-dark ${activeId === number ? 'active' : ''}`}>{number}</a>
         </li>
        
        })}

      </ul>
    </nav>
  )
}



export default PageLink
