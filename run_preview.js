// Hello World
async (page) => {
  await page.goto('https://example.com');
  return await page.title();
}
