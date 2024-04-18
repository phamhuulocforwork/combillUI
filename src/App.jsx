import MusicPlayer from './features/MusicPlayer'

function App() {
  return (
    <div className="flex items-center justify-center bg-blue-100 w-full h-screen gap-8">
      <MusicPlayer></MusicPlayer>
      <MusicPlayer></MusicPlayer>
    </div>
  )
}

export default App
