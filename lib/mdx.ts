import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  metaDescription: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    category: data.category,
    excerpt: data.excerpt,
    image: data.image,
    publishedDate: data.publishedDate,
    readTime: data.readTime,
    author: data.author,
    metaDescription: data.metaDescription,
    keywords: data.keywords || [],
    faqs: data.faqs || [],
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      const { content: _, ...meta } = post;
      return meta;
    })
    .filter((p): p is BlogPostMeta => p !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    );
}
