import { newE2EPage } from '@stencil/core/testing';

describe('my-focusable-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-focusable-input></my-focusable-input>');

    const element = await page.find('my-focusable-input');
    expect(element).toHaveClass('hydrated');
  });
});
