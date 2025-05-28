  // Make sure this path matches your CSS file location

export const SkeletonLoader = () => {
  return (
    <div className="max-w-[850px] mx-auto mt-9 p-4 bg-white rounded-lg shadow">
      {/* Top Section: User Info */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full  p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <div className="w-24 h-3 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-16 h-2 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="w-16 h-6 bg-gray-300 rounded-full animate-pulse" />
      </div>

      {/* Image Placeholder */}
      <div className="mt-4 w-full h-96 bg-gray-300 rounded-lg animate-pulse" />

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-4 px-2">
        <div className="flex space-x-4">
          <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse" />
          <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse" />
          <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse" />
        </div>
        <div className="w-10 h-3 bg-gray-300 rounded animate-pulse" />
      </div>
    </div>
  );
}