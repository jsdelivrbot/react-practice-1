import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDcveZsPS4SYUCiLP9xEINnLbT8BorRthk';

// Create a new componet. This componet should produce
// some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfborads'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

//  Take this component's generated HTML and put it
//  on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
