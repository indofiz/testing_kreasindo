import ListPricing from '@/components/custom/list-pricing'
const Pricing = () => {
  return (
    <section className="container mx-auto p-4 mt-24">
      <div>
        <h1 className="text-4xl font-semibold text-center text-slate-800">
          Mudah Dalam Mengelola,{' '}
          <span className="bg-gradient-to-b from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
            Aman
          </span>{' '}
          dan Cepat.
        </h1>
        <p className="text-center max-w-lg mx-auto mt-4 text-slate-400">
          Nikmati kemudahan dalam pengelolaan, keamanan tingkat tinggi, dan
          kecepatan akses untuk mendukung kebutuhan Anda.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-12">
        <div className="bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl p-8 mt-12">
          <h2 className="text-2xl text-center font-semibold text-slate-700">
            Beginer Plan
          </h2>
          <p className="text-slate-600 text-center mt-2">
            Perfect for individuals and small teams.
          </p>
          <div className="mt-4 text-center">
            <span className="text-5xl font-bold text-slate-700">$5</span>
            <span className="text-slate-700">/month</span>
          </div>
          <div className="flex flex-col gap-3 mt-12">
            <ListPricing title="Unlimited Storage" isDefault />
            <ListPricing title="24/7 Support" isDefault />
            <ListPricing title="Basic Analytics" isDefault />
            <ListPricing title="Custom Branding" isDefault />
            <ListPricing title="Email Support" isDefault />
            <ListPricing title="Unlimited Users" isDefault />
          </div>

          <button className="mt-12 bg-transparent border border-slate-500 w-full text-slate-700 py-2 px-4 rounded-lg hover:text-white hover:bg-indigo-600 transition duration-200">
            Get Started
          </button>
        </div>
        <div className="bg-gradient-to-b from-indigo-400 to-indigo-700 rounded-xl p-8 mt-12">
          <h2 className="text-2xl text-center font-semibold text-white">
            Basic Plan
          </h2>
          <p className="text-white text-center mt-2">
            Ideal for individuals and small teams.
          </p>
          <div className="mt-4 text-center">
            <span className="text-5xl font-bold text-white">$10</span>
            <span className="text-white">/month</span>
          </div>
          <div className="flex flex-col gap-3 mt-12">
            <ListPricing title="Unlimited Storage" />
            <ListPricing title="24/7 Support" />
            <ListPricing title="Basic Analytics" />
            <ListPricing title="Custom Branding" />
            <ListPricing title="Email Support" />
            <ListPricing title="Unlimited Users" />
          </div>

          <button className="mt-12 bg-black w-full text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200">
            Get Started
          </button>
        </div>
        <div className="bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl p-8 mt-12">
          <h2 className="text-2xl text-center font-semibold text-slate-700">
            Pro Plan
          </h2>
          <p className="text-slate-600 text-center mt-2">
            Perfect for growing teams and businesses.
          </p>
          <div className="mt-4 text-center">
            <span className="text-5xl font-bold text-slate-700">$20</span>
            <span className="text-slate-700">/month</span>
          </div>
          <div className="flex flex-col gap-3 mt-12">
            <ListPricing title="Unlimited Storage" isDefault />
            <ListPricing title="24/7 Support" isDefault />
            <ListPricing title="Basic Analytics" isDefault />
            <ListPricing title="Custom Branding" isDefault />
            <ListPricing title="Email Support" isDefault />
            <ListPricing title="Unlimited Users" isDefault />
          </div>

          <button className="mt-12 bg-transparent border border-slate-500 w-full text-slate-700 py-2 px-4 rounded-lg hover:text-white hover:bg-indigo-600 transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
