import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'user-card',
  styleUrl: 'user-card.css',
  shadow: true,
})
export class UserCard {

  @Prop() name: string;
  @Prop() email: string;

  @State() counter: number = 0;

  increment = () => {
    this.counter += 1
  }

  render() {
    return (
      <div class="user-card">
        <h2>{this.name}</h2>
        <p>{this.email}</p>
        <p>{this.counter}</p>
        <button onClick={this.increment}>Click to Increment</button>
      </div>
    );
  }
}
