import React, { useEffect, useState } from "react";

const Counterr = () => {
    const [online, setOnline] = useState(false);
  
    useEffect(() => {
      if (online) {
        console.log("Kullanıcı çevrimiçi.");
      } else {
        console.log("Kullanıcı çevrimdışı.");
      }
    }, [online]);
  
    return (
      <div>
        <h1>Page Title Change</h1>
        <p>You clicked {online ? "online" : "offline"}.</p>
        <button onClick={() => setOnline(!online)}>
          Toggle online/offline
        </button>
      </div>
    );
  };
  
  export default Counterr;