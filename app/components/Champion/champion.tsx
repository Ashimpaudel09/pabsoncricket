export default function Champion() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center text-center py-20 rounded-2xl shadow-xl border bg-gradient-to-br from-red-50 via-white to-red-100">

      {/* 🔴 Decorative Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-20"></div>

      {/* 🏆 Champion Label */}
      <p className="text-xs font-bold tracking-[0.4em] text-red-600 uppercase mb-4">
        Tournament Champion
      </p>

      {/* 🔥 Logo Container */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-red-500 blur-2xl opacity-30 scale-110"></div>

        <img
          src="/Team/kathmandu.jpeg"
          alt="Pabson Kathmandu Logo"
          className="relative h-36 w-36 md:h-44 md:w-44 object-contain rounded-full border-4 border-red-600 shadow-2xl bg-white p-3"
        />
      </div>

      {/* 👑 Team Name */}
      <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 uppercase tracking-tight">
        PABSON <span className="text-red-600">KATHMANDU</span>
      </h3>

      {/* 🏆 Subtitle */}
      <p className="mt-5 text-sm md:text-lg text-slate-600 font-semibold">
        🏆 PCL 2082 Grand Champions
      </p>

      {/* 🥇 Decorative Line */}
      <div className="mt-6 w-24 h-1 bg-red-600 rounded-full"></div>

    </div>
  );
}