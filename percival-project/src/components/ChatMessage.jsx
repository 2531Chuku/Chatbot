import robotImg from "../assets/robot.png";
import userImg from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && <img src={robotImg} className="profile-img" />}
      <div className="message">{message}</div>
      {sender === "user" && <img src={userImg} className="profile-img" />}
    </div>
  );
}
