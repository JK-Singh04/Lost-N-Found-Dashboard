import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function PostCard({ post }) {
  const isLost = post.category === 'LOST';
  const categoryStyles = isLost
    ? 'bg-red-600 text-white border-red-600'
    : 'bg-green-600 text-white border-green-600';

  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold  line-clamp-2">{post.title}</h3>

        {/* Category and Location on the same line */}
        <div className="flex justify-between items-center mt-2">
          {/* Category label with color and border */}
          <span className={`inline-block text-sm font-semibold px-3 py-1 rounded-full border ${categoryStyles}`}>
            {post.category}
          </span>

          {/* Location with icon */}
          <div className="flex items-center">
            <MdLocationOn className="h-5 w-5 text-red-500" />
            <span className="ml-1 italic">{post.location}</span>
          </div>
        </div>

        <div className="mt-3 text-sm">
          {/* Item Category */}
          <p className="italic">
            <span className="font-semibold">Item Category:</span> {post.itemCategory}
          </p>
        </div>

        {/* View Post Button */}
        <Link
          to={`/post/${post.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          View Post
        </Link>
      </div>
    </div>
  );
}
