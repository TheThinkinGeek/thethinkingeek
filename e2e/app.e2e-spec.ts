import { TheThinkinGeekPage } from './app.po';

describe('the-thinkin-geek App', () => {
  let page: TheThinkinGeekPage;

  beforeEach(() => {
    page = new TheThinkinGeekPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
