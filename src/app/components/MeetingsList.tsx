// components/MeetingsList.tsx
const meetings = [
    { id: 1, title: 'Quick Daily Meeting', time: '08:15 AM', platform: 'Zoom' },
    { id: 2, title: 'John Onboarding', time: '09:30 PM', platform: 'Google Meet' },
    { id: 3, title: 'Call with New Team', time: '02:30 PM', platform: 'Google Meet' },
    { id: 4, title: 'Lead Designers Event', time: '04:00 PM', platform: 'Zoom' },
  ];
  
  const MeetingsList = () => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4">My Meetings</h3>
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id} className="flex justify-between py-2">
              <span>{meeting.title}</span>
              <span>{meeting.time}</span>
              <span>{meeting.platform}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MeetingsList;
  