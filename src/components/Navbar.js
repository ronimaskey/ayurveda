import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {ButtonContainer} from './Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
          <span className="mr-2">
          <span className="mr-2">
            <FontAwesomeIcon icon={faShoppingCart} /> </span>
            Add to cart
            </span>
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}