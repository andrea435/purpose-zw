// utils/extractContent.js
import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";

const extractTextFromHTML = (html) => {
  const { document } = new JSDOM(html).window;
  return document.body.textContent || "";
};

export const getPageContent = (pagePath) => {
  const filePath = path.join(process.cwd(), "pages", `${pagePath}.js`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  return extractTextFromHTML(fileContent);
};
