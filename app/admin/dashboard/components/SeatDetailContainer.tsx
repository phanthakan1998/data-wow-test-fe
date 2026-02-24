import BadgeIcon from "@/assets/icons/BadgeIcon";
import CloseCircleIcon from "@/assets/icons/CloseWithCircleIcon";
import PersonIcon from "@/assets/icons/PersonIcon";
import DisplayBox from "@/components/DisplayBox";

export default function SeatDetailContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <DisplayBox
        title="Total Concerts"
        value={500}
        icon={<PersonIcon size={40} />}
        bgColor="bg-[#0070A4]"
        className="rounded-lg"
      />
      <DisplayBox
        title="Reserve"
        value={120}
        icon={<BadgeIcon size={40} />}
        bgColor="bg-[#00A58B]"
        className="rounded-lg"
      />
      <DisplayBox
        title="Reserve"
        value={12}
        icon={<CloseCircleIcon size={40} />}
        bgColor="bg-[#E84E4E]"
        className="rounded-lg"
      />
    </div>
  );
}
