import React from "react";
import { Link } from "react-router";
  
import Collection from "../components/Collection"  
import Categories from "../components/Categories"  
export default () => (
  <div>
    <h1>Home page</h1>
    <Collection/>
    <Categories/>
    <Link to="/speakers">Speakers</Link>
  </div>
);