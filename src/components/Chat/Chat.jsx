/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */

export default function SingleChat({ chat, setCurrentChat }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={() => setCurrentChat(chat)}
      className="flex flex-row py-4 px-2 justify-center items-center border-b-2"
    >
      <div className="w-1/4">
        <img
          src={
            chat.Users?.profileImage ||
            "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          }
          // src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
          className="object-cover h-12 w-12 rounded-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="text-lg font-semibold">{chat.Users.name}</div>
        <span className="text-gray-500">{chat.LatestMessage[0]?.text}</span>
      </div>
    </div>
  );
}
