
import './App.css';
import React, {useState, useEffect} from 'react';
import Search from "./search/search";
import TableBuild from "./table/table";

let isLoading = false;
const sortOrder = {
  date: null,
  rate: null
}

function App() {
  const [items, setItems] = useState([]);  
  useEffect(() => {
     if (!isLoading) {
      
    isLoading = true;
    fetch ('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users/')
    .then(rspns => rspns.json())
    .then(info =>    
      {
        setItems(info);
      })
     }  
  })

/*   function search(searchString) {
    let userName;
    let email;
     const serachedItems = items.filter((item) => {
        email = item.email.toLowCase()
        username = item.username.toLowCase()
        return username.indexOf(searchString) !== -1 || email.indexOf(searchString) !== -1
     }) 
  }
   */
  
  function sort (type) {
    let field = null;
    if (type === 'date') {
      field = 'registration_date'
      sortOrder.rate = null;
    } else {
      field = 'rating';
      sortOrder.date = null;  
    }
    if (!sortOrder[type]) {
      sortOrder[type] = 'up'
    } else {
      sortOrder[type] = sortOrder[type] === 'up' ? 'down' : 'up';
    }
    items.sort((a,b) => {
      let aDate = new Date(a[field])
      let bDate = new Date(b[field])
      if(aDate > bDate){
        if(sortOrder[type]==='up'){
          return -1
        } else {
          return 1
        }
      }else{
        if(sortOrder[type]==='up'){
          return 1
        }else{
        return -1
      }
    }
      
    })  
    setItems(items.slice());  
  }

  return (
    <div className="App">
      <Search/>
      <TableBuild props = {{itemList: items, sortByDate: sort.bind(null, 'date'), sortByRate: sort.bind(null, 'rate'), sortOrder}}/>
    </div>
  );
}

export default App;
