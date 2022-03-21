

function modal(props) {
  

  return (
    <div className="modal">
      <div className="modal__content">
        <p>Вы уверены, что хотите удалить пользователя?</p>
        <div className="buttonContain">
          <button onClick = {()=>{props.yesHandler()}} className="modal__button yesButton">Да</button>
          <button onClick = {()=>{props.noHandler()}} className="modal__button noButton">Нет</button>

        </div>
        </div> 
    </div>
  );
  
}

export default modal;
