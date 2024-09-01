// Imports
const pluginEleventyNavigation = require("@11ty/eleventy-navigation");
const pluginMinifier = require("@sherby/eleventy-plugin-files-minifier");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

// Config
const configJs = require("./src/config/javascript");
const configSitemap = require("./src/config/sitemap");
const configServer = require("./src/config/server");

// Other
const filterPostDate = require("./src/config/postDate");
const isProduction = configServer.isProduction;

module.exports = function (eleventyConfig) {

	/**
     *  JS EXTENSION
     *  Sets up JS files as an eleventy template language, which are compiled by esbuild. Allows bundling and minification of JS
     */
	eleventyConfig.addTemplateFormats("js");
    eleventyConfig.addExtension("js", configJs);



	/**=====================================================================
                  PLUGINS - For additional eleventy functionality 
    =======================================================================*/
	eleventyConfig.addPlugin(pluginEleventyNavigation);

	/**
     *  AUTOMATIC SITEMAP GENERATION 
     *  Automatically generate a sitemap, using the domain in _data/client.json
     *  https://www.npmjs.com/package/@quasibit/eleventy-plugin-sitemap
     */
	eleventyConfig.addPlugin(pluginSitemap, configSitemap);

	/**
     *  MINIFIER 
     *  When in production ("npm run build" is ran), minify all HTML, CSS, JSON, XML, XSL and webmanifest files.
     *  https://github.com/benjaminrancourt/eleventy-plugin-files-minifier
     */
	if (isProduction) {
		eleventyConfig.addPlugin(pluginMinifier);
	}
	
	
	
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

	/**=====================================================================
                                SERVER SETTINGS
    =======================================================================*/
    eleventyConfig.setServerOptions(configServer);


	return {
		dir: {
			input: "src",
			output: "_site",
		},
		htmlTemplateEngine: "njk",
	};
};