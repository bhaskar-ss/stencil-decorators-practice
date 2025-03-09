import { newSpecPage } from '@stencil/core/testing';
import { UserCard } from '../user-card';

describe('user-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UserCard],
      html: `<user-card></user-card>`,
    });
    expect(page.root).toEqualHtml(`
      <user-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </user-card>
    `);
  });
});
