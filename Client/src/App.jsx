import React from "react";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <div className="bg-img min-h-screen flex items-center justify-center bg-cover bg-center">
        <div style={{ scale: 1.1 }}>
          <Signup />
        </div>{" "}
      </div>
    </>
  );
}

export default App;
