import React from "react";
import { Link } from "react-router";
  
import Collection from "../components/Collection"  
export default () => (
  <div>
    <h1>Home page</h1>
    <Collection/>
    <Link to="/speakers">Speakers</Link>
  </div>
);