const Progress = ({ size = 0 }) => {
  return (
    <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        class="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
        style={{ width: `${size}%` }}
      ></div>
    </div>
  );
};

export default Progress;
