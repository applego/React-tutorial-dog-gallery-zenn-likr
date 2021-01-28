import React, { useState, useEffect, useCallback } from 'react';
import './assets/styles/style.css';
import { Header, ImageList, Search } from './components/index';

import objBreedList from './dataBreedList';

const App = () => {
  // const te = objBreedList.map(v => v.breed);
  // alert(te[0]);

  const [breedList, setBreedList] = useState(objBreedList);
  const [currentBreed, setCurrentBreed] = useState("hound");
  const [imageCnt, setImageCnt] = useState(10);
  const [imageList, setImageList] = useState([]);


  const handleChange = useCallback((event) => {
    setCurrentBreed(event.target.value);
  }, [setCurrentBreed]);

  useEffect(() => {
    (async () => {

      const initImageList = [];

      const initReqUrl = `https://dog.ceo/api/breed/${currentBreed}/images/random/${imageCnt}`;
      console.log(initReqUrl);
      // const ttt = (await fetch(initReqUrl)).json();
      // console.log(ttt);
      await fetch(initReqUrl)
        .then((response) => {
          response.json()
            .then((json) => {
              json.message.forEach(image => {
                initImageList.push(image);
              });
            });
        });

      setImageList(initImageList);
    })();
  }, []);

  return (
    <div>
      <Header header={"from App.jsx"}></Header>
      <div className="main">
        <div>
          <h2>Search↓</h2>
          <Search
            breedList={breedList}
            currentBreed={currentBreed}
            handleChange={handleChange}
          >
          </Search>
        </div>
        <div>
          <h2>ImageList↓</h2>
          <ImageList></ImageList>
        </div>
      </div>
    </div>
  );
}

export default App;
