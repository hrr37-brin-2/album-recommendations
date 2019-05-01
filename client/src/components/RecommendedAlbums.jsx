import React from 'react';
import { mockAlbumResults } from '../mockData';

class RecommendedAlbums extends React.Component {
  constructor(props) {
    super(props);
    const albumIdFromUrl = window.location.pathname.slice(1);
    this.state = {
      albums: [],
      activeAlbum: null,
      isHovered: false,
      albumId: albumIdFromUrl
    }
    this.enterHandler = this.enterHandler.bind(this);
    this.leaveHandler = this.leaveHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      albums: mockAlbumResults
    })
  }

  enterHandler(albumID) {
    this.setState({ activeAlbum: albumID, isHovered: true });
  }

  leaveHandler() {
    this.setState({ activeAlbum: null, isHovered: false })
  }

  render() {
    const hoverClass = this.state.isHovered ? "not-hovered-on" : "";
    return (
      this.state.albums.map((album => {
        const activeAlbumClass = this.state.isHovered && this.state.activeAlbum === album.id ? "hovered-on" : ""
        return <div key={album.id} className={`album-square ${hoverClass} ${activeAlbumClass}`} onMouseEnter={() => this.enterHandler(album.id)} onMouseLeave={this.leaveHandler} >
          <img className="album-art" src={album.albumArt} />
          <div className="rec-album-info">
            <span className="release-title">{album.albumName}</span>
            <p className="release-artist">by {album.artist}</p>
          </div>
          {this.state.activeAlbum === album.id ? <div className="album-description">{album.description}</div> : null}
        </div>
      })
      )
    )
  }
}

export default RecommendedAlbums;
