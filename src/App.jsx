import './App.css';
import useFetch from './hook/useFetch';
import placeHolderImage from './assets/image-placeholder2.jpg';

function App() {
  // const { data, loading, error, refetch } = useFetch('https://api.escuelajs.co/api/v1/products');
  const { data, loading, error, refetch } = useFetch('https://fakestoreapi.com/products');
  console.log(data);
  
  if (loading) {
    return (
      <div className='w-screen min-h-screen flex flex-col items-center justify-center bg-slate-800'>
        <div className="">
          <p className='text-slate-50 text-lg'>Loading...</p>
        </div>
      </div>
    );
  }
        
  if (error) {
    return (
      <div className='w-screen min-h-screen flex flex-col items-center justify-center bg-slate-800'>
        <div className="bg-slate-700 p-8 rounded-lg shadow-lg max-w-lg h-fit flex flex-col justify-center items-center text-center">
          <h1 className="w-100 text-4xl font-bold text-white mb-4">Error</h1>
          <p className="w-100 text-slate-100 text-center mb-6">{error}</p>
          <button className="w-100 bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-8 rounded-lg transition-colors duration-200" onClick={refetch}>Try Again</button>
        </div>
      </div>
    );
  }
    
  return (
    <div className='w-full max-w-screen min-h-screen flex flex-col items-center justify-start bg-slate-800 py-10 px-5 md:px-10 lg:px-16 xl:px-32'>
      <div className='w-full max-w-7xl h-fit flex items-center justify-between mb-12'>
        <h1 className='text-left text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>All Products</h1>
        <button type='button' onClick={refetch} className='w-fit bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200'>Refresh Data</button>
      </div>
      <div className='w-full max-w-7xl min-h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-5 gap-y-5'>
        {data?.map(product => (
          <div key={product.id} className='col-span-1 px-6 py-6 min-h-100 max-h-fit bg-slate-700 rounded-lg shadow-sm flex flex-col justify-center items-center gap-6 overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-in-out'>
            <div className='bg-slate-600 p-4 rounded-lg flex items-center justify-center'>
              <img src={product.image || placeHolderImage} loading='lazy' alt={product.title} className='aspect-square object-contain' />
            </div>
            <div className="w-full h-fit flex flex-col justify-start items-start gap-0">
              <h6 className='w-auto text-left text-xl lg:text-2xl capitalize text-white font-medium mb-3 line-clamp-1'>{product.title}</h6>
              <p className='w-fit flex flex-nowrap items-center justify-center text-center text-sm font-medium px-3 py-1 bg-slate-50/20 text-slate-100 rounded-full mb-3'>{product.category}</p>
              <p className='w-full min-h-[48px] text-left text-base text-slate-300 line-clamp-2 mb-5'>{product.description}</p>
              <p className='w-100 text-left text-3xl font-bold text-indigo-400'>{`$${product.price.toFixed(2)}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App
