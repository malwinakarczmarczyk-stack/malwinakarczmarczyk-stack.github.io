import type { Metadata } from "next";
import Image from "next/image";
import { getMarkdownPage } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getMarkdownPage("o-mnie");
  return {
    title: page?.title ?? "O mnie",
    description:
      page?.description ??
      "Poznaj psycholożkę i psychodietetyczkę Malwinę Kucharską.",
    openGraph: {
      title: page?.title ?? "O mnie",
      description:
        page?.description ??
        "Poznaj psycholożkę i psychodietetyczkę Malwinę Kucharską.",
    },
  };
}

export default async function AboutPage() {
  const page = await getMarkdownPage("o-mnie");

  return (
    <>
      <section className="relative bg-secondary/30 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-4">
                O mnie
              </h1>
              <p className="font-body text-lg text-neutral-600 max-w-lg">
                Psychodietetyczka, która wierzy, że prawdziwa zmiana zaczyna się
                od zrozumienia siebie.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/Gemini_Generated_Image_mizso5mizso5mizs.jpg"
                  alt="Malwina Kucharska, psychodietetyczka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {page && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <MarkdownRenderer htmlContent={page.htmlContent} />
          </div>
        </section>
      )}
    </>
  );
}
