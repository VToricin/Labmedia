import img3 from './images/clean.png'
import img1 from './images/Vectorruun.png'
import img2 from './images/Vectorline.png'
import {useState} from "react";


function Search({handler, resetSearch}) {
  const [value, setValue] = useState('');
  return (
    <div className="Search"> 
        <div className="Search__header"><p>Список пользователей</p></div>  
        <div className="Search__mainField">
            <div className="Search__field">
                <div className="Search__icon" onClick={() => {
                    handler(value);
                }}>
                    <img id='img1' src={img1} alt="search" />
                    <img id='img2' src={img2} alt="search" />
                </div>  
                <input
                    placeholder="Поиск по имени или e-mail"
                    className="Search__request"
                    value={value}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            event.target.value ? handler(event.target.value) : resetSearch();
                        }
                    }}
                    onChange={(event) => {
                        setValue(event.target.value);
                        if (!event.target.value) {
                            resetSearch();
                        }
                        if (event.target.value.length >= 3) {
                            setTimeout(() => {
                                handler(event.target.value);
                            }, 500)
                        }
                    }}
                >
                </input>

            </div>
            <div onClick={() => {
                setValue('');
                resetSearch(true);
            }} className="Search__clean">
                  <img src={img3} alt="img3" />
                  <p>Очистить фильтр</p>
            </div>
        </div>
    </div>
  );
}

export default Search;