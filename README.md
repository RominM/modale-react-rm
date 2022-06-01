# modale-react-rm

> modale react library by Romin Manogil
[![NPM](https://img.shields.io/npm/v/modal-react.svg)](https://www.npmjs.com/package/modal-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i modale-react-rm
```

## Example

[![Modale](./src/assets/screen-modale-example.PNG "Modale")

## Usage

```jsx
import React from 'react'
const App = () => {
   /* setting the modale*/
   const [isOpen, setIsOpen] = useState(false)
   
   const message = 'Modale is open'
   
   return (
      <div>
         <button type='button' onClick={setIsOpen(true)}>Save</button>
         <Modale content={message} trigger={isOpen} setTrigger={setIsOpen} />
      </div>
   )
}
export default App
```

## Controllable Props

<!-- The `<Modale/>` component uses 3 props which are required to make it work at its best. -->

<!-- -  `content` is a **_string_** type. It contains of course the message you want to see in the modale.
-  `trigger` is a **_boolean_** type. It contains the state (opened or closed) of the modale.
-  `setTriggrer` is a **_function_** type. It calls the function which closes the modale. -->

|Prop name    |Description                                  |Default                         |
|-------------|---------------------------------------------|--------------------------------|
|content      |**_string_**                                 |n/a                             |
|trigger      |**_boolean_**                                |`false`                         |
|setTrigger   |**_function_** used **_boolean_** params     |`() => setTrigger(false)`       |

## More info

The GitHub repository containing this library can be found at:
https://github.com/RominM/modale-react-rm/

## License

MIT © [mglStudio](https://github.com/RominM)