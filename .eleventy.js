module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the build output.
  eleventyConfig.addPassthroughCopy({ "src/media": "media" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });
  eleventyConfig.addPassthroughCopy({ "src/404.html": "404.html" });
  // 404.html is copied verbatim above — don't also process it as a template.
  eleventyConfig.ignores.add("src/404.html");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
