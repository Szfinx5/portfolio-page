import { Container, Grid } from "@mui/material";
import Education from "../Education/Education";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import Experience from "../Experience/Experience";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container className={"top-60"}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>

        <Grid item xs>
          <BrowserRouter>
            <Header />
            <div className="main-content container-shadow">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </div>
          </BrowserRouter>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
