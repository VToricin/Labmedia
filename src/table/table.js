import Paging from "../paging/paging";
import React, {useState} from 'react';
import xone from "./images/xone.png";
import xtwo from "./images/xtwo.png";

function TableBuild({props}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsersList, setAllUsersList] = useState(props.itemList);
  
  function changeCurrentPage(page) {
    setCurrentPage(page);
  }

   const itemsList = allUsersList.map((item, index) =>    
    Math.floor(index / 5) === currentPage
  ) 

  let toPush = [];
  for (let i = 0; i< allUsersList.length; i++) {
      const datai = allUsersList[i];
      let dateFormat = new Date(datai.registration_date);
      let dayi = dateFormat.getDate();
      let monthi = dateFormat.getMonth();
      let yeari = dateFormat.getFullYear();
      dateFormat = `${dayi}.${monthi}.${yeari}`;
      console.log(dateFormat);
       toPush.push(
        <tr className="table__row">
           <td className="userName">{datai.username}</td>
           <td className="email">{datai.email}</td>
           <td className="registrationDate">{dateFormat}</td>
           <td className="rating">{datai.rating}</td>
           <td className="deleteUser" onClick={()=>{setAllUsersList(props.itemList.splice(i,1))}} id={datai.id}><img src={xone} alt="delete"  className="xpic" /><img src={xtwo} alt="delete" className="xpic"/></td>
        </tr>)            
  }
  let dateActiveClass = props.sortOrder.date === null ? 'dateSortButton' : 'dateSortButton activated2';
  let rateActiveClass = props.sortOrder.rate === null ? 'rateSortButton' : 'rateSortButton activated2';

  return (
    <div className="table">
        <div className="table__control">
            <p>Сортировка:</p>
            <p onClick={props.sortByDate} className={dateActiveClass}>Дата регистрации</p>
            <p onClick={props.sortByRate} className={rateActiveClass}>Рейтинг</p>
        </div>
        <div className="table__main">
          <table>
            <thead>
              <tr className="table__header__row">
                <td className="table__header ">Имя пользователя</td>
                <td className="table__header ">E-mail</td>
                <td className="table__header ">Дата регистрации</td>
                <td className="table__header ">Рейтинг</td>
                <td className="table__header "></td>
              </tr>
            </thead>
            {toPush}
          </table>
          <Paging props={{items: props.itemList, currentPage, changeCurrentPage}}/>    
        </div>   
        
    </div>
  );
  
}

export default TableBuild;
