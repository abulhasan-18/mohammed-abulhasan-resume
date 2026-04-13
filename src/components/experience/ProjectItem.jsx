export default function ProjectItem({
  title,
  technologies,
  duration,
  description,
  points = [],
}) {
  return (
    <div className="mb-6">

      {/* Title + Duration */}
      <h4 className="text-[14px] font-semibold text-gray-900 leading-snug">
        {title}
        <span className="text-gray-500 font-normal">
          {" "}· {duration}
        </span>
      </h4>

      {/* Technologies */}
      <p className="text-[12px] text-gray-600 mb-2">
        {technologies}
      </p>

      {/* Description */}
      <p className="text-[12px] text-gray-800 leading-relaxed mb-2">
        {description}
      </p>

      {/* Bullet Points */}
      {points.length > 0 && (
        <ul className="text-[12px] text-gray-800 list-disc pl-5 space-y-1">
          {points.map((point, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      )}
    </div>
  );
}