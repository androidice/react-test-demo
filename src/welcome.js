var React = require('react');
var ReactDOM = require('react-dom');

function Welcome (props){
  return (<h1>
            Hello, {props.name}
          </h1>
          );
}

const element = <Welcome name="Karen"/>;

setTimeout(function(){
  ReactDOM.render(
    element,
    document.getElementById('welcome')
  );
}, 1000);
