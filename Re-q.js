console.clear();

const { ReactionUserManager } = require('discord.js');
const puppeteer = require('puppeteer');

console.log(`
					██████╗ ███████╗     ██████╗     ██╗   ██╗ ██╗
					██╔══██╗██╔════╝    ██╔═══██╗    ██║   ██║███║
					██████╔╝█████╗█████╗██║   ██║    ██║   ██║╚██║
					██╔══██╗██╔══╝╚════╝██║▄▄ ██║    ╚██╗ ██╔╝ ██║
					██║  ██║███████╗    ╚██████╔╝     ╚████╔╝  ██║
					╚═╝  ╚═╝╚══════╝     ╚══▀▀═╝       ╚═══╝   ╚═╝
																
				██████████████████████████████████████████████████████████████		
`);
async function doit() {
    while (true) {
    const prompt = require("prompt-sync")({ sigint: true });
      const name = prompt('Player: ');
  
      try {
        await scrapeProduct('https://bwstats.shivam.pro/user/' + name);
      } catch {
        console.log(name + ' has never played bedwars');
        console.log("---------------------------------------------");
      }
    }
  }

async function scrapeProduct(url) {
   
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el2] = await page.$x('/html/body/div/main/div[1]/div[2]/p[1]');
    const txt2 = await el2.getProperty('textContent');
    const lvl = await txt2.jsonValue();

    const [el] = await page.$x('/html/body/div/main/div[1]/div[2]/p[3]');
    const txt = await el.getProperty('textContent');
    const fkdr = await txt.jsonValue();

    const [el1] = await page.$x('/html/body/div/main/div[1]/div[2]/p[4]');
    const txt1 = await el1.getProperty('textContent');
    const BBLR = await txt1.jsonValue();

    const [el3] = await page.$x('/html/body/div/main/div[1]/div[2]/div/table/tbody/tr[4]/td[2]');
    const txt3 = await el3.getProperty('textContent');
    const wlr = await txt3.jsonValue();


    console.log(lvl);
    console.log(fkdr);
    console.log(BBLR);
    console.log("Win/Loss Ratio (WLR): " + wlr);
    console.log("---------------------------------------------");

}
doit();

