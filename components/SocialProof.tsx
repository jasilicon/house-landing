export default function SocialProof() {
  return (
    <section id="social-proof" className="w-full px-4 py-16 md:py-24 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="p-8 bg-gray-50 rounded-lg space-y-4">
          <div className="flex text-yellow-400">★★★★★</div>
          <p className="text-lg leading-relaxed text-gray-700 italic">&ldquo;This is the cleanest our home has ever been. The team was punctual, respectful, and went well beyond what we expected.&rdquo;</p>
          <p className="text-base font-semibold">- Sarah Mitchell</p>
        </div>
        {/* Testimonial 2 */}
        <div className="p-8 bg-gray-50 rounded-lg space-y-4">
          <div className="flex text-yellow-400">★★★★★</div>
          <p className="text-lg leading-relaxed text-gray-700 italic">&ldquo;Booked a move-out clean and got our full deposit back. The details they caught were incredible.&rdquo;</p>
          <p className="text-base font-semibold">- James Alvarez</p>
        </div>
      </div>
    </section>
  );
}