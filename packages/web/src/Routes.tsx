import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import StatementPage from "./pages/StatementPage";
import ProcessesPage from "./pages/ProcessesPage";
import ImagesPage from "./pages/ImagesPage";
import BioAndContactPage from "./pages/BioAndContactPage";
import styled from "styled-components";

const Routes: React.FC = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/store" component={StorePage} />
    <Route path="/statement" component={StatementPage} />
    <Route path="/processes" component={ProcessesPage} />
    <Route path="/images" component={ImagesPage} />
    <Route path="/bio-and-contact" component={BioAndContactPage} />
  </>
);

export default Routes;
