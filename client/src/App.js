import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import{ Route} from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}/>
      <Route path="/movies/:dataID"  render={props => <Movie {...props} addToSavedList={props.addToSavedList}/>}/>
    </div>
    
  );
};

export default App;
