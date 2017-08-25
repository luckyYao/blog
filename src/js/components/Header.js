import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../img/logo1.png';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logoBox">
          <img src={ logo } alt="LUCKY YAO"/>
          <h3>LUCKY&nbsp;YAO</h3>
          <p>作者&nbsp;<span className="highLight">要笑娟</span></p>
        </div>
        <nav>
          <ul>
            <li><Link to="/">最新</Link></li>
            <li><Link to="/tags">标签</Link></li>
            <li><Link to="/about">关于</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}