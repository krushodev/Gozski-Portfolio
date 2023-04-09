import './VerticalContent.css';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';

export const VerticalContent = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`vertical-content ${item.tagname}`}>
      <div className='vertical-content-info'>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p><span>&#62;</span>{item.copyright}</p>
        <p><span>&#62;</span>{item.by}</p>
      </div>
      <div>
        <video src={item.preview} autoPlay muted playsInline loop
         onClick={handleClick}></video>
      </div>
      <Popup
        open={isOpen}
        closeOnDocumentClick={false}
        onClose={() => setIsOpen(!isOpen)}
        modal
        nested
      >
        {close => (
          <div className="overlay" onClick={close}>
            <VideoPlayer nameId="video-player-vertical" videoId={item.content}/>
            <button className="close" onClick={close}>
              &times;
            </button>
          </div>
        )}
      </Popup>
    </div>
  );
}
