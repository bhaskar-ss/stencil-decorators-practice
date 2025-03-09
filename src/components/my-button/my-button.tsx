import { Component, Listen, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {

  @Listen('click')
  onClickHandler() {
    console.log("button component clicked..")
  }
  render() {
    return (
      <button> Click me to listen to click Event </button>
    );
  }
}
