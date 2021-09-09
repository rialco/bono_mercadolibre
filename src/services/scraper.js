const puppeteer = require("puppeteer");

async function makeSearch(query) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://mercadolibre.com.co");

  await page.waitForSelector("input[name=as_word]");
  await page.$eval("input[name=as_word]", (el) => (el.value = "SILLA"));
  await page.keyboard.press("Enter");

  const text = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".ui-search-link"),
      (element) => element.textContent
    )
  );

  console.log(text[0]);
  console.log(text[1]);
  console.log(text[2]);

  //await browser.close();
}

module.exports = {
  makeSearch,
};
