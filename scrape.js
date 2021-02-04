const fetch = require('node-fetch');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const scrape = async () => {
  const res = await fetch('https://auctions.yahoo.co.jp/search/search?auccat=&tab_ex=commerce&ei=utf-8&aq=-1&oq=&sc_i=&fr=auc_top&p=PC&x=0&y=0');
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;//ここから上は変えない(URLを除く)
  const nodes = document.querySelectorAll('#Result__body h3:nth-child(3) div');
  const tokyoWeathers = Array.from(nodes).map((td) => td.textContent.trim());
  console.log(tokyoWeathers);
};
scrape();