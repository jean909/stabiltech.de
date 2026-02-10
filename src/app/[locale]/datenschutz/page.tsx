import { setRequestLocale } from 'next-intl/server';

export default async function DatenschutzPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-black mb-12">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-black mb-2">1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">2. Verantwortliche Stelle</h2>
            <p>StabilTech<br />Moise Ioan Jean<br />E-Mail: info@stabiltech.de</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">3. Datenerfassung auf unserer Website</h2>
            <h3 className="font-semibold text-black mt-4 mb-1">Kontaktformular</h3>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            
            <h3 className="font-semibold text-black mt-4 mb-1">Server-Log-Dateien</h3>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">4. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">5. Cookies</h2>
            <p>Diese Website verwendet keine Tracking-Cookies. Es werden nur technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">6. Kontakt</h2>
            <p>Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter: info@stabiltech.de</p>
          </div>
        </div>
      </div>
    </div>
  );
}
