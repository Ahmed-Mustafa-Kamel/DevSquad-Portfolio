import { FaYoutube } from "react-icons/fa6";
const Youtube = [
  {
    name: "Deer Code",
    url: "https://www.youtube.com/@deercode01",
  },
  {
    name: "s7so Code",
    url: "https://www.youtube.com/@s7so-code?app=desktop",
  },
];
const YouTubeChannels = () => {
  return (
    <div className="text-gray-200 my-6 flex flex-col">
      <h2 className="text-gray-200 text-lg md:text-3xl font-bold ">
        YouTube Channels
      </h2>

      <div className="flex gap-4 text-sm md:text-lg items-center">
        {Youtube.map((channel, index) => (
          <a
            key={index}
            href={channel.url}
            className="flex items-center text-gray-300"
          >
            {channel.name}
            <FaYoutube className="text-3xl text-red-600" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default YouTubeChannels;
