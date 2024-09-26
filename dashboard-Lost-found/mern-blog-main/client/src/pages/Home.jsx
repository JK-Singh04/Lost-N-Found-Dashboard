import { Link } from 'react-router-dom';
import CallToAction from '../../../api/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import HeadlineCards from '../components/HeadlineCards'
import tietImage from './tiet.png'; 


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-7 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to LOST N FOUND Store</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        Discover, report, and reconnect with lost items in just a few clicks.
         Whether you've found or lost something, our portal helps you quickly post, search, and recover belongings.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>

      <div className='max-w-[1640px] mx-auto p-4'>
  <div className='max-h-[500px] relative'>
    {/* Overlay */}
    <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center items-center'>
      <h1 className='text-center px-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4'>
        Find What's <span className='text-blue-500'>Lost</span>,<br />
        Reclaim What's <span className='text-blue-500'>Found</span>.<br />
        Your Items, Our Priority.
      </h1>
      <Link to={'/landing-page'} className='text-sm sm:text-lg text-gray-200 font-bold hover:underline'>
        Click Here to get started...
      </Link>
    </div>
    <img className='w-full max-h-[500px] object-cover' src={tietImage} alt="" />
  </div>
</div>

          {/* Headline Cards */}
           <HeadlineCards />  

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
