import { useState, React } from "react";
import "./index.css";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";
import { FriendsList } from "./FriendsList";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [showAddFr, setAddFr] = useState(false);
  const [selectedFriend, setSelectForm] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  // function handleShowAdd() {
  //   setAddFr((e) => !e);
  // }.

  function handleAddFriends(friend) {
    setFriends((fr) => [...fr, friend]);
    setAddFr(false);
  }

  function handleSelection(friend) {
    // setSelectForm(friend);
    setSelectForm((selected) => (selected?.id === friend.id ? null : friend));
    setAddFr(false);
  }

  function handleSplitFriend(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectForm(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelecton={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFr && <FormAddFriend onAddFriend={handleAddFriends} />}

        <Button onClick={() => setAddFr(!showAddFr)}>
          {showAddFr ? "close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          setFriends={setFriends}
          handleSplitFriend={handleSplitFriend}
          key={selectedFriend.id} // to make it unique for every component to re-render each time
        />
      )}
    </div>
  );
}

export default App;
