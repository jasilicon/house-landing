"use client";

export default function LeadForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Endpoint set via NEXT_PUBLIC_LEAD_ENDPOINT at build time (webhook / Zapier / API route)
    const agencyEndpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "";

    if (!agencyEndpoint) {
      console.warn(
        "[LeadForm] NEXT_PUBLIC_LEAD_ENDPOINT is not set. Configure it before deploying."
      );
      alert("Form submissions are not configured yet. Please contact us directly.");
      return;
    }

    // This grabs the data from the form
    const form = new FormData(e.currentTarget);
    const formData = {
      name: String(form.get("name")),
      email: String(form.get("email")),
      consent: form.get("consent") === "on",
    };

    try {
      await fetch(agencyEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Thanks! Your free quote request has been received.");
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <section id="form" className="w-full px-4 py-16 md:py-24 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Get Your Free Quote</h2>
        <p className="text-center text-gray-600 mb-8">Tell us a bit about yourself and we&apos;ll get back to you within one business day.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full border-2 border-gray-400 rounded-md p-3 focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full border-2 border-gray-400 rounded-md p-3 focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors" required />
          </div>
          
          <div className="flex items-start gap-2">
            <input type="checkbox" id="consent" name="consent" className="mt-1 size-5 accent-gray-900" required />
            <label htmlFor="consent" className="text-sm text-gray-600">
              I agree to be contacted by Bright &amp; Clean Home Services about my quote request. I understand I can opt out at any time.
            </label>
          </div>

          <button type="submit" className="w-full bg-black text-white p-4 rounded-md font-semibold hover:bg-gray-800 transition">
            Request My Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}