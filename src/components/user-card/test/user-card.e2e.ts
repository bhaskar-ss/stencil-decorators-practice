import { newE2EPage } from '@stencil/core/testing';

describe('user-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<user-card></user-card>');

    const element = await page.find('user-card');
    expect(element).toHaveClass('hydrated');
  });
});
