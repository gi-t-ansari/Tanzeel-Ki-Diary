import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import fourLinePoetries from '../../Data/FourLinersData';

function FourLiners() {
  const [likedItems, setLikedItems] = useState([]);
  const [endIndex, setEndIndex] = useState(6);

  const showMore = () => {
    setEndIndex(endIndex + 3);
  };

  const showLess = () => {
    setEndIndex(endIndex - 3);
  };

  const liked = (index) => {
    setLikedItems((prevLikedItems) => [...prevLikedItems, index]);
  };

  const unLiked = (index) => {
    setLikedItems((prevLikedItems) => prevLikedItems.filter((itemIndex) => itemIndex !== index));
  };

  const isLiked = (index) => {
    return likedItems.includes(index);
  };

  return (
    <div>
      <NavBar />
      <Hero />
      <div style={{ padding: '10px 60px' }}>
        <h2 style={{ textAlign: 'center', margin: '0px', textTransform: "uppercase", letterSpacing: "20px", opacity: "0.8" }}>Four Line Poetries</h2>
        <div className="cardsContainer">
          {fourLinePoetries.slice(0, endIndex).map((data, index) => (
            <div className="card" key={index}>
              <p>
                {data.line1}
                <br />
                {data.line2}
                <br />
                {data.line3}
                <br />
                {data.line4}
              </p>
              <footer>
                <p style={{ margin: '0px 0px 5px 0px' }} className="cursiveText">{`-Tanzeel(تنزیل)`}</p>
                <div>
                  {isLiked(index) ? (
                    <FavoriteIcon onClick={() => unLiked(index)} style={{ cursor: 'pointer' }} />
                  ) : (
                    <FavoriteBorderIcon onClick={() => liked(index)} style={{ cursor: 'pointer' }} />
                  )}
                </div>
              </footer>
            </div>
          ))}
        </div>
        <div className="buttonContainer">
          {endIndex >= fourLinePoetries.length ? (
            <></>
          ) : (
            <button className="showMoreButton" onClick={showMore}>
              Show More
            </button>
          )}
          {endIndex === 6 ? (
            <></>
          ) : (
            <button className="showLessButton" onClick={showLess}>
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FourLiners;
