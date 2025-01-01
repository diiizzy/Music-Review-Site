import './albumlist.css'
import Link from 'next/link';
import { getAllPosts } from '../utils/postInterface';




export default function AlbumList() {
    const reviews = getAllPosts('reviews');
    console.log(reviews);

    return (
        <div className='image-track'>
            {reviews.map((review, index) => (
                <>
                    <Link href={`/posts/${review.slug}`} draggable='false'>
                        <img key={index} className="image" src={`${review.photopath}`} draggable="false"/>
                    </Link>
                </>
            ))}
        </div>
    );
}