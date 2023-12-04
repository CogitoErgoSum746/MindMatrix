import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { deskTool, type DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import { SanityDocument } from 'sanity'

interface PostDocument extends SanityDocument {
  slug?: {
    current?: string;
  };
}

// Customize this function to show the correct URL based on the current document
function getPreviewUrl(doc: PostDocument) {
  return doc?.slug?.current
    ? `${window.location.host}/${doc.slug.current}`
    : window.location.host;
}

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `movie`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: PostDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default defineConfig({
  name: 'default',
  title: 'Successteps Blog',

  projectId: 'ydie9qvv',
  dataset: 'production',

  plugins: [deskTool({ defaultDocumentNode, }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const { getClient, dataset, document } = context;
      const client = getClient({ apiVersion: '2023-05-31' });
  
      if (document._type === 'post') {
        const slug = await client.fetch(
          `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
          { postId: document._id }
        );
  
        const params = new URLSearchParams();
        params.set('preview', 'true');
        params.set('dataset', dataset);
  
        return `https://my-site.com/posts/${slug}?${params}`;
      }
  
      return prev;
    },
  },
});



