import type { Metadata } from "next";
import Link from "next/link";
import {
  Apple,
  Brain,
  Check,
  Heart,
  MessageCircle,
  Shield,
  ShoppingBasket,
  Smile,
  Users,
} from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Oferta psychodietetyczna — Malwina Kucharska",
    description:
      "Konsultacje i pakiety psychodietetyczne online oraz w Warszawie. Wsparcie dla kobiet z PCOS, insulinoopornością, ADHD, nadwagą i trudną relacją z jedzeniem.",
    openGraph: {
      title: "Oferta psychodietetyczna — Malwina Kucharska",
      description:
        "Konsultacje i pakiety psychodietetyczne online oraz w Warszawie. Wsparcie dla kobiet z PCOS, insulinoopornością, ADHD, nadwagą i trudną relacją z jedzeniem.",
    },
  };
}

const OFFERS = [
  {
    title: "Konsultacja psychodietetyczna",
    label: "Na początek",
    duration: "60 minut",
    price: "240 zł",
    description:
      "Masz dość kolejnej diety albo chcesz zrozumieć, co utrudnia Ci zmianę? Zaczniemy od Twojej historii i tego, czego teraz potrzebujesz.",
    features: [
      "Rozmowa o zdrowiu, nawykach i relacji z jedzeniem",
      "Przyjrzenie się najważniejszej trudności",
      "Pierwsze kroki dopasowane do Twojej codzienności",
    ],
    icon: MessageCircle,
    highlighted: false,
  },
  {
    title: "Pakiet Start",
    label: "3 spotkania",
    duration: "50–60 min • do 10 tygodni",
    price: "690 zł",
    priceNote: "zamiast 720 zł",
    description:
      "Chcesz spróbować zmian z regularnym wsparciem, ale bez deklarowania długiej współpracy? To dobry pierwszy etap.",
    features: [
      "3 konsultacje indywidualne",
      "Wspólne ustalenie celu i małych kroków",
      "Omówienie tego, co działa i co warto zmienić",
      "2 krótkie maile z pytaniami w trakcie pakietu",
    ],
    icon: Heart,
    highlighted: false,
  },
  {
    title: "Proces psychodietetyczny",
    label: "Najpopularniejszy wybór",
    duration: "6 spotkań • 50–60 min • do 4 miesięcy",
    price: "1 350 zł",
    priceNote: "zamiast 1 440 zł",
    description:
      "Dla Ciebie, jeśli chcesz stopniowo zmieniać nawyki i potrzebujesz czasu, by sprawdzać rozwiązania w codziennym życiu.",
    features: [
      "6 konsultacji indywidualnych",
      "Praca nad jedzeniem emocjonalnym i schematem „wszystko albo nic”",
      "Zmiany dopasowane do zdrowia i Twojego rytmu dnia",
      "2 krótkie maile z pytaniami w trakcie pakietu",
    ],
    icon: Users,
    highlighted: true,
  },
  {
    title: "Wsparcie przy ADHD",
    label: "4 spotkania",
    duration: "50–60 min • do 12 tygodni",
    price: "920 zł",
    priceNote: "zamiast 960 zł",
    description:
      "Jeśli planowanie, regularne jedzenie lub zakupy bywają trudne, poszukamy prostych rozwiązań, które pasują do Twojego dnia.",
    features: [
      "4 konsultacje indywidualne",
      "Pomysły na szybkie i awaryjne posiłki",
      "Strategie ułatwiające planowanie i regularność",
      "2 krótkie maile z pytaniami w trakcie pakietu",
    ],
    icon: Brain,
    highlighted: false,
  },
];

