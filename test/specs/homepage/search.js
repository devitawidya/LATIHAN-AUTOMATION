const { homepage } = require("../../pageobjects/homepage");

describe('Search Scenario', () => {
    it('[TC001] Guest is able to search item by keyword in search box', async () => {
        await browser.url('https://www.tokopedia.com/');
        await expect($(homepage.category)).toBeExisting()
        
        //input keyword on search box
        await $(homepage.searchBox).setValue('iphone 14 pro')
        await browser.keys('Enter')
        await expect(browser).toHaveUrlContaining('https://www.tokopedia.com/search?')
        await expect($(homepage.filter.title)).toBeExisting()
        
        //Apply filter and sorting
        await $(homepage.filter.officialStore).click()
        await $(homepage.filter.minPrice).setValue('100000')
        await $(homepage.filter.maxPrice).setValue('30000000')
        await $(homepage.sort.button).click()
            //await expect($(homepage.sort.dropdown)).toBeExisting()
        await $(homepage.sort.cheapest).click()
            //await expect(browser).toHaveUrlContaining('https://www.tokopedia.com/search?')
            //await expect($(homepage.filter.resultChips)).toBeExisting()

        //Get all item names in page 1
        const allNames = [];
        const itemName = await $(homepage.item.name).getAttribute('data-testid');
        while (itemName = 'spnSRPProdName') {
            i = await $(homepage.item.name).getText();
            allNames += allNames[i];
        }

        //Open page 2 & get all item names
        await $(homepage.page2).click()
        while (itemName = 'spnSRPProdName') {
            i = await $(homepage.item.name).getText();
            allNames += allNames[i];
        }

        //Open page 3 & get all item names
        await $(homepage.page3).click()
        while (itemName = 'spnSRPProdName') {
            i = await $(homepage.item.name).getText();
            allNames += allNames[i];
        }
        
        //show all item names in page 1-3
        console.log(allNames[i]);
    });
});