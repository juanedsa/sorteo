import { SorteoPage } from './app.po';

describe('sorteo App', function() {
  let page: SorteoPage;

  beforeEach(() => {
    page = new SorteoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
