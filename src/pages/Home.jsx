import Card from "../components/Card";

import { Component } from "react";

export default class Home extends Component {
  state = {
    count: 0,
    frutas: ["maça", "pera", "uva", "abacaxi"],
  };

  componentDidMount() {
    document.title = `sua contagem é ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `sua contagem é ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <p>sua contagem é {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Incrementar
        </button>

        <ul>
          {this.state.frutas.map((fruta, index) => (
            <Card title={fruta} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}
