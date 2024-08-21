"use client";
import React, { useEffect, useState } from 'react';
import { fetchContentByPath } from '../utils/umbracoUtils'; // Adjust the import path as necessary

type ContentProperties = {
    title: string;
};

type ContentItem = {
    properties: ContentProperties;
};

const DemoPage = () => {
    const [content, setContent] = useState<ContentItem | null>(null);
    

    useEffect(() => {
        async function fetchContent() {
            try {
                const data: ContentItem = await fetchContentByPath('/demo');
                console.log('Fetched data:', data);
                setContent(data);
            } catch (error: any) {
                console.error('Error fetching content:', error.message);
            } finally {
            }
        }

        fetchContent();
    }, []);


    return (
        <section className="content-section p-2">
            <div className="container">
                <div className="row">
                    <div className="col-12 p-2">
                        <div className="single-item">
                            <div className="content">
                                <h1>{content?.properties.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoPage;
