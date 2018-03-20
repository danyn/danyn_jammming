
//if auth has responded it contains the token and expires

let accessToken;

//auth endpoint vars
const authBase = 'https://accounts.spotify.com/authorize?' ;
const clientId = 'client_id=f6d4f2ed4b3944ca9db3761d193c1813';
const redirectUri = '&redirect_uri=http:%2F%2Flocalhost:3000/';
const scope = '&scope=playlist-modify-public';
const token = '&response_type=token';
// optionally use to validate further from app
// const state = '&state=123';

//full auth request endpoint
const auth = authBase + clientId + redirectUri + scope + token;

export const Spotify = {

 getAccessToken: ()=> {
   //maintain some state to store the key
   // accessToken = sessionStorage.getItem("accessToken");
   // expiresIn = sessionStorage.getItem("expiresIn");
    //get information from the url in order to assess the state of the auth
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

   fetch(url, header).then(function(response){
     return response.json()
      }).then(function(theJson){
     console.log(theJson);
   });
 }//search

}//Spotify
