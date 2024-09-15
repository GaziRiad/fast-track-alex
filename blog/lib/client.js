import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'w6jchr50',
  dataset: 'production',
  apiVersion: '2024-09-14',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
