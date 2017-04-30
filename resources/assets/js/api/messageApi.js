// http://localhost:8000/message
class MessageApi{

    static getAllMessages(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Accept', 'application/json');
        return fetch(new Request("http://localhost:8000/api/v1/message?api_token="+ user.api_token,{
            credentials: 'include',
            method: 'GET',
            headers: myHeaders,  
        })).then(
            function (response) {
                return response.json();      
        }).catch(function(error){
            return error;
        }
        );
    }

    static pollMessages(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Accept', 'application/json');
        return fetch(new Request("http://localhost:8000/api/v1/message/poll?api_token="+ user.api_token,{
            credentials: 'include',
            method: 'GET',
            headers: myHeaders,  
        })).then(
            function (response) {
                return response.json();      
        }).catch(function(error){
            return error;
        }
        );
    }

    static postMessage(data){
        var json = {
             message: data,
            _token: csrf_token
        };

        var payload = Object.keys(json).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(json[k])
        }).join('&');

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('X-CSRF-TOKEN', csrf_token);
        return fetch(new Request("http://localhost:8000/api/v1/message",{
            method: 'POST',
            headers: myHeaders,  
            credentials: 'include',
            body: JSON.stringify(json)
        })).then(
            function (response) {
                return response.json();      
        }).catch(function(error){
            return error;
        }
        );
    }
}

export default MessageApi;