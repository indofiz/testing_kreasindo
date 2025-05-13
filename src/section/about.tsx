import { ChartArea, Users2 } from 'lucide-react'

const AboutData = () => {
  return (
    <section className="container mx-auto p-4 mt-12 md:mt-24">
      <div className="flex flex-col gap-12 md:gap-24">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center justify-center">
          {/* Image Container */}
          <div className="w-full md:w-1/3 bg-gradient-to-b from-cyan-200 to-indigo-400 pt-8 pb-8 md:pt-12 md:pb-12 rounded-xl px-4 md:px-12">
            <img
              src={'/datas/datas-1.png'}
              className="w-full"
              alt="Data visualization"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:max-w-md">
            <div className="size-16 md:size-18 flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-xl mb-4">
              <ChartArea className="text-indigo-500 w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h2 className="text-2xl md:text-3xl text-slate-700 font-medium leading-tight md:leading-14">
              Chart With Your Data.
            </h2>
            <p className="text-slate-400 text-base md:text-md mt-4 max-w-md">
              Get instant answers, support, or guidance anytime—your chatbot is
              ready to help. Let me know if you want a more playful or
              professional tone!
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center justify-center">
          {/* Text Content */}
          <div className="w-full md:max-w-md order-2 md:order-1">
            <div className="size-16 md:size-18 flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 rounded-xl mb-4">
              <Users2 className="text-indigo-500 w-10 h-10 md:w-12 md:h-12" />
            </div>
            <h2 className="text-2xl md:text-3xl text-slate-700 font-medium leading-tight md:leading-14">
              Customer services guide you.
            </h2>
            <p className="text-slate-400 text-base md:text-md mt-4 max-w-md">
              Whether you need help getting started or solving a problem, our
              dedicated customer service team is here to provide clear guidance
              and personalized support—every step of the way.
            </p>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-1/3 bg-gradient-to-b from-violet-200 to-indigo-400 pt-8 pb-8 md:pt-12 md:pb-12 rounded-xl px-4 md:px-12 order-1 md:order-2">
            <img
              src={'/datas/datas-2.png'}
              className="w-full"
              alt="Customer service illustration"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutData
