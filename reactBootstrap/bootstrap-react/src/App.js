import React, { useState } from "react";

const App = () => {
  return (
    <div className="App">
      const [alert,setAlert] = useState(false)
      <div className="container">
        <form>
          <label>Name:</label>
          <input type="text" className="form-control" />
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default App;
