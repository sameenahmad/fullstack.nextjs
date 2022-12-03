import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  *::-webkit-scrollbar {
    display: none;
  }
  
  @font-face {
    font-family: "Metropolis";
    src: local("Metropolis"), url("/fonts/Metropolis-Regular.otf") format("truetype");
 };  

  html,
  body {
    box-sizing: border-box;
    background: #ffffff;
    color: #000;
    margin: auto;
    -webkit-tap-highlight-color: transparent;
    outline-style: none;
    max-width: 100vw;
    max-height: 100vh;
    font-size: 20px;
    font-family: "Metropolis";
}

  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-bottom: 0px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* Safari */
  button {
    color : #000;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  input[type=text], input[type=button], input[type=submit] {   
    color : #000;
  }

  input {
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  @media (max-width: 480px) {
    body {
      font-size: 80%;
    }
  }


`