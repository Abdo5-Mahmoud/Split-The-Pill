import { React } from "react";
import { Friend } from "./Friend";

export function FriendsList({ friends, onSelecton, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelecton={onSelecton}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
