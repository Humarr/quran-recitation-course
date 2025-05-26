interface CourseModuleCardProps {
  number: number;
  title: string;
  description: string;
}

export default function CourseModuleCard({ number, title, description }: CourseModuleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary text-accent font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-4">
            {number}
          </div>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        <p className="text-primary-dark">{description}</p>
      </div>
    </div>
  );
}