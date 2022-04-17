import React, { useState, useMemo} from 'react';
import Select from "react-select";
import countryList from "react-select-country-list";
import "./App.css";

function App() {

  const [value, setValue] = useState("")

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value)
  };

  return (
      <Select id="country" options={options} value={value} onChange={changeHandler}/>
      // <div>
      // hello
      // </div>
  );

}

export default App;
