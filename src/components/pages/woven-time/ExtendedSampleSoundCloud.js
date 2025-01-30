function ExtendedSampleSoundCloud(props) {
  
    return (
      <>
        <iframe 
          width="100%" 
          height="350" 
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1499846797&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div style={{
          fontSize: '10px', 
          color: '#cccccc',
          lineBreak: 'anywhere',
          wordBreak: 'normal',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis', 
          fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
          fontWeight: 100,
      }}>
          <a 
              href="https://soundcloud.com/caitlin-cowen-1" 
              title="Caitlin Cowen" 
              target="_blank" 
              style={{color: "#cccccc", textDecoration: 'none'}}
          >
              Caitlin Cowen
          </a>
          <a 
              href="https://soundcloud.com/caitlin-cowen-1/sets/woven-time-m32-26-samples-extended" 
              title="Woven Time, m32-26 samples extended" 
              target="_blank" 
              style={{color: "#cccccc", textDecoration: 'none'}}
          >
              Woven Time, m32-26 samples extended
          </a>
      </div>
    </>

    );
  }

export default ExtendedSampleSoundCloud;