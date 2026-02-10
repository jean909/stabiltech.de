import { setRequestLocale } from 'next-intl/server';

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-black mb-12">Impressum</h1>
        
        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-black mb-2">Angaben gemäß § 5 TMG</h2>
            <p>StabilTech<br />Moise Ioan Jean<br />info@stabiltech.de</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">Vertreten durch</h2>
            <p>Moise Ioan Jean</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">Kontakt</h2>
            <p>E-Mail: info@stabiltech.de</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Moise Ioan Jean</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">Haftungsausschluss</h2>
            <h3 className="font-semibold text-black mt-4 mb-1">Haftung für Inhalte</h3>
            <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
            
            <h3 className="font-semibold text-black mt-4 mb-1">Haftung für Links</h3>
            <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
