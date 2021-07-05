import React, { useEffect, useState } from 'react';
import { Page, Breadcrumbs, useToasts } from '@geist-ui/react';
import Head from 'next/head';
import SearchResult from '../components/SearchResult';

const RecommendMe = () => {
  const [, setToast] = useToasts();
  const [userRecPlaylist, setUserRecPlaylist] = useState(new Set());
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getUserRecPlaylist = async () => {
    const res = await fetch(`/api/spotify/user-rec-playlist`);
    const json = await res.json();
    setUserRecPlaylist(new Set(json.data));
  };
  const searchMusic = async () => {
    if (searchInput.length > 0) {
      const res = await fetch(`/api/spotify/tracks?q=${encodeURIComponent(searchInput)}`);
      const json = await res.json();
      setSearchResults(json.tracks.items);
    } else {
      setSearchResults([]);
    }
  };
  const addSongToPlaylist = (songId) => {
    fetch(`/api/spotify/user-rec-playlist`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: songId })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          let userRecPlaylistNew = new Set([...userRecPlaylist]);
          userRecPlaylistNew.add(songId);
          setUserRecPlaylist(userRecPlaylistNew);
          setToast({ text: data.message });
        } else {
          setToast({ text: data.message, type: 'error' });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setToast({ text: 'Recommend failed :(' });
      });
  };

  useEffect(() => searchMusic(), [searchInput]);
  useEffect(() => getUserRecPlaylist(), []);

  return (
    <div style={{ backgroundColor: '#1DB954' }}>
      <Head>
        <title>Rishabh Tatia | Recommend Music</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta name="description" content="Rishabh Tatia's music recommender. Search and recommend me a song and I'll listen to it." />
        <meta name="thumbnail" content="https://tatiaris.com/img/thumbnail.png" />
        <meta name="author" content="Rishabh Tatia" />
        <meta property="og:title" content={`Rishabh Tatia | Recommend Music`} />
        <meta property="og:site_name" content="Rishabh Tatia" />
        <meta property="og:url" content="tatiaris.com" />
        <meta property="og:description" content="Rishabh Tatia's music recommender. Search and recommend me a song and I'll listen to it." />
        <meta property="og:image" content="https://tatiaris.com/img/thumbnail.png" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@tatia_ris" />
        <meta name="twitter:title" content={`Rishabh Tatia | Recommend Music`} />
        <meta name="twitter:description" content="Rishabh Tatia's music recommender. Search and recommend me a song and I'll listen to it." />
        <meta name="twitter:image" content="https://tatiaris.com/img/thumbnail.png" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Page id="project-container">
        <Breadcrumbs>
          <Breadcrumbs.Item href="/">
            <span style={{ color: '#333' }}>tatiaris</span>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <span style={{ color: '#333' }}>recommend-me</span>
          </Breadcrumbs.Item>
        </Breadcrumbs>
        <br />
        <h3>Recommend me some music!</h3>
        <div style={{ display: 'flex' }} className={`${searchResults.length > 0 && 'results-shown'}`}>
          <input onChange={(e) => setSearchInput(e.target.value)} className="song-search-input" placeholder="Search for any song, artist, or album"></input>
        </div>
        <div className="search-results-container">
          {searchResults.map((t, i) => (
            <SearchResult key={`result-${i}`} result={t} recommended={userRecPlaylist.has(t.id)} addSongToPlaylist={addSongToPlaylist} />
          ))}
        </div>
        <br />
        <div>
          <a href="https://open.spotify.com/playlist/7qF7ucb45acJ28Z6Qa47Hp" className="spotify-btn" target="_blank" rel="noopener noreferrer">
            See what I&apos;m listening to
          </a>
        </div>
      </Page>
    </div>
  );
};

export default RecommendMe;
