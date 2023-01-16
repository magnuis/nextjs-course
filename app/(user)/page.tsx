import { previewData } from "next/headers";
import { groq } from "next-sanity";
import PreviewSuspense from "../../components/preview-suspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import { Post } from "../../type";
import { client } from "../../lib/sanity.client";
export default async function HomePage() {
  const query = groq`
*[_type=='post'] {
    ...,
    author->,
    categories[]->,
} | order(_createdAt desc)
`;
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A">
              Loading preview data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <div>
      <BlogList posts={posts}></BlogList>
      <h1>Not in preview mode</h1>
    </div>
  );
}
