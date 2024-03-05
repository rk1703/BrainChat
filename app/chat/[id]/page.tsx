import Chat from "@/components/Chat"
import ChatInput from "@/components/ChatInput"
type Props = {
    params:{
        id:string,
    }
}

function page({params:{id}}: Props) {
   
  return (
    <div className="flex flex-col overflow-hidden h-screen">
        {/* chat  */}
        <Chat chatId={id}/>
        {/* chat input */}
        <ChatInput chatId={id}/>
    </div>
  )
}

export default page