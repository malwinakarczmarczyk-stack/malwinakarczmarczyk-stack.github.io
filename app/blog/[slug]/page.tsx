import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getBlogPost, getAllBlogSlugs, getAllBlogPosts } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import BlogCard from "@/components/BlogCard";
import { notFound } from "next/navigation";

const SITE_URL = "https://malwinakucharska.pl";
const AUTHOR_NAME = "Malwina Kucharska";
const AUTHOR_URL = `${SITE_URL}/o-mnie/`;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: "Artykuł nie znaleziony" };
  }

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}/`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
      authors: [AUTHOR_NAME],
      url: canonicalUrl,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const seriesPosts = post.seriesSlug
    ? allPosts
        .filter((p) => p.seriesSlug === post.seriesSlug)
        .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0))
    : [];
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}/`;
  const imageUrl = post.image
    ? new URL(post.image, SITE_URL).toString()
    : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    inLanguage: "pl-PL",
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
      jobTitle: "Psycholog i psychodietetyk",
    },
    ...(imageUrl ? { image: [imageUrl] } : {}),
    ...(post.seriesTitle
      ? {
          isPartOf: {
            "@type": "CreativeWorkSeries",
            name: post.seriesTitle,
          },
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć do bloga
          </Link>

          <span className="inline-block bg-primary-light text-primary-dark rounded-full px-3 py-1 text-xs font-body font-medium mb-4">
            {post.category}
          </span>

          <h1 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="font-body text-sm text-neutral-600 mb-8">
            {formattedDate} &middot; {post.readingTime} &middot;{" "}
            <span>
              Autorka:{" "}
              <Link
                href="/o-mnie/"
                className="underline underline-offset-2 hover:text-primary-dark"
              >
                Malwina Kucharska, psycholog i psychodietetyk
              </Link>
            </span>
          </p>

          {post.image ? (
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-10">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[16/9] bg-primary-light rounded-2xl mb-10 flex items-center justify-center">
              <span className="font-body text-primary-dark text-sm">
                Zdjęcie wyróżniające
              </span>
            </div>
          )}

          <MarkdownRenderer
            htmlContent={post.htmlContent}
            className="font-body text-base leading-relaxed text-neutral-900"
          />

          <div className="bg-primary-light rounded-2xl p-8 mt-12 text-center">
            <p className="font-body font-semibold text-lg text-neutral-900 mb-4">
              Zrób pierwszy krok ku większemu spokojowi wokół jedzenia.
            </p>
            <Link
              href="/kontakt/"
              className="inline-block bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-3 font-body font-semibold transition-all duration-300"
            >
              Umów bezpłatną konsultację
            </Link>
          </div>
        </div>
      </article>

      {seriesPosts.length > 0 && (
        <section className="py-12 lg:py-16 bg-primary-light/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-sm font-medium text-primary-dark mb-2">
              Seria artykułów
            </p>
            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mb-6">
              {post.seriesTitle}
            </h2>
            <ol className="space-y-3">
              {seriesPosts.map((item, index) => (
                <li key={item.slug}>
                  {item.slug === post.slug ? (
                    <span
                      aria-current="page"
                      className="block rounded-xl bg-white px-5 py-4 font-body font-semibold text-neutral-900"
                    >
                      <span className="text-primary-dark">
                        Część {index + 1}.
                      </span>{" "}
                      {item.title}
                    </span>
                  ) : (
                    <Link
                      href={`/blog/${item.slug}/`}
                      className="block rounded-xl bg-white px-5 py-4 font-body text-neutral-900 hover:text-primary-dark transition-colors"
                    >
                      <span className="text-primary-dark">
                        Część {index + 1}.
                      </span>{" "}
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-semibold text-2xl text-neutral-900 mb-8">
              Podobne artykuły
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <BlogCard
                  key={related.slug}
                  slug={related.slug}
                  title={related.title}
                  category={related.category}
                  readingTime={related.readingTime}
                  description={related.description}
                  image={related.image}
                  imageAlt={related.imageAlt}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
