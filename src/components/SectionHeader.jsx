const SectionHeader = ({ label, title, description }) => {
    return (
      <div className="text-center mb-16">
        <span className="text-sm uppercase tracking-wider text-gray-600">
          {label}
        </span>
        <h2 className="text-3xl font-bold mb-4 mt-2">
          {title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    );
  };
  
  export default SectionHeader;