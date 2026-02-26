import BadgeIcon from "@/assets/icons/BadgeIcon";
import CloseCircleIcon from "@/assets/icons/CloseWithCircleIcon";
import PersonIcon from "@/assets/icons/PersonIcon";
import DisplayBox from "@/components/DisplayBox";
import { IDashboardSummary } from "@/interfaces/concert";

interface ISeatDetailContainerProps {
  dashboardDetail: IDashboardSummary;
}

export default function SeatDetailContainer({
  dashboardDetail,
}: ISeatDetailContainerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <DisplayBox
        title="Total Seats"
        value={dashboardDetail.totalSeats}
        icon={<PersonIcon size={40} />}
        bgColor="bg-[#0070A4]"
        className="rounded-lg"
      />
      <DisplayBox
        title="Reserve"
        value={dashboardDetail.totalReserved}
        icon={<BadgeIcon size={40} />}
        bgColor="bg-[#00A58B]"
        className="rounded-lg"
      />
      <DisplayBox
        title="Cancel"
        value={dashboardDetail.totalCanceled}
        icon={<CloseCircleIcon size={40} />}
        bgColor="bg-[#E84E4E]"
        className="rounded-lg"
      />
    </div>
  );
}
