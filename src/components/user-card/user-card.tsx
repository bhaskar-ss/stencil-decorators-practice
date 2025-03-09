import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'user-card',
  styleUrl: 'user-card.css',
  shadow: true,
})
export class UserCard {

  @Prop() name: string;
  @Prop() email: string;

  render() {
    return (
      <div class="user-card">
        <h2>{this.name}</h2>
        <p>{this.email}</p>
      </div>
    );
  }
}
