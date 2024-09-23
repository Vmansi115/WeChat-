import { useSocketContext } from '../../context/SocketContext';
import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation, lastIdx,emoji}) => {
    const {selectedConversation , setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
    <div onClick={()=>{ setSelectedConversation(conversation); }}
            className={` ${isSelected ? 'bg-violet-800' : ''} flex gap-2 items-center hover:bg-violet-800 rounded p-2 py-1 transition-all duration-150 cursor-pointer `}
        >
        <div className={`avatar ${isOnline && 'online'} `} >
            <div className="w-12 rounded-full fill-slate-100">
                <img src={conversation.profilePic} alt="user avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{conversation.fullName}</p>
                <span className="text-xl">{emoji}</span>
            </div>
        </div>
    </div>
    <div className="divider my-0 py-0 h-1"/>
    {!lastIdx && <div className="divider my-0 py-0 h-1"/>}
    </>
  );
};

export default Conversation;

/*
const Conversation = () => {
  return (
    <>
    <div className="flex-gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://cdn0.iconfinder" alt="user avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">Aish Trump</p>
                <span className="text-xl">:)</span>
            </div>
        </div>
    </div>
    <div className="divider my-0 py-0 h-1"/>
    </>
  );
};

export default Conversation;*/
