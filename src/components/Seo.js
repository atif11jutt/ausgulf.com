import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSeoQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

function Seo(
  {
    lang,
    meta,
    description,
    title,
  },
) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={`${title} - ${data.site.siteMetadata.title}` || data.site.siteMetadata.title}
          meta={[
            {
              name: `description`,
              content: description || data.site.siteMetadata.description,
            },
            {
              property: `og:title`,
              content: `${title} - ${data.site.siteMetadata.title}` || data.site.siteMetadata.title,
            },
            {
              property: `og:description`,
              content: description || data.site.siteMetadata.description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `twitter:card`,
              content: `summary`,
            },
            {
              property: `twitter:creator`,
              content: data.site.siteMetadata?.author || ``,
            },
            {
              property: `twitter:title`,
              content: `${title} - ${data.site.siteMetadata.title}` || data.site.siteMetadata.title,
            },
            {
              property: `twitter:description`,
              content: description || data.site.siteMetadata.description,
            },
          ].concat(meta)}
        />
      )}
    />
  );
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
};

Seo.propTypes = {
  lang: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.string),
  keywords: PropTypes.arrayOf(PropTypes.string),
};

export default Seo;
