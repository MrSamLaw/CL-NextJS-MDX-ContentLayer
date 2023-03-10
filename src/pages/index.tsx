import { allPosts, Post } from ".contentlayer/generated";
import Link from "next/link";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    if (new Date(a.date).getTime() >= new Date(b.date).getTime()) {
      return -1;
    }
    return 1;
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  const noPosts = <p className="text-slate-700">Nothing posted yet.</p>;
  const hasPosts = (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.title} className="flex justify-between mb-3">
            <h2 className="text-lg text-slate-900 hover:text-blue-600">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="min-w-[90px] text-right text-slate-500">
              {new Date(post.date).toLocaleDateString()}
            </div>
          </li>
        );
      })}
    </ul>
  );
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
        Hello there!
      </h1>
      <p className="text-slate-700">Welcome to new CHONGLAND</p>
      <hr className="my-5" />
      {posts.length === 0 ? noPosts : hasPosts}
    </>
  );
}
