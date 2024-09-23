import {BsSend} from 'react-icons/bs';
import {useState} from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [loading, sendMessage] = useSendMessage();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!message) return; 
    await sendMessage(message);
    setMessage("");
  }
    return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-300 border-gray-400 text-gray-900"
            placeholder="Send a message"
            value={message}
            onChange={(e)=> setMessage(e.target.value)} />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                {loading ? <div className='loading loading-spinner'></div> :
                <BsSend/> }
            </button>
        </div>
    </form>
);
};

export default MessageInput;
/*import {BsSend} from 'react-icons/bs';
const MessageInput = () => {
  return (
    <div className="px-4 my-3">
        <div className="w-full">
            <input type="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-300 border-gray-400 text-white"
            placeholder="Send a message" />
            <button type="submit" className="bsolute inset-y-0 end-0 flex items-center pe-3">
                <BsSend/>
            </button>
        </div>
    </div>
);
};

export default MessageInput;*/