import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export default function BlogCard({
  slug,
  title,
  category,
  readingTime,
  description,
  image,
  imageAlt,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}/`}
      className="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {image ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-[16/10] bg-primary-light flex items-center justify-center overflow-hidden">
          <span className="font-heading text-primary-dark text-lg opacity-60">
            Zdjęcie artykułu
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Category tag */}
        <span className="inline-block bg-primary-light text-primary-dark rounded-full px-3 py-1 text-xs font-body font-medium mb-3">
          {category}
        </span>

        {/* Title */}
        <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-neutral-600 mb-3 line-clamp-2">
          {description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <span className="font-body text-sm text-neutral-600">
            {readingTime}
          </span>
          <span className="flex items-center gap-1 text-primary font-body text-sm font-medium group-hover:gap-2 transition-all">
            Czytaj dalej
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
