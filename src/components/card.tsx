interface CardProps {
  children: React.ReactNode;
  title: string;
}

function Card({ children, title }: CardProps) {
  return (
    <div className="flex-1 w-full bg-white rounded-2xl py-3 px-2">
      {title && (
        <h3 className="bg-[#F8F8F8] py-3 px-4 text-xs mdl:text-sm mb-3 rounded-lg capitalize">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

export default Card;
