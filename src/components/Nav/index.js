import {useState, useEffect, useInsertionEffect} from 'react';
import React from 'react'


function Nav(props) {
  return (
    <nav class="top-nav">
      <ul>
        <li>
          <a href="#about"> About Me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;