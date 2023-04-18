import React from "react";
import "./App.css";
import { AppRouter } from "../app.router/app.router";

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
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </div>
  );
}

export default App;
