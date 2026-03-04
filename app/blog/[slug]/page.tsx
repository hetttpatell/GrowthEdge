import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogLayout from "@/components/sections/BlogArticle";
import LifeCoverCalculator from "@/components/blog/LifeCoverCalculator";

const mdxComponents = {
  LifeCoverCalculator,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getPostBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | Growth Edge" };
  }

  return {
    title: `${article.title} | Growth Edge Insurance Advisory`,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author.name],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.image],
    },
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getPostBySlug(slug);

  if (!article) {
    notFound();
  }

  const { content, ...meta } = article;

  return (
    <>
      <Navbar />
      <BlogLayout article={meta}>
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </BlogLayout>
      <Footer />
    </>
  );
}
