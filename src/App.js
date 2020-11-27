import "./App.css";
import user from "./used.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import friendsData from "./friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
