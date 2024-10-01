// components/ProfileCard.tsx
const ProfileCard = () => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblack-female-avatar&psig=AOvVaw1Sp-PQ2Nh3_t_OYgHPPHIn&ust=1727854391112000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNji16zV7IgDFQAAAAAdAAAAABAE"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Kristin Watson</h2>
            <p className="text-sm text-gray-500">Design Manager</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <span className="text-gray-700 font-bold">83%</span>
            <p className="text-sm text-gray-500">Prioritized tasks</p>
          </div>
          <div>
            <span className="text-gray-700 font-bold">56%</span>
            <p className="text-sm text-gray-500">Additional tasks</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  