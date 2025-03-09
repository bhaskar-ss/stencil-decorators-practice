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

  @Listen('submitButton')
  handleSubmitButton(details: {}) {
    console.log("SubmitButton Event is handled...", details);
  }

  render() {
    return (
      <>
        <button> Click me to listen to click Event </button>
        <my-submit-button></my-submit-button>
      </>
    );
  }
}
