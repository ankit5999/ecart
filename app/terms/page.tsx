export default function TermsPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      
      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Shipping Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Standard shipping: 5-7 business days</li>
            <li>Express shipping: 2-3 business days</li>
            <li>Free shipping on orders over $50</li>
            <li>International shipping not available at this time</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Return Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>30-day return window for unopened products</li>
            <li>Return shipping costs are the responsibility of the customer</li>
            <li>Refunds will be processed within 5-7 business days</li>
            <li>Opened products cannot be returned for health and safety reasons</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Health Disclaimers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Products are not intended to diagnose, treat, cure, or prevent any disease</li>
            <li>Consult with a healthcare professional before use</li>
            <li>Results may vary between individuals</li>
            <li>Keep all products out of reach of children</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Privacy & Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We collect and process personal data in accordance with GDPR</li>
            <li>Payment information is encrypted and securely processed</li>
            <li>We never share your personal information with third parties</li>
            <li>You can request deletion of your data at any time</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Product Usage</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Follow all usage instructions carefully</li>
            <li>Discontinue use if adverse reactions occur</li>
            <li>Store products as directed on packaging</li>
            <li>Do not use expired products</li>
          </ul>
        </section>
      </div>
    </div>
  );
}