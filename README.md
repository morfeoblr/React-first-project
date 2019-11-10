This is test React project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To run the project and get it loaded locally at 3000 port please execute the command "yarn start".

At that moment it has:
1. Navigation menu. Search field there has missing functionality.
2. The main logic is available at the Search page which has:
  - View options with 'Reset selected' button to reset applied search settings, information about returned content (number of items returned and pagination) OR shows an error if it occurs after fetching data from API.
  - Filters with only search field to search movies by their title.
  - Search results container which shows returned items for selected page. Each item displays some information about itself and has 'Ger mode details' button to fetch more specific data about itself from API.
3. Used API: http://www.omdbapi.com.
  - All requests are performed with hardcoded key which is necessary for the API.
4. It's a test project so has a number of not needed for production things, e.g.:
  - Logging actions where they are dispatched to update Redux store.
  - Delays for fetching.
5. Other notes:
  - Styling for a spinner was taken from: https://tobiasahlin.com/spinkit/.
  - Popup component was from npm module "reactjs-popup".

To do tasks:
1. Add Jest tests.
2. Apply SASS.
3. Re-design the project to get it nicer. Current CSS file is a bit messy.
4. Do some fixes:
  - Add some delay for data fetching when users types into search field. Allow them to finish typing. E.g., fetch when no new smybols are appearing for 0.5 second.
  - Pagination - add the same as above with ability to clear the value. At that moment an user has to set only allowed value (valid page number).
  - When multiple search requested were done ignore the olderst ones. E.g., at that moment the app sends multiple requests on each types symbol and it's possible that data not from the latest response will be rendered.