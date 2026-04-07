import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title, 
    description, 
    keywords, 
    canonical, 
    ogTitle, 
    ogDescription, 
    ogImage, 
    ogUrl,
    twitterTitle,
    twitterDescription,
    twitterImage
}) => {
    const siteTitle = "Anantham | Premium Land Developments & Infinite Legacies";
    const defaultDescription = "Anantham - Infinite.Legacy. We curate premium land environments where generations find their anchor in the shifting tides of time.";
    const defaultKeywords = "Anantham, infinite legacy, real estate India, premium properties, land investment, luxury real estate";
    const siteUrl = "https://ananthamprojects.com";
    const defaultOgImage = `${siteUrl}/og-image.jpg`;

    const fullTitle = title ? `${title} | Anantham` : siteTitle;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            {canonical && <link rel="canonical" href={canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`} />}

            {/* Open Graph tags */}
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description || defaultDescription} />
            <meta property="og:image" content={ogImage || defaultOgImage} />
            <meta property="og:url" content={ogUrl || (canonical ? `${siteUrl}${canonical}` : siteUrl)} />
            <meta property="og:type" content="website" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
            <meta name="twitter:description" content={twitterDescription || ogDescription || description || defaultDescription} />
            <meta name="twitter:image" content={twitterImage || ogImage || defaultOgImage} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Anantham Projects",
                    "url": siteUrl,
                    "logo": `${siteUrl}/favicon.png`,
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-85100-70809",
                        "contactType": "customer service"
                    },
                    "sameAs": [
                        "https://www.instagram.com/anantham.projects/",
                        "https://www.linkedin.com/company/anantham-projects/",
                        "https://x.com/Anantham88"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
