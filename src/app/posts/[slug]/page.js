import { getAllPosts } from "../../../../utils/postInterface";
import { Spotify } from "react-spotify-embed";
import MarkdownIt from "markdown-it";
import { Merienda, Merriweather } from "next/font/google";
import { Montserrat } from "next/font/google";

export const merriweather = Merriweather({
    subsets: ['latin'],
    weight: '700',
});

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '500',
});

const md = new MarkdownIt();


async function fetchPost(slug) {
    const posts = getAllPosts('reviews');
    return posts.find((post) => post.slug === slug);
};

export default async function Post({ params }) {

    const post = await fetchPost(params.slug);

    const htmlConverter = md.render(post.content);

    return (
        <>
            <div className="albuminfo">
                <img className='reviewphoto' src={post.photopath}></img>
                <div className={`${montserrat.className} albumtitle`}>{post.title}</div>
                <div className={`${montserrat.className} artistname`}> by {post.artist}</div>
                <div className={`${montserrat.className} date`}> Date Released: {post.daterelease}</div>
                <Spotify className="playlist" link={post.spotify}></Spotify>
            </div>
            <article className="review">
                <div className={`${montserrat.className} content`} dangerouslySetInnerHTML={{__html: htmlConverter}}></div>
            </article>
        </>
    )
}