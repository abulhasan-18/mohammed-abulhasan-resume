export default function ResumeJob({
  title,
  duration,
  description,
}) {
  return (
    <div className="ml-4">
      {/* Title + Duration */}
      <h4 className="text-[14px] font-semibold text-gray-900 leading-snug">
        {title}
        <span className="text-gray-500 font-normal">
          {" "}· {duration}
        </span>
      </h4>

      {/* Description */}
      <p className="text-[12px] text-gray-800 leading-relaxed mt-2">
        {description}
      </p>
    </div>
  );
}