import { newSpecPage } from '@stencil/core/testing';
import { MySubmitButton } from '../my-submit-button';

describe('my-submit-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MySubmitButton],
      html: `<my-submit-button></my-submit-button>`,
    });
    expect(page.root).toEqualHtml(`
      <my-submit-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-submit-button>
    `);
  });
});
