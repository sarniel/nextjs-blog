import Link from "next/link";

export default function FeaturedImage({ post }) {
    let img = "";
    const defaultFeaturedImage =
        "https://wp.abhinavr.com/wp-content/uploads/2022/12/travel_icy-polar_022K.jpg";
    const defaultWidth = "300";
    const defaultHeight = "200";
    if (post.featuredImage) {
        let size = post.featuredImage.node.mediaDetails.sizes[0];
        console.log(size);
        img = {
            src: size.sourceUrl,
            width: size.width,
            height: size.height,
        };
    } else {
        img = {
            src: defaultFeaturedImage,
            width: defaultWidth,
            height: defaultHeight,
        };
    }

    return (
        <Link href={`${post.slug}`}>
            <img
                className="rounded-l-xl max-w-full"
                src={img.src}
                width={img.width}
                height={img.height}
                alt={post.title}
            />
        </Link>
    );
}
