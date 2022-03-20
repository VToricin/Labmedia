import img3 from './images/clean.png'
import img1 from './images/Vectorruun.png'
import img2 from './images/Vectorline.png'


function search() {
  return (
    <div className="Search"> 
        <div className="Search__header"><p>Список пользователей</p></div>  
        <div className="Search__mainField">
            <div className="Search__field">
                <div className="Search__icon">
                    <img id='img1' src={img1} alt="search" />
                    <img id='img2' src={img2} alt="search" />
                </div>  
                <input placeholder="Поиск по имени или e-mail" className="Search__request">
 
                </input>

            </div>
            <div className="Search__clean">
                  <img src={img3} alt="img3" />
                  <p>Очистить фильтр</p>
            </div>
        </div>
    </div>
  );
}

export default search;
