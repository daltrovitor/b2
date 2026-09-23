// Hello World
async (page) => {
  await page.goto("about:blank");
  const fs = await import("node:fs");
  const html = fs.readFileSync("c:/Users/vitor_w39/OneDrive/Documents/B2/index.html", "utf-8");
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  return {
    title: await page.title(),
    url: page.url()
  };
}
