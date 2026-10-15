import type { Metadata } from "next";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  BookOpen,
  Heart,
  Brain,
  Clock,
} from "lucide-react";
import { getMarkdownPage } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import CtaBand from "@/components/CtaBand";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getMarkdownPage("o-mnie");
  return {
    title: page?.title ?? "O mnie",
    description:
      page?.description ??
      "Poznaj psychodietetyczkę Malwinę Kucharską.",
    openGraph: {
      title: page?.title ?? "O mnie",
      description:
        page?.description ??
        "Poznaj psychodietetyczkę Malwinę Kucharską.",
    },
  };
}

const QUALIFICATIONS = [
  {
    icon: GraduationCap,
    text: "Magister psychologii, specjalizacja: psychoterapia",
  },
  {
    icon: GraduationCap,
    text: "Magister dietetyki, specjalizacja: psychodietetyka",
  },
  {
    icon: BookOpen,
    text: "Trzyletnie szkolenie psychoterapeutyczne w nurcie psychodynamicznym",
  },
  {
    icon: Award,
    text: "Certyfikat SFBT (Terapia Skoncentrowana na Rozwiązaniach)",
  },
  {
    icon: Award,
    text: "Członkini Polskiego Towarzystwa Dietetyki",
  },
];

const PHILOSOPHY = [
  {
    icon: Heart,
    title: "Bez restrykcyjnych diet",
    description:
      "Nie wierzę w diety cud — wierzę w zrozumienie Twojego ciała.",
  },
  {
    icon: Brain,
    title: "Z psychologicznym wsparciem",
    description:
      "Jedzenie to nie tylko kalorie. To emocje, nawyki, wspomnienia. Pracujemy z tym wszystkim.",
  },
  {
    icon: Clock,
    title: "W Twoim tempie",
    description:
      "Każda kobieta jest inna. Nie porównuję, nie oceniam, nie pogamiam.",
  },
];

export default async function AboutPage() {
  const page = await getMarkdownPage("o-mnie");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary/30 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-4">
                O mnie
              </h1>
              <p className="font-body text-lg text-neutral-600 max-w-lg">
                Psychodietetyczka, która wierzy, że zdrowie zaczyna się od
                zrozumienia siebie.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/malwina-kucharska.jpg"
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

      {/* Story section from markdown */}
      {page && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <MarkdownRenderer htmlContent={page.htmlContent} />
          </div>
        </section>
      )}

      {/* Qualifications */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-900 text-center mb-12">
            Wykształcenie i kwalifikacje
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {QUALIFICATIONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm"
                >
                  <Icon className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-body text-neutral-900">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-900 text-center mb-12">
            Jak pracuję?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        heading="Chcesz sprawdzić, czy mogę Ci pomóc?"
        buttonText="Umów bezpłatną konsultację"
        buttonHref="/kontakt/"
      />
    </>
  );
}
