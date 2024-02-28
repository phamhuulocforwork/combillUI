import JobCard from './features/JobCard'
import List from './features/List'
import Todo from './features/Todo'
import UserProfile from './features/UserProfile'

function App() {
  return (
    <div className="flex w-full items-center justify-center bg-blue-300 min-h-screen h-fit">
      {/* <Todo></Todo> */}
      {/* <UserProfile></UserProfile> */}
      {/* <List></List> */}
      <JobCard></JobCard>
    </div>
  )
}

export default App
