import { GithubProfilePage } from './app.po';

describe('github-profile App', () => {
  let page: GithubProfilePage;

  beforeEach(() => {
    page = new GithubProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
