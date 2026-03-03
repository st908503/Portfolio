type Params = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: Params) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <p className="text-sm text-zinc-400">
        Blog post: <span className="font-mono text-zinc-200">{params.slug}</span>
      </p>
      <p className="mt-4 text-sm text-zinc-300">
        Dynamic blog posts will be implemented here later.
      </p>
    </main>
  );
}
