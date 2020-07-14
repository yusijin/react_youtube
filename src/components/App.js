import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { Link } from 'react-router-dom';
class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar,
                type:'channel'
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
               
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                <div className="wide">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                    <div className="ui row">
                        
                        <div className="wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                      
                    </div>
                </div>
            </div>
        )
    }
}

export default App;