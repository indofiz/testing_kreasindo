const Capabilities = () => {
  return (
    <section className="container mx-auto p-4 mt-12 md:mt-24">
      {/* Heading Section */}
      <div className="px-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-slate-800">
          Jelajahi Kapasitas{' '}
          <span className="bg-gradient-to-b from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
            Data Center
          </span>{' '}
          Kami Saat Ini.
        </h1>
        <p className="text-center max-w-lg mx-auto mt-4 text-slate-400 px-4">
          Pelajari lebih lanjut tentang infrastruktur pusat data kami yang
          andal, aman, dan berkinerja tinggi yang dirancang untuk mendukung
          kebutuhan bisnis Anda.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-8 md:mt-12 bg-gradient-to-b from-cyan-50/70 to-indigo-100/40 pt-8 md:pt-12 pb-8 md:pb-12 rounded-lg px-4 md:px-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 mb-12 md:mb-24">
          <div className="text-xl md:text-2xl font-medium max-w-sm md:tracking-widest">
            Kami memberikan kekuatan kepada setiap orang untuk bekerja dengan
            data.
          </div>
          <div className="text-slate-400 max-w-lg text-base md:text-inherit">
            Memberdayakan tim dengan alat data yang aman, cepat, dan mudah
            diakses—terlepas dari tingkat keterampilan mereka. Beri tahu saya
            jika Anda menginginkan gaya yang lebih teknis, ramah, atau formal.
          </div>
        </div>
        <img
          src={'/capabilities.png'}
          className="w-full md:w-3/4 mx-auto -mt-4 md:mt-0"
          alt="Data center capabilities visualization"
        />
      </div>
    </section>
  )
}

export default Capabilities
