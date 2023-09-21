import React, { useState } from 'react'
import NavBar from "../NavBar/NavBar"
import Hero from "../Hero/Hero"
import Menu from '../Menu/Menu'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function LongPoems() {
    const [like, setLike] = useState(false);

    const liked = () => {
        setLike(true)
    }

    const unLiked =() => {
        setLike(false)
    }
  return (
    <div>
        <NavBar />
        <Hero />
        <Menu />
        <div style={{padding: "10px 60px"}}>
            <h2 style={{textAlign: "center", margin: "0px"}}>Long Poetries</h2>    
            <div className='cardsContainer'>
                <div className='card'>
                    <p>Meri baaho ko apni zaroorat bana do,<br />Mere sath lamho ko mohabbat bana do,<br />Mere ghar me aao or nihaaro khudko,<br />In kaanch ke tukdo ko khoobsoorat bana do.</p>
                    <footer>
                        <p style={{margin: "0px 0px 5px 0px"}} className='cursiveText'>{`-Tanzeel(تنزیل)`}</p>
                        <div>
                            {like ? <FavoriteIcon onClick={unLiked} style={{cursor: "pointer"}}></FavoriteIcon>:<FavoriteBorderIcon onClick={liked} style={{cursor: "pointer"}}></FavoriteBorderIcon>}   
                        </div>
                    </footer>
                </div>
            </div>
            <div className='buttonContainer'>
                <button className='showMoreButton'>Show More</button>
            </div>
        </div>
    </div>
  )
}

export default LongPoems