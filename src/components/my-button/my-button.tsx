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

  async retriveCount(): Promise<void> {
    const counterElement = document.querySelector('user-card');
    const count = await counterElement.getCount();
    console.log("counter value is : ", count);
  }

  componentWillLoad(){
    console.log("componentWillLoad is executed...")
  }

  componentDidLoad(){
    console.log("componentDidLoad is executed...")
  }

  componentWillUpdate(){
    console.log("componentWillUpdate is executed...")
  }

  componentDidUpdate(){
    console.log("componentDidUpdate is executed...")
  }

  render() {
    return (
      <>
        <button onClick={this.retriveCount}> Click me to listen to click Event </button>
        <my-submit-button></my-submit-button>
      </>
    );
  }
}
