import Link from "next/link";
import Image from "next/image";
import moment from "moment";
function PostItem(props) {
    console.log("PostItemDetail", props);
    const { title, background, description, slug, date } = props.post;
    const linkPath = `/posts/${slug}`;
    return (
        <li>
            <Link href={linkPath}>
                <a>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5 mr-5">
                        <Image
                            src={background}
                            alt=""
                            height={480}
                            width={640}
                        ></Image>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                {title}
                            </div>
                            <div className="font-normal text md mb-2">
                                {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
                            </div>
                            <p className="text-gray-700 italic text-base">
                                {description}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
        </li>
    );
}

export default PostItem;
