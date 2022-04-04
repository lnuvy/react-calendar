import React, { useState } from "react";
import Header from "./components/Header";
import { Grid } from "./elements";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <>
      <Grid padding="30px">
        <Header />
      </Grid>
      <Grid>
        <Calendar />
      </Grid>
    </>
  );
}

export default App;
