export default function Benefits() {
  return (
    <section id="benefits" className="w-full px-4 py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Bright &amp; Clean</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Hundreds of local homeowners trust us — here&apos;s why.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-100 text-gray-800 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.6-7 10-4-1.4-7-5.5-7-10V6l7-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5l2 2 4-4.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Vetted &amp; Insured Cleaners</h3>
            <p className="text-lg leading-relaxed text-gray-700">Every cleaner is background-checked, insured, and trained to our strict 50-point cleaning standard.</p>
          </div>
          {/* Benefit Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-100 text-gray-800 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 9.5h17" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 3.5v3M16 3.5v3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 16l2 2 3.5-3.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-lg leading-relaxed text-gray-700">Book one-off deep cleans or recurring weekly and bi-weekly plans that fit around your life.</p>
          </div>
          {/* Benefit Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-100 text-gray-800 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-9-9.5C2 8 4 5 7.5 5c2.2 0 3.5 1.2 4.5 3 .8-1.8 2.3-3 4.5-3C20 5 22 8 21 11.5 19 16.5 12 21 12 21z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 13.5a2.5 2.5 0 0 1-4 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Products</h3>
            <p className="text-lg leading-relaxed text-gray-700">We use non-toxic, family- and pet-safe products that are tough on grime but gentle on your home.</p>
          </div>
        </div>
      </div>
    </section>
  );
}