import React, { createContext, useState } from "react";
const RoomContext = createContext();

export const Context = (props) => {
  const [user, setUser] = useState({ email: "" });
  return (
    <RoomContext.Provider value={{ usesr: user, setUser: setUser }}>
      {props.children}
    </RoomContext.Provider>
  );
};
const RoomConsumer = RoomContext.Consumer;
export { RoomConsumer, RoomContext };
