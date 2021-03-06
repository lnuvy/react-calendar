import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Block from "./components/Block";
import { Grid } from "./elements";
import { Add, Calendar } from "./pages";

import "./App.css";
import { useDispatch } from "react-redux";
import { actionCreators as todoActions } from "./redux/modules/todo";

function App() {
  const dispatch = useDispatch();

  dispatch(todoActions.loadTodoFB());

  return (
    <>
      <Grid>
        <Header />
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
