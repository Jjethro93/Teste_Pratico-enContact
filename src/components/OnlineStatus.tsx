
interface onlineStatusProps {
    variant?: "online" | "offline"
}
const OnlineStatus = ({variant="online"}: onlineStatusProps) => {
    const variants={
        online: "bg-green-500",
        offline: "bg-gray-300"
    }

    return (
        <span className={`absolute bottom-1 right-0 w-4 h-4 rounded-full border-2 border-white ${variants[variant]}`}></span>
    )
}


export default OnlineStatus