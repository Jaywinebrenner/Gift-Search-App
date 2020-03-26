import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }


// THE AXIOS METHOD TO MAKE AN API CALL - INSTALL AXIOS, IMPORT AXIOS
  componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=HsztyzWl2xSDhQj6OiDJT1vvFPg0Nqcw')
    .then( response => {
      this.setState({
        gifs: response.data.data
      })
    })
    .catch( error => {

      console.log("error fetaching and parsing data", error);
    })
    .finally(function () {

    });
  }


  // THE FETCH METHOD TO MAKE API CALL
  //   componentDidMount() {
  //     fetch('http://api.giphy.com/v1/gifs/trending?api_key=HsztyzWl2xSDhQj6OiDJT1vvFPg0Nqcw')
  //     .then(response => response.json())
  //     .then(responseData => {
  //       this.setState({ gifs: responseData.data})
  //     })
  //     .catch(error => {
  //       console.log("Error fetching and parsing data", error);
  //     });
  //   }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}
