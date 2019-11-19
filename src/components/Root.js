import React, { Component } from "react";

import Facebook from "../assets/facebook.png";

import PostList from "./PostList";

class Root extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <img src={Facebook} width="200" />
          <ul className="ul-perfil">
            <li className="li-perfil">Meu Perfil</li>
            <li>
              <div>
                <img
                  className="img-perfil"
                  src="http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
        <PostList />
      </div>
    );
  }
}

export default Root;
