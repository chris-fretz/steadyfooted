// Include Eleventy's Markdown parser
import markdownIt from "markdown-it";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
    const md = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
    });

    // 1. Replace Eleventy's markdown processor (for .md files)
    eleventyConfig.setLibrary("md", md);

    // 2. Add filter for frontmatter field content
    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
    });

    // Add Eleventy image processing to build process
    eleventyConfig.addPlugin(eleventyImageTransformPlugin,{
        formats: ["webp"],
        widths: ["auto"],
        htmlOptions: {
			imgAttributes: {
				// Safe defaults for ALL images
                // Override loading="eager" and fetchpriority="high" in templates for above-the-fold images
				loading: "lazy",
				decoding: "async",
			}
		},
    });

    // This should be unnecessary because the Eleventy plugin intercepts images and serves them on-demand from the plugin
    // eleventyConfig.addPassthroughCopy({ "images": "images" });

    // Include Javascript folder in the output
    eleventyConfig.addPassthroughCopy({ "js": "js" });

    // Only copy sass folder in development
    if (process.env.NODE_ENV !== "production") {
        eleventyConfig.addPassthroughCopy({ "sass": "sass" });
    }

    // Define directory structure
    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
            data: "_data", 
        }
    }
}