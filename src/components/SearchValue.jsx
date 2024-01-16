import React, { useState } from 'react'

const SearchValue = () => {
  const names = ['Priyank', 'Mayank', 'Divyanka', 'Nikhil', 'Akshata', 'Malay'];
  const [list, setList] = useState(names);
  const [searchName, setSearchname] = useState('');

  const searchResult = list.filter((lists) =>
    lists.toLowerCase().includes(searchName)
  );

  return (
    <div>
      <input className='search-input' type='text' placeholder='Search Name...'
      onChange={(e) => setSearchname(e.target.value)}
      value={searchName}
      />

      <ul className='search-ul'>
        {
          searchResult.map((lists) => (
            <li key={lists}>{lists}</li> 
          ))
        }
      </ul>
    </div>
  )
}

export default SearchValue;