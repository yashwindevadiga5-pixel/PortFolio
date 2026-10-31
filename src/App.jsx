import profilePortrait from './assets/about/profile.png'
import heroVideo from './assets/hero/hero.mp4'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 gap-6">
      <img
        src={profilePortrait}
        alt="Profile Portrait"
        className="w-48 h-48 rounded-full object-cover border-2 border-[#ff2a2a]"
      />
      <video
        src={heroVideo}
        controls
        autoPlay
        muted
        loop
        className="w-full max-w-xl rounded-xl border border-neutral-800"
      />
    </div>
  )
}
