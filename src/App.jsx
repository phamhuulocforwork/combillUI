import FlashMessage from './features/FlashMessage'

function App() {
  return (
    <div className="flex items-center justify-center bg-blue-300 w-full h-screen gap-4">
      <FlashMessage state={'success'}></FlashMessage>
      <FlashMessage state={'error'}></FlashMessage>
    </div>
  )
}

export default App