const SPECIALIZATIONS = [
  {
    icon: Shield,
    title: "Zdrowie i masa ciała",
    description:
      "Wsparcie psychodietetyczne przy nadwadze, otyłości, PCOS i insulinooporności.",
  },
  {
    icon: Heart,
    title: "Trudna relacja z jedzeniem",
    description:
      "Zajadanie emocji, podjadanie, jedzenie w ukryciu, poczucie winy i zmęczenie kolejnymi dietami.",
  },
  {
    icon: Brain,
    title: "Jedzenie i codzienność z ADHD",
    description:
      "Trudności z regularnym jedzeniem, planowaniem posiłków, organizacją zakupów i impulsywnym sięganiem po jedzenie.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Jak wygląda pierwsza konsultacja i czy muszę się przygotować?",
    answer:
      "Porozmawiamy o Twoim zdrowiu, codzienności, nawykach i tym, czego teraz potrzebujesz. Nie musisz przygotowywać się w szczególny sposób. Jeśli masz aktualne wyniki badań lub zalecenia lekarza, możesz mieć je pod ręką — wspólnie ocenimy, czy będą pomocne.",
  },
  {
    question: "Czy muszę od razu kupić pakiet?",
    answer:
      "Nie. Możesz zacząć od pojedynczej konsultacji. Po rozmowie wspólnie zdecydujemy, czy dalsze spotkania będą dla Ciebie pomocne.",
  },
  {
    question: "Czy dostanę jadłospis?",
    answer:
      "Nie pracujemy na sztywnym jadłospisie ani liście zakazów. Skupiamy się na rozwiązaniach żywieniowych i nawykach, które możesz dopasować do swojego życia.",
  },
  {
    question: "Jak działają maile między spotkaniami?",
    answer:
      "W każdym pakiecie możesz wysłać 2 krótkie wiadomości z pytaniami w trakcie całej współpracy. Odpowiadam w ciągu 2 dni roboczych. Nie jest to stały ani pilny kontakt.",
  },
  {
    question: "Czy spotkania odbywają się online?",
    answer:
      "Tak. Możemy spotkać się online albo stacjonarnie w Warszawie. Szczegóły ustalimy przy rezerwacji.",
  },
  {
    question: "Na czym polega wsparcie przy ADHD?",
    answer:
      "Pracujemy nad nawykami związanymi z jedzeniem, planowaniem i organizacją codzienności. Konsultacje nie obejmują diagnozowania ani leczenia ADHD.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-background py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Psychodietetyka Online
          </p>
          <h1 className="mb-5 font-heading text-4xl font-bold text-neutral-900 md:text-5xl">
            Masz dość kolejnej diety?
          </h1>
          <p className="mx-auto max-w-3xl font-body text-lg leading-relaxed text-neutral-700">
            Wspieram kobiety z PCOS, insulinoopornością, ADHD, nadwagą i
            otyłością, które zmagają się z jedzeniem pod wpływem emocji albo
            tracą nadzieję po kolejnych nieudanych próbach. Razem szukamy zmian
            bez presji i zakazów — z myślą o Twoim zdrowiu i większym komforcie
            we własnym ciele.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-semibold text-neutral-900">
              Wybierz formę wsparcia
            </h2>
            <p className="mt-3 font-body text-neutral-600">
              Możesz zacząć od jednego spotkania. Pakiet dobierzemy do Twoich
              potrzeb.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {OFFERS.map((offer) => {
              const Icon = offer.icon;
              return (
                <article
                  key={offer.title}
                  className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm sm:p-8 ${
                    offer.highlighted
                      ? "border-2 border-primary"
                      : "border-neutral-200"
                  }`}
                >
                  <span className="mb-4 inline-flex w-fit rounded-full bg-primary-light/30 px-3 py-1 font-body text-xs font-semibold text-primary-dark">
                    {offer.label}
                  </span>
                  <Icon className="mb-4 h-9 w-9 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-2xl font-semibold text-neutral-900">
                    {offer.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-neutral-600">
                    {offer.duration}
                  </p>
                  <p className="mt-4 font-body leading-relaxed text-neutral-700">
                    {offer.description}
                  </p>
                  <ul className="my-6 space-y-3">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="font-body text-sm text-neutral-800">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-5 mt-auto">
                    <span className="font-body text-3xl font-bold text-primary-dark">
                      {offer.price}
                    </span>
                    {"priceNote" in offer && offer.priceNote && (
                      <span className="ml-2 font-body text-sm text-neutral-500">
                        {offer.priceNote}
                      </span>
                    )}
                  </div>
                  <Link
                    href="/kontakt/"
                    className="block w-full rounded-full bg-primary px-6 py-3 text-center font-body font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Umów wizytę online
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-primary-light/20 p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <ShoppingBasket
                  className="mt-1 h-8 w-8 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-heading text-xl font-semibold text-neutral-900">
                    Wspólne zakupy spożywcze online
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-neutral-700">
                    45 minut • 180 zł. Ułożymy praktyczną listę zakupów i
                    poszukamy produktów, które ułatwią Ci codzienne jedzenie.
                    Dostępne jako dodatek do konsultacji lub pakietu.
                  </p>
                </div>
              </div>
              <Link
                href="/kontakt/"
                className="shrink-0 rounded-full border border-primary px-6 py-3 text-center font-body font-semibold text-primary transition-colors hover:bg-white"
              >
                Zapytaj o zakupy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-light/20 py-14 lg:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-heading text-3xl font-semibold text-neutral-900">
            Wsparcie psychodietetyczne dla kobiet
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {SPECIALIZATIONS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <Icon
                    className="mb-4 h-7 w-7 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-neutral-700">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-heading text-3xl font-semibold text-neutral-900">
            Najczęstsze pytania
          </h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CtaBand
        heading="Nie musisz zaczynać od kolejnej diety"
        subtitle="Umów bezpłatną, 15-minutową rozmowę i sprawdźmy, jaka forma wsparcia będzie dla Ciebie odpowiednia."
        buttonText="Umów bezpłatną rozmowę"
        buttonHref="/kontakt/"
      />
    </>
  );
}
