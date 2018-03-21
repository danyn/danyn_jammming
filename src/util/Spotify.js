import {ClientId} from '../private/Info';
//if auth has responded it contains the token and expires_in information

let accessToken;

//auth endpoint vars
const authBase = 'https://accounts.spotify.com/authorize?' ;
// const clientId = 'client_id=f6d4f2ed4b3944ca9db3761d193c1813';
const clientId = ClientId;
const redirectUri = '&redirect_uri=http:%2F%2Flocalhost:3000/';
const scope = '&scope=playlist-modify-public';
const token = '&response_type=token';
// optionally use to validate further from app
// const state = '&state=123';

//full auth request endpoint
const auth = authBase + clientId + redirectUri + scope + token;


// helper function

function composeTracks (tracks) {
  //return an array of objects with the right data keys for the app
 // return tracks;
  return tracks.map(track => {
   return  {
      album: track.album.name,
      artist: track.artists[0].name,
      name: track.name,
      id:track.id,
      uri: track.uri
    }//data type
  });//map()
}//composeTracks

function fetchEndpoint(url, header){

  return fetch(url, header).then(response => {
           if(response.ok){
           return response.json()
         }//if
           throw new Error('request failed.');
         }, networkError => {
           console.log(networkError.message);
         }).then(jsonResponse => {
              return jsonResponse;
           });

}//fetchEndpoint


export const Spotify = {

 getAccessToken: ()=> {

    let authResponded = window.location.href;
    //match returns an array or null if not found
    let setAccessToken = authResponded.match(/access_token=([^&]*)/);
    let setExpiresIn = authResponded.match(/expires_in=([^&]*)/);

    if(accessToken){
      //the access token has been gleaned from the URL
      return accessToken;
    }else if(setAccessToken && setExpiresIn){
      //Get the access token from the URL
      // match returns an array so get the first elem and return date after the = sign
      setAccessToken = setAccessToken[0];
      accessToken = setAccessToken.substring(setAccessToken.indexOf('=') + 1);

      setExpiresIn=setExpiresIn[0];
      let expiresIn = setExpiresIn.substring(setExpiresIn.indexOf('=') + 1);

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;

    }else{
      //Go to Spotify and ask the user to agress which redirects back with infos in the URL
       window.location.replace(auth);

    }

 },//getAccessToken

 search : (term) => {

   const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
   const header = {
                    headers: {Authorization: `Bearer ${accessToken}`}
                  };

      return fetchEndpoint(url, header).then(jsonResponse => composeTracks(jsonResponse.tracks.items));

 },//search

 savePlaylist: (name, URIs) => {
   if(!name || !URIs){
     return;
   }
   let userID;
   let url = 'https://api.spotify.com/v1/me'
   let header = {
                    headers: {Authorization: `Bearer ${accessToken}`}
                  };
  //get ther user id
  fetchEndpoint(url, header).then(jsonResponse => {
    userID = jsonResponse.id;
    url = `https://api.spotify.com/v1/users/${userID}/playlists`;
    header = {
              method: 'post',
              headers:{
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name:name})
            };
    fetchEndpoint(url, header).then(jsonResponse => {
      let playlistID = jsonResponse.id;
      url = `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`;
      header = {
                method: 'post',
                headers:{
                  Authorization: `Bearer ${accessToken}`,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({uris:URIs})
              };
      fetchEndpoint(url, header).then(jsonResponse => console.log(jsonResponse))
    })
  })
 }//savePlaylist
}//Spotify
