# Ask Oscar Wilde 🐦‍⬛🥂

A Magic 8 ball style site where Oscar Wilde quotes appear in response to user predicaments. . [Live Site](https://rebeccashoptaw.dev/ask-oscar-wilde/).

<img width="100%"  alt="Ask Oscar interface" src="https://github.com/rebecca-shoptaw/rebecca-shoptaw.github.io/blob/main/public/ask-oscar-wilde.png">

## Background & Mission

The idea behind Ask Oscar Wilde was twofold: first, to bring back some of the fun, simple, carefree energy of the minigames of the early internet -- something I'm trying to do in a number of my projects -- and second, to bring the delightful work of Oscar Wilde to new audiences in a fun and surprising manner.

## Built With

- [![React][React-icon]][React-url]
- [![Vite][Vite-icon]][Vite-url]
- [![Typescript][TS-icon]][TS-url]
- [![HTML][HTML-icon]][HTML-url]
- [![CSS][CSS-icon]][CSS-url]
- [![SASS][SASS-icon]][SASS-url]
- [![Bootstrap][Bootstrap-icon]][Bootstrap-url]

## UI Walkthrough

The current version of the UI is very straightforward -- the user sees an empty autofocused input box where they are encouraged to enter a predicament, and when they click "Submit", a random Oscar Wilde quote is generated as a response.

<img width="60%" alt="Oscar Wilde UI" src="https://github.com/rebecca-shoptaw/ask-oscar-wilde/blob/master/src/assets/UI_1.png">

<img width="60%" alt="Oscar Wilde UI" src="https://github.com/rebecca-shoptaw/ask-oscar-wilde/blob/master/src/assets/UI_1.png">

If the user hits submit again, they will see a fresh quote, but if they try to hit submit without entering a predicament, Oscar will ask "Why won't you tell me what's troubling you??"

If they select "New Predicament", the input will clear, and Oscar will ask what else he can help with.

## Implementation

The implementation is quite straightforward as well -- just about everything happens within the `AskOscar` component, and relies on two simple functions -- `newQuote` and `clearInput` -- and two state values, one to store the user input and one to store the current Ocar Wilde quote.

The `newQuote` function, which fires when the user hits "Submit," checks to determine that there is a user input, then selects a random quote from the `oscarQuotes` array, stored separately:

```
const newQuote = () =>
    input == ""
      ? setQuote("Why won't you tell me what ails you??")
      : setQuote(oscarQuotes[Math.floor(Math.random() * oscarQuotes.length)]);
```

The `clearInput` function, which fires when the user hits "New Predicament," resets the user input and Oscar quote, and refocuses on the input using a `useRef` hook:

```
 const clearInput = () => {
    setInput("");
    setQuote("With what else may I assist you?");
    inputRef.current?.focus();
  };
```

## Next Steps

- [x] Redo styling using SASS
- [ ] Replace remaining Boostrap classes with SASS code
- [ ] Use GSAP to create a fun quote loading and reveal animation
- [ ] Add a test suite via Jest

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Rebecca Shoptaw -
[email](mailto:rebecca@rebeccashoptaw.dev) | [linkedin](https://www.linkedin.com/in/rebeccashoptaw/)

<!-- Links and Icons -->

[React-icon]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Vite-icon]: https://img.shields.io/badge/-Vite-20232A?style=for-the-badge&logo=vite&logoColor=646CFF
[Vite-url]: https://vitejs.dev/
[TS-icon]: https://img.shields.io/badge/-Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6
[TS-url]: https://www.typescriptlang.org/
[HTML-icon]: https://img.shields.io/badge/-HTML5-20232A?style=for-the-badge&logo=html5&logoColor=E34F26
[HTML-url]: https://www.w3schools.com/html/
[CSS-icon]: https://img.shields.io/badge/-CSS3-20232A?style=for-the-badge&logo=css3&logoColor=1572B6
[CSS-url]: https://www.w3schools.com/css/
[SASS-icon]: https://img.shields.io/badge/-Sass-20232A?style=for-the-badge&logo=sass&logoColor=CC6699
[SASS-url]: https://sass-lang.com/
[Bootstrap-icon]: https://img.shields.io/badge/-Bootstrap-20232A?style=for-the-badge&logo=bootstrap&logoColor=7952B3
[Bootstrap-url]: https://getbootstrap.com/
