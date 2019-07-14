import config from '../config'

function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Jobs Applied!I14:I1005"
      })
      .then(
        response => {
          const data = response.result.values;
          console.log(data);
          const cars = data.map(car => ({
            year: car[0],
            make: car[1],
            model: car[2]
          })) || [];
          callback({
            cars
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });

}


/**
 * Load the jobs from the spreadsheet
 * Get the right values from it and assign.
 */

// Target data:  'Jobs Applied'!I14:I1005
// export function load(callback) {
//     window.gapi.client.load("sheets", "v4", () => {
//       window.gapi.client.sheets.spreadsheets.values
//         .get({
//           spreadsheetId: config.spreadsheetId,
//           range: "Jobs Applied!I14:I1005"
//         })
//         .then(
//           response => {
//             const data = response.result.values;
//             console.log(data);
//             const cars = data.map(car => ({
//               year: car[0],
//               make: car[1],
//               model: car[2]
//             })) || [];
//             callback({
//               cars
//             });
//           },
//           response => {
//             callback(false, response.result.error);
//           }
//         );
//     });
//   }