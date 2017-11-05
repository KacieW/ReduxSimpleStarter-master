import _ from 'lodash';
import React from 'react';
/* import react library, assign to React. This is the core library, is to work with
Components. It creates and manage the Components. Only with this library, it doesnt
know how to put things in the DOM.*/

import ReactDOM from 'react-dom';
//this is the library to interact with DOM.

import SearchBar from './components/search_bar';
//it import the SeachBar component exported from the search_bar.js file

import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//api key for youtube
const API_KEY = 'AIzaSyC2A3x9kdiMF3xJmBu7eQrRHVaSK9pbFfk';


/*Create a component named App, it is a class actually, not a instance of the component.
We need to create a instance of this class, which looks like this <App />.
We should always make one Component per file*/
class App extends React.Component{
  constructor(props){
  	super(props);

  	this.state = {
      videos : [],
      selectedVideo: null
    };

    // YTSearch({key: API_KEY, term : '晓说'}, (videos) =>{
    //   this.setState({
    //     videos : videos,
    //     selectedVideo : videos[0]
    //   });when the data come back, it set the fisrt video to the selectedVideo, it casue the render method run again because it is a setState change.
    // }); it will take some time to complete
    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term : term}, (videos) =>{
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });

  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    //the debounce take the function and returns a new function that can only be called once every 300 ms, it can prevent the searchbar to refresh everytime we type letters in the input bar.
    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos}/>
      </div>
    );
  }
  //onVideoSelect is a property that pass a callback function, it update the App state with a new video.
}

/*Take the compont's generated HTML and put it in the DOM
.render(instance of the compenent, reference of exist DOM node)
the second argument means where to put the compenent on the page.*/
ReactDOM.render(<App />, document.querySelector('.container'));
