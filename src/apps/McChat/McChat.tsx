import SideBar from './components/SideBar/SideBar';
import MessageList from "./components/MessageList";
import ChatContent from "./components/ChatContent";

const McChat = () => {
    return <div>
        <SideBar></SideBar>
        <MessageList></MessageList>
        <ChatContent></ChatContent>
    </div>;
};

export default McChat;
