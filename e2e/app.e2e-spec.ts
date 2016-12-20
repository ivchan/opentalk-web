import { OpentalkWebPage } from './app.po';

describe('opentalk-web App', function() {
  let page: OpentalkWebPage;

  beforeEach(() => {
    page = new OpentalkWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
