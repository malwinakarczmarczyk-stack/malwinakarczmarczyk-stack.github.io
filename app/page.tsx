import Link from "next/link";
import Image from "next/image";
import {
  RefreshCw,
  Frown,
  Cookie,
  Scale,
  Stethoscope,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import CtaBand from "@/components/CtaBand";

const PAIN_POINTS = [
  {
    icon: RefreshCw,
    text: "Ciągle jesteś na diecie, a waga nie chce spaść.",
  },
  {
    icon: Frown,
    text: "Czujesz się winna po każdym „zakazanym” posiłku.",
  },
  {
    icon: Cookie,
    text: "Jesz pod wpływem emocji, stresu albo nudy — nie głodu.",
  },
  {
    icon: Scale,
    text: "Masz insulinooporność lub PCOS i nie wiesz, co naprawdę jeść.",
  },
  {
    icon: Stethoscope,
    text: "Usłyszałaś od lekarza „proszę schudnąć” — ale nikt nie powiedział Ci jak.",
  },
  {
    icon: HelpCircle,
    text: "Nie wierzysz już, że jakakolwiek dieta może zadziałać na Ciebie.",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Bezpłatna konsultacja",
    description:
      "Poznajemy się. Opowiadasz mi o sobie — bez oceniania.",
  },
  {
    number: "2",
    title: "Diagnoza potrzeb",
    description:
      "Tworzę plan dopasowany do Twojego ciała, zdrowia i stylu życia.",
  },
  {
    number: "3",
    title: "Wspólna praca",
    description:
      "Regularne spotkania, wsparcie psychologiczne i dietetyczne.",
  },
];

const TESTIMONIALS = [
  {
    text: "Nareszcie ktoś mnie wysłuchał i nie kazał liczyć kalorii.",
    author: "Anna, 34 lata",
  },
  {
    text: "Dzięki Malwinie zrozumiałam, że jedzenie to nie wróg. To był przełom.",
    author: "Kasia, 28 lat",
  },
  {
    text: "Pierwszy raz czuję, że dieta nie jest karą, ale troską o siebie.",
    author: "Marta, 41 lat",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-background to-primary-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image placeholder */}
            <div className="order-1 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/malwina-kucharska.jpg"
                  alt="Malwina Kucharska, psychodietetyczka"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="order-2 lg:order-2">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6 leading-tight">
                Odzyskaj wolność
                <br />
                w relacji z jedzeniem.
                <br />
                <span className="text-primary">
                  Bez restrykcji i poczucia winy.
                </span>
              </h1>
              <p className="font-body text-lg text-neutral-600 mb-8 max-w-lg">
                Cześć, jestem Malwina. Pomagam odzyskać zdrową relację z
                jedzeniem i osiągnąć wymarzoną wagę — bez restrykcyjnych
                diet i efektu jo-jo. Jestem psychologiem i
                psychodietetykiem. Od lat wspieram kobiety z PCOS,
                otyłością, insulinoopornością i ADHD w poprawie zdrowia i
                odzyskaniu poczucia komfortu we własnym ciele.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt/"
                  className="inline-block bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-4 font-body font-semibold text-lg text-center shadow-md transition-all duration-300"
                >
                  Zapisz się na bezpłatną konsultację
                </Link>
                <Link
                  href="/oferta/"
                  className="inline-block border-2 border-primary text-primary hover:bg-primary-light rounded-full px-8 py-4 font-body font-semibold text-lg text-center transition-all duration-300"
                >
                  Zobacz ofertę
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-900 text-center mb-12">
            Czy to brzmi znajomo?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {PAIN_POINTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-neutral-200/50"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <p className="font-body text-base text-neutral-900">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="font-body font-medium text-lg text-primary-dark mb-6">
              Nie musisz przez to przechodzić sama.
            </p>
            <Link
              href="/kontakt/"
              className="inline-block bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-4 font-body font-semibold text-lg shadow-md transition-all duration-300"
            >
              Porozmawiajmy — umów bezpłatną konsultację
            </Link>
          </div>
        </div>
      </section>

      {/* About Short Section */}
      <section className="py-16 lg:py-24 bg-primary-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/zdjęcie z jabłkami.jpg"
                  alt="Zdjęcie z jabłkami"
                  fill
                  sizes="(max-width: 1024px) 256px, 320px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-3">
              <p className="font-body text-neutral-600 text-lg leading-relaxed mb-6">
                W pracy łączę wiedzę z psychologii i dietetyki, by pomagać
                moim podopiecznym zadbać o zdrowie — bez presji i poczucia
                winy. Wspólnie budujemy spokojniejszą, bardziej życzliwą
                relację z jedzeniem i własnym ciałem, opartą na równowadze
                i zaufaniu do siebie.
              </p>
              <Link
                href="/o-mnie/"
                className="inline-flex items-center gap-2 font-body font-medium text-primary hover:text-primary-dark transition-colors group"
              >
                Poznaj mnie bliżej
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-900 text-center mb-12">
            3 kroki do lepszej relacji z jedzeniem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <span className="inline-block font-heading font-bold text-6xl text-primary-light mb-4">
                  {step.number}
                </span>
                <h3 className="font-body font-semibold text-xl text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-900 text-center mb-12">
            Co mówią moje pacjentki
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <p className="font-body text-neutral-900 text-lg italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="font-body text-sm text-neutral-600">
                  &mdash; {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body text-sm text-neutral-600 text-center mt-8 italic">
            Opinie zebrane za zgodą pacjentek. Tu wkrótce pojawią się
            kolejne.
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        heading="Gotowa na pierwszy krok?"
        subtitle="Bezpłatna konsultacja to 15 minut rozmowy, w której razem sprawdzimy, czy mogę Ci pomóc."
        buttonText="Umów bezpłatną konsultację"
        buttonHref="/kontakt/"
      />
    </>
  );
}
