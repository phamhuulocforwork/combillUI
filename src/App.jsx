import Calendar from './features/Calendar'
import CollectionList from './features/CollectionList'
import DatePicker from './features/DatePicker'
import DropdownMenu from './features/DropdownMenu'
import Feedback from './features/Feedback'
import JobCard from './features/JobCard'
import List from './features/List'
import MessageBox from './features/MessageBox'
import ProductReview from './features/ProductReviewModal'
import Subscription from './features/Subscription'
import Todo from './features/Todo'
import UserList from './features/User list'
import UserProfile from './features/UserProfile'

function App() {
  return (
    <div className="flex w-full items-center justify-center bg-blue-300 min-h-screen h-fit">
      {/* <Todo></Todo> */}
      {/* <UserProfile></UserProfile> */}
      {/* <List></List> */}
      {/* <JobCard></JobCard> */}
      {/* <MessageBox></MessageBox> */}
      {/* <CollectionList></CollectionList> */}
      {/* <ProductReview></ProductReview> */}
      {/* <Subscription></Subscription> */}
      {/* <UserList></UserList> */}
      {/* <Feedback></Feedback> */}
      {/* <Calendar></Calendar> */}
      {/* <DropdownMenu></DropdownMenu> */}
      <DatePicker></DatePicker>
    </div>
  )
}

export default App
