'use strict';

const inputSom = document.querySelector('#som'),
    inputUsd = document.querySelector('#usd');

inputSom.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); //method, url, async, login, password
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();
 
    request.addEventListener('load', () => {
        if(request.status === 200){
            //console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputSom.value / data.current.usd).toFixed(2);
        }else{
            inputUsd.value = 'что-то пошло не так';
        }
    });

    //status
    //statusText
    //response
    //ready
})