import React, { Component } from "react";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Son Gokū",
          avatar:
            "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2018/05/09/goku2.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe onde o Vegeta está?",
        comments: [
          {
            id: 1,
            author: {
              name: "Vegeta",
              avatar:
                "https://img.quizur.com/f/img5c92d5a6223d86.08054262.jpg?lastEdited=1553126826"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Ash Ketchum",
          avatar:
            "https://d.newsweek.com/en/full/1531271/pokemon-sun-moon-anime-ash-pikachu.jpg?w=1600&h=1200&l=68&t=43&q=88&f=f61ced3b6e87e8cc40b81efb50f1729d"
        },
        date: "04 Jun 2019",
        content: "Pessoal, Dicas para ganhar minha primeira Liga Pokemon !?",
        comments: [
          {
            id: 1,
            author: {
              name: "Lance",
              avatar:
                "https://66.media.tumblr.com/eaf5230225698491bdff37b6ad1c8964/tumblr_pjg36t70V01vbed1so1_400.png"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
            id: 2,
            author: {
              name: "Brock",
              avatar:
                "https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/brock-pokemon-learning-league-4.14.jpg"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="container">
        {this.state.posts.map(post => (
          <div key={post.id} className="card">
            <Post key={post.id} post={post} comments={post.comments} />
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;
