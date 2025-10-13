const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "p5js": "p5js" });
  eleventyConfig.addPassthroughCopy({ "talked": "talked" });
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addCollection("writing", (collection) => {
    return collection.getFilteredByTag("writing").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("experiments", (collection) => {
    return collection.getFilteredByTag("experiment").sort((a, b) => (b.data.order || 0) - (a.data.order || 0));
  });

  eleventyConfig.addCollection("projects", (collection) => {
    return collection.getFilteredByTag("project").sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  eleventyConfig.addCollection("talks", (collection) => {
    return collection.getFilteredByTag("talk").sort((a, b) => b.date - a.date);
  });

  const markdownLibrary = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "direct-link",
      symbol: "#",
    }),
    level: [1, 2, 3],
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
  };
};
