import { Component, Event, h, Listen } from '@stencil/core';
import { EventEmitter } from 'stream';

@Component({
  tag: 'my-submit-button',
  styleUrl: 'my-submit-button.css',
  shadow: true,
})
export class MySubmitButton {

  @Event() submitButton: EventEmitter<any>
  handleClick(){
    this.submitButton.emit({});
  }

  // @Listen('submitButton')
  // handleSubmitButton(details: {}) {
  //   console.log("SubmitButton Event is handled...", details);
  // }

  render() {
    return (
     <button onClick={this.handleClick.bind(this)}>Submit</button>
    );
  }
}
