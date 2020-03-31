const timeout = 15000;

// série de tests sur la page d'accueil
describe("Tests link options", () => {
    let page;

    test('link options', async () => {
        await page.goto('http://polr.web-74.com');
        await page.waitForSelector('#navbar li a');
        await page.evaluate( () => {
            Array
                .from( document.querySelectorAll( '#navbar li a' ) )
                .filter( el => el.textContent === 'Link Options' )[0].click();
        });
        await page.waitForSelector('#show-link-options').toggle();

    })


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
