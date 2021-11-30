import React from 'react'

export default function Greetings(props) {
    let greeting;
  switch (props.lang) {
    case "de": greeting = "Hallo";
      break;
    case "fr": greeting = "Bonjour";
      break;
    case "ar": greeting = "Salam";
      break;
    case "es": greeting = "Hola";
      break;
    default: greeting = "Hi";
  }

    return (
        <div>
            <p className="Greeting">{greeting} {props.children}</p>
        </div>
    )
}
