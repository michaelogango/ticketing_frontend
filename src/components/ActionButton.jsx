const ActionButton = ({ variant = 'secondary', children, onClick }) => {
    const baseStyles = "px-6 py-2 rounded transition-colors inline-flex items-center gap-2";
    const variants = {
      primary: "bg-black text-white hover:bg-gray-800",
      secondary: "border border-gray-300 hover:bg-gray-50"
    };
  
    return (
      <button 
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]}`}
      >
        {children}
      </button>
    );
  };
  
  export default ActionButton;