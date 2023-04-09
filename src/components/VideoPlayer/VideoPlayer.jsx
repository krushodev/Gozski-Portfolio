import { useEffect, useRef } from 'react';
import VimeoPlayer from '@vimeo/player';

export const VideoPlayer = ({ videoId, nameId }) => {
  const vimeoPlayerRef = useRef(null);

  useEffect(() => {

    const player = new VimeoPlayer(vimeoPlayerRef.current, {
      id: videoId,
      controls: true,
      width: "1400px",
      height: "800px"
    });

    return () => {
      player.unload();
    };
  }, [videoId]);

  return <div id={nameId} ref={vimeoPlayerRef}></div>;
}
