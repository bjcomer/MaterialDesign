import { MdtestPage } from './app.po';

describe('mdtest App', function() {
  let page: MdtestPage;

  beforeEach(() => {
    page = new MdtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
