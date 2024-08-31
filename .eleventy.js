// Imports
const pluginEleventyNavigation = require("@11ty/eleventy-navigation");

// Config
const filterPostDate = require("./src/config/postDate");

module.exports = function (eleventyConfig) {

	/**=====================================================================
                  PLUGINS - For additional eleventy functionality 
    =======================================================================*/
	eleventyConfig.addPlugin(pluginEleventyNavigation);


	/**======================================================================
       PASSTHROUGHS - Copy source files to /_site with no 11ty processing
    ========================================================================*/
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("src/admin");


	/**======================================================================
             FILTERS - Modify data in template files at build time
    ========================================================================*/
	eleventyConfig.addFilter("postDate", filterPostDate);
	/**======================================================================
                SHORTCODES - Output data using JS at build time
    ========================================================================*/
	/**
    *  Gets the current year, which can be outputted with {% year %}. Used for the footer copyright. Updates every build.
    */
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	return {
		dir: {
			input: "src",
			output: "_site",
		},
		htmlTemplateEngine: "njk",
	};
};