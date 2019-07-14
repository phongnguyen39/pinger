import React, { Component } from 'react';
import config from '../config';
import { load } from '../helpers/spreadsheet';

// componentDidMount = () => {
//     // 1. Load the JavaScript client library.
//     window.gapi.load("client", this.initClient);
//     console.log('componentdidMount success')
// };


// let initClient = () => {
//     // 2. Initialize the JavaScript client library.
//     window.gapi.client
//         .init({
//             apiKey: config.apiKey,
//             // Your API key will be automatically added to the Discovery Document URLs.
//             discoveryDocs: config.discoveryDocs
//         })
//         .then(() => {
//             // 3. Initialize and make the API request.
//             load(this.onLoad);
//         });
// };


// onLoad = (data, error) => {
//     if (data) {
//         console.log(data)
//     }
//     else {
//         console.log(error)
//     }
// }


const jobList = () => {
    return (
        <div>
            <p>Job List is Working</p>
        </div>
    )
}

export default jobList;