import { Component, Prop, State, h, Watch, Method } from '@stencil/core';

@Component({
  tag: 'user-card',
  styleUrl: 'user-card.css',
  shadow: true,
})
export class UserCard {

  @Prop() name: string;
  @Prop() email: string;

  @State() counter: number = 0;

  @Watch('counter')
  WatchCounterHandler(newValue: boolean, oldValue: boolean){
    console.log("the old value of counter is : ", this.counter);
    console.log("the new value of counter is : ", this.counter);
  }

  @Watch('name')
  WatchNameHandler(newValue: boolean, oldValue: boolean){
    console.log("the old value of name is : ", this.name);
    console.log("the new value of name is : ", this.name);
  }

  @Method()
  async getCount(){
    return this.counter;
  }

  increment = () => {
    this.counter += 1;
    this.name = this.name + this.counter;
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
