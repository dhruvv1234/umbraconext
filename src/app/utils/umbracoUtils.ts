// utils/umbracoUtils.ts
const UMBRACO_URL = 'https://localhost:44307'; // replace with your Umbraco URL
const UMBRACO_API_KEY = '1234567'; // replace with your Umbraco API Key
const UMBRACO_CONTENT_LANGUAGE = 'en-US'; // replace with your preferred language
const cacheStrategy = 'force-cache'; // 'force-cache' or 'no-store'

/**
 * Fetch content from Umbraco by URL path
 * @param path The URL path of the content item
 * @returns The fetched content item
 */
export const fetchContentByPath = async (path: string) => {
    const url = `https://localhost:44307/umbraco/delivery/api/v2/content/item${path}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Api-Key': UMBRACO_API_KEY,
            'Accept-Language': UMBRACO_CONTENT_LANGUAGE,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};
