import React from "react";
import "./App.css";
import CardList from "../cardList/cardList";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/" },
  { label: "Details", path: "/:id" },
];

function App() {
  return (
    <div>
      <h1>Pokeapi React</h1>
      <CardList></CardList>
    </div>
  );
}

export default App;
