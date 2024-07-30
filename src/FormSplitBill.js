import { useState, React } from "react";
import { Button } from "./App";

export function FormSplitBill({ selectedFriend, handleSplitFriend }) {
  const [totalBill, setTotalBill] = useState("");
  const [paidByUser, setpaidByUser] = useState("");
  const paidByFriend = totalBill ? totalBill - paidByUser : "";
  const [whoPay, setWhoPay] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!totalBill || !paidByUser) {
      return;
    }

    handleSplitFriend(whoPay === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="number"
        onChange={(e) => setTotalBill(Number(e.target.value))}
        value={totalBill}
      />

      <label>🕴 Your expense</label>
      <input
        type="text"
        onChange={(e) =>
          setpaidByUser(
            Number(e.target.value) > totalBill
              ? paidByUser
              : Number(e.target.value)
          )
        }
        value={paidByUser}
      />

      <label> 👫 {selectedFriend.name} Your Friend</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>

      <select onChange={(e) => setWhoPay(e.target.value)} value={whoPay}>
        <option value={"user"}>You</option>
        <option value={"friend"}>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
