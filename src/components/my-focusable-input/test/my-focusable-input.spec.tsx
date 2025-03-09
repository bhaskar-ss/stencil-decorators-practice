import { newSpecPage } from '@stencil/core/testing';
import { MyFocusableInput } from '../my-focusable-input';

describe('my-focusable-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyFocusableInput],
      html: `<my-focusable-input></my-focusable-input>`,
    });
    expect(page.root).toEqualHtml(`
      <my-focusable-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-focusable-input>
    `);
  });
});
