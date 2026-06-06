import type { BlogPost } from "@/lib/blog";
import { blogPosts as staticBlogPosts } from "@/lib/blog";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import {
  blogPostBySlugQuery,
  blogPostsQuery,
  blogSlugsQuery,
} from "@/sanity/lib/queries";

function formatBlogDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

type SanityBlogPost = Omit<BlogPost, "date"> & { date: string };

function normalizePost(post: SanityBlogPost): BlogPost {
  return {
    ...post,
    date: post.date.includes("-") ? formatBlogDate(post.date) : post.date,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured) return staticBlogPosts;

  try {
    const posts = await client.fetch<SanityBlogPost[]>(
      blogPostsQuery,
      {},
      { next: { tags: ["blog"] } },
    );
    if (!posts?.length) return staticBlogPosts;
    return posts.map(normalizePost);
  } catch {
    return staticBlogPosts;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!isSanityConfigured) {
    return staticBlogPosts.find((post) => post.slug === slug);
  }

  try {
    const post = await client.fetch<SanityBlogPost | null>(
      blogPostBySlugQuery,
      { slug },
      { next: { tags: ["blog", `blog:${slug}`] } },
    );
    if (post) return normalizePost(post);
  } catch {
    // fall through to static data
  }

  return staticBlogPosts.find((post) => post.slug === slug);
}

export async function getBlogSlugs(): Promise<string[]> {
  if (!isSanityConfigured) {
    return staticBlogPosts.map((post) => post.slug);
  }

  try {
    const rows = await client.fetch<{ slug: string }[]>(blogSlugsQuery);
    if (rows?.length) return rows.map((row) => row.slug);
  } catch {
    // fall through
  }

  return staticBlogPosts.map((post) => post.slug);
}
