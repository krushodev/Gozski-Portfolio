import './HorizontalContent.css';
import { useState, useEffect } from 'react';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import Popup from 'reactjs-popup';

export const HorizontalContent = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imported, setImported] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await import(`../../assets/videos/${item.tagname}.mp4`);
      setImported(data.default);
    }

    load()
  }, [item.tagname])

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`horizontal-content ${item.tagname}`}>
      <video src={imported} autoPlay loop muted playsInline onClick={handleClick}></video>
      {
        item.title &&

        <div className='horizontal-content-info'>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <p>{item.copyright} {item.by}</p>
        </div>
      }
      <Popup
        open={isOpen}
        closeOnDocumentClick={false}
        onClose={() => setIsOpen(!isOpen)}
        modal
        nested
      >
        {close => (
          <div className="overlay" onClick={close}>
            <VideoPlayer nameId="video-player-horizontal" videoId={item.content}/>
            <button className="close" onClick={close}>
              &times;
            </button>
          </div>
        )}
      </Popup>
    </div>
  );
}
