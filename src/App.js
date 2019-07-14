import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ping from 'ping.js';
import JobList from './jobsList/jobList';


// TODO:  You were testing out FETCH instead of the Ping.js library.  You were looking at also integrating Google SHeets API to test all of the job links.   Fetch is working, but not returning any useful information. Understand what you want to see 

// https://github.com/alfg/ping.js/blob/master/demo/react-example/ping.js
// https://blog.416serg.me/building-an-app-using-google-sheets-api-react-d69681d22ce1
// https://docs.google.com/spreadsheets/d/1KTArYwDWrn52fnc7B12KvjRb6nmcEaU6gXYehWfsZSo/edit#gid=0

// var url = 'https://docs.google.com/spreadsheets/d/1wf4kqX_HBgIjBEacsI-kOWdJl_YkWW3p1tiEVgZ7nB0/edit#gid=0'



class App extends Component {

  url = 'https://apply.indeed.com/indeedapply/confirmemail/viewjob?iaUid=1dfmpaq5tnhed800&apiToken=aa102235a5ccb18bd3668c0e14aa3ea7e2503cfac2a7a9bf3d6549899e125af4&next=https%3A%2F%2Fwww.indeed.com%2Fviewjob%3Fjk%3Dd5ac84920ff20db6';


  // var p = new Ping(url);

  fetchFromURL = (url) => {
    fetch(url)
      // .then((response) => response.JSON())
      .then(data => console.log(data))
  }
  



  // p.ping(url, function(err, data) {
  //   // Also display error if err is returned.
  //   if (err) {
  //     console.log("error loading resource")

  //     data = data + " " + err;
  //     console.log(response)
  //   }
  // });

  render() {


    return (
      <div className="App">
        <button onClick = {this.fetchFromURL}>PING</button>
        <JobList />

      </div>
    );
  }
}

export default App;
