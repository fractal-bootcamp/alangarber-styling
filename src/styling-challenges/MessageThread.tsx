import Message from "../components/Message";
import { MessageInterface } from "../interfaces/MessageInterface";
import { BootcampLogo, Helena } from "../objects/users";

const MessageThreadData: MessageInterface[] = [
  {
    id: 0,
    conversationIndex: 0,
    user: Helena,
    text: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
  },
  {
    id: 1,
    conversationIndex: 1,
    user: Helena,
    text: "I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet.",
  },
  {
    id: 2,
    conversationIndex: 2,
    user: BootcampLogo,
    text: "I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.",
  },
  {
    id: 3,
    conversationIndex: 3,
    user: Helena,
    text: "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
  },
];

function MessageThread() {
  const owner = Helena;

  return (
    <>
      <div className="p-4">
        <div className="text-3xl">Message Thread</div>
        <div className="flex flex-col gap-4 mt-4">
          {MessageThreadData.map((message: MessageInterface) => {
            return (
              <Message
                authorIsOwner={message.user === owner}
                name={message.user.name}
                prevAuthor={
                  MessageThreadData[message.conversationIndex - 1]?.user ===
                  message.user
                }
                nextAuthor={
                  MessageThreadData[message.conversationIndex + 1]?.user ===
                  message.user
                }
                text={message.text}
                image={message.user.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MessageThread;
