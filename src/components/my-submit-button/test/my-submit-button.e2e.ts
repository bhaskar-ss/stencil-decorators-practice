import { newE2EPage } from '@stencil/core/testing';

describe('my-submit-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-submit-button></my-submit-button>');

    const element = await page.find('my-submit-button');
    expect(element).toHaveClass('hydrated');
  });
});
