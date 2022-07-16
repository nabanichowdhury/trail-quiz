import React from "react";
import { Link } from "react-router-dom";
import NavItems from "../assets/ideas.png";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={NavItems} width="80px" height="80px" alt="" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link font-weight-bold" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <Link to="/signin" class="btn  mr-4" type="submit">
            Sign In
          </Link>
          <button class="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
