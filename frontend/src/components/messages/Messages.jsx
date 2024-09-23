import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import { useEffect,useRef } from 'react';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages,loading} = useGetMessages();
  console.log("messages:",messages);
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect( () => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior : "smooth" });
    }, 100);
  },[messages]);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      { !loading && messages.length > 0 && messages.map((message) => {
       return <div key = {message._id} ref={lastMessageRef}>
          < Message msg = {message} />
        </div>
      })}
      { loading && [...Array(3)].map((_,idx) => <MessageSkeleton key= {idx} />) }
      {!loading && messages.length === 0 &&
      (<p className='p-2 text-center text-gray-300'>Send a message to start a conversation</p>
      ) }
    
    </div>
  );
};
export default Messages;