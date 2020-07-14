import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

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
        handlechlist = async (chid) => {
            const response1 = await youtube.get('/search', {
                params: {
                type:'video',
                order:'viewCount',
                channelId:chid
                }
                
            })
        
            
        }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.handlechlist}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} chann={this.handlechlist}/>
                          
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;