
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({msg}) => {

    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    
    const fromMySide = authUser._id === msg.senderId;
    const chatClassName = fromMySide ? 'chat-end' : 'chat-start';
    const profilePic = fromMySide ? authUser.profilePic : selectedConversation.profilePic;
    const bubbleBg = fromMySide ? 'bg-violet-800' : '';
    const shakeClass = msg.shouldShake && 'shake';
    
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS chat bubble component"
                    // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    src={profilePic}
                />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBg} ${shakeClass} text-sm`}>{msg.message}</div>
        <div className="chat-footer opacity-50">
            <time className="text-xs text-white opacity-50">{extractTime(msg.createdAt)}</time>
        </div>
  </div>
  )
}

export default Message;
