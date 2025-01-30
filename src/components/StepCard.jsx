const StepCard = ({ number, title, description, imageSrc }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-full aspect-[4/3] bg-gray-200 mb-6 rounded-lg overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-bold mb-3">
          Step {number}: {title}
        </h3>
        <p className="text-gray-600 text-center">
          {description}
        </p>
      </div>
    );
  };
  
  export default StepCard;