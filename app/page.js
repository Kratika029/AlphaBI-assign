'use client'
import Image from 'next/image'
import styles from '../public/main.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Headd from './Header';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GifCard from './Gifcard.js';
import { addToFavorites, getFavorites } from './utils/favorites.js';

import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../app/firebase/config'
import {useRouter} from 'next/navigation';
import { signOut } from 'firebase/auth';




export default function Home (){
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [favoritesList, setFavoritesList] = useState([]);




  const [user] = useAuthState(auth);
  
  const router = useRouter();
  const userSession = sessionStorage.getItem('user');

  if(!user && !userSession) {
    router.push('/sign-up');
  }



  useEffect(() => {
    setFavoritesList(getFavorites());
    console.log('Favorites List:', favoritesList);
    
    if (query.trim() !== '') {
      handleSearch();
    }
  }, [query]);
  useEffect(() => {
    
    setFavoritesList(getFavorites());
  }, []);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          q: query,
          api_key: 'UnCHs7IE0lMum97ENZ4mc1HkIxU7vBbq',
        },
      });
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching Giphy data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToFavorites = (gif) => {
    
    addToFavorites(gif);
  setFavoritesList([...getFavorites()]);
  
  };
  
  return (
    <div>
      <Headd/>
      <div className="row">
        <div className="col-12">
        <div className = {styles.search}>
        <input className = {styles.searchBar}
          type="text"
          placeholder="Search for GIFs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className = {styles.btn} onClick={handleSearch}>Search</button>
      </div>
        </div>
        
      </div>
      

      {loading && <p>Loading...</p>}

      <div className="row">
        {gifs.map((gif) => (
          <div className="col-md-4 mb-3" key={gif.id}>
            <GifCard gif={gif} onAddToFavorites={handleAddToFavorites} />
          </div>
        ))}
      </div>

      <div className="favorites mt-5">
        <h2>Favorites</h2>
        <div className="row">
          {favoritesList.map((favorite) => (
            <div className="col-md-4 mb-3" key={favorite.id}>
              <Image
                className="img-fluid"
                src={favorite.images.fixed_height.url}
                alt={favorite.title}
                width={favorite.images.fixed_height.width}
                height={favorite.images.fixed_height.height}
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// export default Home;
