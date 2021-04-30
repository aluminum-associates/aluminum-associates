import client from "./sanityClient"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)

const imageUrl = src => builder.image(src)

export default imageUrl
