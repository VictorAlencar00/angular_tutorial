import { browser, element, by, logging } from 'protractor';

describe('first-app-lesson-02 app', () => {
  beforeEach(() => browser.get(''));

  it('should display correct title', async () => {
    expect(
      await element.all(by.css('.brand-logo')).get(0).getAttribute('src'),
    ).toContain('/assets/logo.svg');
  });

  it('should have a filter string input', async () => {
    expect(
      await element.all(by.css('input')).get(0).getAttribute('placeholder'),
    ).toEqual('Filter by city');
    expect(
      await element.all(by.css('input')).get(0).getAttribute('type'),
    ).toEqual('text');
  });

  it('should have a search button', async () => {
    expect(await element.all(by.css('button')).get(0).getText()).toEqual(
      'Search',
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });
});
