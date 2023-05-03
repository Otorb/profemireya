import React, { useEffect } from "react";
import { app } from "../../fb";
import Users from "./User";
import Logueo from "./Login";

 
function CLase() {
    const [user, setUsuario] = React.useState(null);
    useEffect(() => {
      app.auth().onAuthStateChanged((usuarioFirebase) => {
        setUsuario(usuarioFirebase);
      });
    }, []);

  return <>{user ? <Users/> : <Logueo setUsuario={setUsuario} />}</>
  
}

export default CLase
