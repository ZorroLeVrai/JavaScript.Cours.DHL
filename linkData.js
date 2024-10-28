import { SecondaryNavBarData, generateSeries, createLinkWithDirectory as clwd } from "./helper.js";

const formatDirectory = index => `ex_${index.toString().padStart(3, '0')}`;

const linkData = new Map([
  // ["html", new SecondaryNavBarData("HTML", ["html1", "html2", "html3"])],
  // ["css", new SecondaryNavBarData("CSS", ["css1", "css2", "css3"])],
  // ["javascript", new SecondaryNavBarData("JavaScript", ["js1", "js2", "js3"])]
  ["css",
    new SecondaryNavBarData("exemples/CSS",
      generateSeries(96, 108, formatDirectory)
        .map(tag => clwd(tag)))
  ]
]);

export default linkData;