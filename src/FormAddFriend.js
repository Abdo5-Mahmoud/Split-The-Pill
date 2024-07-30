import { useState, React } from "react";
import { Button } from "./App";

export function FormAddFriend({ onAddFriend }) {
  // const [information, setInformation] = useState();
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.");

  function handelSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: id,
    };
    onAddFriend(newFriend);
    console.log(newFriend);
    setImage("https://i.ares");
    setName("");
  }
  return (
    <form className="form-add-friend" onSubmit={handelSubmit}>
      <label>Friend nake name 👬</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📸 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
