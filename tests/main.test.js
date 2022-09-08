const fs = require("fs");
const jestAxe = require('jest-axe');
const { axe, toHaveNoViolations } = jestAxe;
const path = require("path");
const { resolve } = path;

let page = fs.readFileSync(resolve(__dirname, '../docs/index.html'));
expect.extend(toHaveNoViolations);


beforeAll(async () => {
    await new Promise((res, rej) => {
        document.documentElement.innerHTML = page;
        window.onload = res;
    });
});

it('header has no a11y violations', async () => {
    const header = document.querySelector('header');
    expect(await axe(header)).toHaveNoViolations();
})