const Loading: React.FC = () => {
  return (
    <div className='z-50 top-0 left-0 fixed w-screen h-screen bg-black bg-opacity-40 backdrop-blur-lg flex justify-center items-center'>
      <h2 className='text-5xl text-white font-bold'>Planning Your Trip...</h2>
    </div>
  );
};

export default Loading;
