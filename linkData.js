import { SecondaryNavBarData, generateSeries, createLinkWithDirectory, createSimpleJsLink } from "./helper.js";

const formatDirectory = index => `ex_${index.toString().padStart(3, '0')}`;

const formatExercice = index => `exo_${index.toString().padStart(3, '0')}`;

const linkData = new Map([
  // ["html", new SecondaryNavBarData("HTML", ["html1", "html2", "html3"])],
  // ["css", new SecondaryNavBarData("CSS", ["css1", "css2", "css3"])],
  // ["javascript", new SecondaryNavBarData("JavaScript", ["js1", "js2", "js3"])]
  ["html",
    new SecondaryNavBarData("exemples/HTML",
      generateSeries(112, 115, formatDirectory)
        .map(tag => createLinkWithDirectory(tag)))
  ],
  ["css",
    new SecondaryNavBarData("exemples/CSS",
      generateSeries(96, 108, formatDirectory)
        .map(tag => createLinkWithDirectory(tag)))
  ],
  ["events",
    new SecondaryNavBarData("exemples/events",
      generateSeries(78, 95, formatDirectory)
        .map(tag => createLinkWithDirectory(tag)))
  ],
  ["formulaires",
    new SecondaryNavBarData("exemples/Formulaires",
      generateSeries(106, 109, formatDirectory)
        .map(tag => createLinkWithDirectory(tag)))
  ],
  ["ajax",
    new SecondaryNavBarData("exemples/AJAX",
      ["ex_110", "ex_111"]
        .map(tag => createLinkWithDirectory(tag)))
  ],
  ["exo_javascript",
    new SecondaryNavBarData("exercices/Exo_JavaScript",
      generateSeries(1, 33, formatExercice)
        .map(tag => createLinkWithDirectory(tag)))
  ]
]);

export default linkData;