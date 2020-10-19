import "./home.css";
import datas from "./text.json";

import React, { Component } from "react";
export class Home extends Component {
  state = {
    search: "",
  };

  update = (e) => {
    this.setState({ search: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const search = this.state.search;

    const searching = datas
      .filter((data) => {
        return (
          data.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
          data.job.toLowerCase().indexOf(search.toLowerCase()) >= 0
        );
      })
      .map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <p>{data.job}</p>
            <hr />
          </div>
        );
      });
    return (
      <div>
        <div className="header__center">
          <input type="text" placeholder="Search" onChange={this.update} />
        </div>
        <div>{searching}</div>
      </div>
    );
  }
}

export default Home;
