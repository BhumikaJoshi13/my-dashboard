// components/TasksCard.tsx
interface TasksCardProps {
    title: string;
    percentage: number;
  }
  
  const TasksCard: React.FC<TasksCardProps> = ({ title, percentage }) => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{percentage}%</p>
      </div>
    );
  };
  
  export default TasksCard;
  