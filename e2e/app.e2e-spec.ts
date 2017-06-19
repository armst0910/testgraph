import { HeatMapApiPage } from './app.po';

describe('heat-map-api App', () => {
  let page: HeatMapApiPage;

  beforeEach(() => {
    page = new HeatMapApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
