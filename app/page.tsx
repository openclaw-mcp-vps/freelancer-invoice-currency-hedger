export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Fintech for Freelancers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Hedge Currency Risk on Your{" "}
          <span className="text-[#58a6ff]">International Invoices</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop losing money to exchange rate swings. HedgeInvoice tracks your pending foreign-currency invoices, calculates your exposure in real time, and suggests forward contract strategies so you get paid what you quoted.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Hedging — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No lock-in.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          {[
            { value: "$5k+", label: "Minimum invoice size" },
            { value: "Real-time", label: "Exchange rate feeds" },
            { value: "Forward", label: "Contract hedging" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#6e7681] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$29</div>
          <div className="text-[#6e7681] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited invoice tracking",
              "Real-time FX rate dashboard",
              "Exposure risk calculator",
              "Forward contract suggestions",
              "Forex broker API integration",
              "Email alerts on rate moves",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is a forward contract and how does it protect me?",
              a: "A forward contract locks in today's exchange rate for a future payment date. If you have a €10,000 invoice due in 60 days, a forward contract guarantees the USD amount you'll receive regardless of how the EUR/USD rate moves.",
            },
            {
              q: "Do I need to connect my invoicing software?",
              a: "No. You can manually enter invoice details, or connect popular tools like FreshBooks, Wave, or QuickBooks via our integrations. Either way, HedgeInvoice calculates your total currency exposure instantly.",
            },
            {
              q: "Which currencies and brokers are supported?",
              a: "We support all major currency pairs (EUR, GBP, CAD, AUD, JPY, CHF, and more) and integrate with leading retail forex brokers. Broker availability depends on your country of residence.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="border border-[#21262d] rounded-lg bg-[#161b22] p-5 group"
            >
              <summary className="font-semibold text-[#c9d1d9] cursor-pointer list-none flex justify-between items-center">
                {item.q}
                <span className="text-[#58a6ff] ml-4 text-lg">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} HedgeInvoice. Not financial advice.
      </footer>
    </main>
  )
}
