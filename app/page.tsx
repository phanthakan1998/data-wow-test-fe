import ConcertCard from "@/components/ConcertDetailCard";
import DisplayBox from "@/components/DisplayBox";
import AdminLayout from "@/components/Sidebar";

export default function Home() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <DisplayBox
            title="Total of seats"
            value={500}
            bgColor="bg-blue-600"
          />
          <DisplayBox title="Reserve" value={120} bgColor="bg-emerald-600" />
          <DisplayBox title="Cancel" value={12} bgColor="bg-red-500" />
        </div>

        <div>
          <div className="flex gap-6 border-b border-gray-200 mb-6">
            <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">
              Overview
            </button>
            <button className="text-gray-500 hover:text-gray-700 pb-2">
              Create
            </button>
          </div>

          <div className="space-y-6">
            <ConcertCard
              title="Concert Name 1"
              description="Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non. Fusce dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque."
              attendees={500}
            />

            <ConcertCard
              title="Concert Name 2"
              description="Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non."
              attendees={200}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
