import React from 'react'
import Heading from "./components/Heading";
import { Provider } from "react-redux";
import store from "./states/store";
import TextField from "./components/TextField";

function App() {
  return (
    <Provider store={store}>
      <Heading />

      <br />

      <TextField />
    </Provider>
  )
}

export default App
