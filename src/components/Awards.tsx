const Awards = () => {
  return (
    <div className="bg-accenture-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
          Global recognition and awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-red-500 aspect-video rounded-lg" />
          <div className="bg-purple-500 aspect-video rounded-lg" />
          <div className="bg-blue-500 aspect-video rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Awards;