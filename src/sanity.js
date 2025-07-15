import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'b0anp11l', // must match your Sanity project
  dataset: 'production', // must match your dataset
  useCdn: true,
  apiVersion: '2023-05-30',
}); 