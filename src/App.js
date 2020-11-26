import "./App.css";
import user from "./used.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./statistical-data.json";

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
    </div>
  );
}

export default App;
