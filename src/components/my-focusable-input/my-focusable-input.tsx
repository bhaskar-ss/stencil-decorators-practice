import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'my-focusable-input',
  styleUrl: 'my-focusable-input.css',
  shadow: true,
})
export class MyFocusableInput {

  @Element() HostElement: HTMLElement

  focus(){
    const inputElement = this.HostElement.shadowRoot.querySelector('input');
    inputElement.focus();
  }

  render() {
    return (
      <div>
        <input type='text' />
        <button onClick={() => this.focus()}>Focus Input</button>
      </div>
    );
  }
}
