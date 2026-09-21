export default function FAQ() {
  return (
    <section id="faq" className="w-full px-4 py-16 md:py-24 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <details className="group border border-gray-300 rounded-lg p-4 cursor-pointer transition-colors group-open:border-gray-400">
          <summary className="font-semibold text-lg list-none flex justify-between items-center gap-4">
            Do I need to provide cleaning supplies?
            <span className="shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-4 text-gray-700 leading-relaxed">No — we bring everything, including eco-friendly disinfectants, professional equipment, and microfibre cloths. Just give us access to the home.</p>
            </div>
          </div>
        </details>
        {/* FAQ Item 2 */}
        <details className="group border border-gray-300 rounded-lg p-4 cursor-pointer transition-colors group-open:border-gray-400">
          <summary className="font-semibold text-lg list-none flex justify-between items-center gap-4">
            What if I&apos;m not happy with the clean?
            <span className="shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-4 text-gray-700 leading-relaxed">We guarantee every single visit. If something isn&apos;t up to standard within 24 hours, we&apos;ll come back and make it right at no extra charge.</p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}