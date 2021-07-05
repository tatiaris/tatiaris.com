import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircle, Plus } from '@geist-ui/react-icons';

/**
 * SearchResult component
 */
export const SearchResult = (props) => {
  const result = props.result;

  return (
    <div className="search-result-container">
      <div className="search-result">
        <img width="50" height="50" alt="" src={result.album.images[2].url} />
        <div className="search-result-details-container">
          <div className="track-title-container">
            <a href={result.external_urls.spotify} className="track-title" target="_blank" rel="noopener noreferrer">
              {result.name}
              {result.type == 'album' && '(album)'}
            </a>
          </div>
          <div className="track-artists-container">
            {result.artists.map((a, i) => {
              return i < result.artists.length - 1 ? (
                <span key={`artist-${i}`}>
                  <a href={a.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                    {a.name}
                  </a>
                  ,{' '}
                </span>
              ) : (
                <span key={`artist-${i}`}>
                  <a href={a.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                    {a.name}
                  </a>
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="recommend-btn-container">
        {props.recommended ? (
          <div className={`recommend-btn recommended`}>
            <CheckCircle />
          </div>
        ) : (
          <>
            <button onClick={() => props.addSongToPlaylist(result.id)} className={`recommend-btn large`}>
              Recommend
            </button>
            <button onClick={() => props.addSongToPlaylist(result.id)} className={`recommend-btn small`}>
              <Plus />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  result: PropTypes.any.isRequired,
  recommended: PropTypes.bool.isRequired,
  addSongToPlaylist: PropTypes.any.isRequired
};

export default SearchResult;
