import { Container, Grid } from "@mui/material";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs style={{ backgroundColor: "red" }}>
            <Header />
            <Routes>
              <Route path="/" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
          </Grid>
        </Grid>
      </BrowserRouter>
    </Container>
  );
}

export default App;
