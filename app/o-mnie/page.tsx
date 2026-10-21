import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, GraduationCap } from "lucide-react";
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
        <section className="bg-white py-14 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <MarkdownRenderer htmlContent={page.htmlContent} />
          </div>
        </section>
      )}

      <section className="bg-secondary/20 py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-900">
              Wykształcenie i kwalifikacje
            </h2>
            <p className="mt-4 font-body leading-relaxed text-neutral-600">
              Moja wiedza opiera się na akademickich i terapeutycznych
              podstawach. Stale się uczę, by jak najlepiej wspierać moje
              pacjentki.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {QUALIFICATIONS.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.text}
                  className="flex items-start gap-4 rounded-xl border border-neutral-100 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light/30">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="pt-1 font-body leading-relaxed text-neutral-900">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
            Zacznijmy od rozmowy
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Chcesz sprawdzić, czy to wsparcie dla Ciebie?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-white/90">
            Umów konsultację online albo najpierw poznaj dostępne formy
            współpracy. Wybierz kolejny krok, który jest dla Ciebie wygodny.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt/"
              className="rounded-full bg-white px-8 py-4 font-body text-lg font-semibold text-primary-dark shadow-md transition-colors hover:bg-neutral-100"
            >
              Umów konsultację online
            </Link>
            <Link
              href="/oferta/"
              className="rounded-full border-2 border-white px-8 py-4 font-body text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              Sprawdź ofertę
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
