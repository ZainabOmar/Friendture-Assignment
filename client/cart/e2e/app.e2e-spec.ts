import { CartPage } from './app.po';

describe('cart App', () => {
  let page: CartPage;

  beforeEach(() => {
    page = new CartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
