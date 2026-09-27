import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export function renderMarkdown(content) {
    const rawHtml = marked.parse(content);
    return sanitizeHtml(rawHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: ['src', 'alt',],
        },
    });
}