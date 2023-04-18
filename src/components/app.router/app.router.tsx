import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { MenuOption } from "../app/App";

const CardList = lazy(() => import("../cardList/cardList"));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route
          path={menuOptions[0].path}
          element={<CardList></CardList>}
        ></Route>
        <Route
          path={menuOptions[1].path}
          element={<CardList></CardList>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
