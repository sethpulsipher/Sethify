const filterPostDate = require("./src/config/postDate");

module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("src/admin");

	eleventyConfig.addFilter("postDate", filterPostDate);

	return {
		dir: {
			input: "src",
			output: "_site",
		},
		htmlTemplateEngine: "njk",
	};
};