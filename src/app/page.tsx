//import Image from "next/image";
import ProfileCard from '@/app/components/ProfileCard';
import TasksCard from '@/app/components/TasksCard';
import AnalyticsGraph from '@/app/components/AnalyticsGraph';
import MeetingsList from '@/app/components/MeetingsList';
import DevelopedAreas from '@/app/components/DevelopedAreas';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <ProfileCard />
          <AnalyticsGraph />
        </div>

        {/* Middle Column */}
        <div className="space-y-8">
          <TasksCard title="Prioritized tasks" percentage={83} />
          <TasksCard title="Additional tasks" percentage={56} />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <MeetingsList />
          <DevelopedAreas />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
