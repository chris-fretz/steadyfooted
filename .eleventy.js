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

    // Include images folder in the output
    eleventyConfig.addPassthroughCopy("images");

    // Include Javascript folder in the output
    eleventyConfig.addPassthroughCopy("js");

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