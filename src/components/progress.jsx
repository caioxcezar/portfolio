const Progress = ({ size = 0 }) => {
  return (
    <div class="w-full h-6 bg-gray-500 rounded-full">
      <div
        class="h-6 bg-indigo-500 rounded-full"
        style={{ width: `${size}%` }}
      ></div>
    </div>
  );
};

export default Progress;
