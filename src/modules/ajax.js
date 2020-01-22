export let ajax = (url, done) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            done(request.response);
        }
    });

    request.responseType =	"json";
    request.open('GET', url);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send();
}