import Image from 'next/image'
import ErrorImage from '../public/images/404-image.png';
export default function Home() {
  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-3xl font-bold underline text-title2 text-red-500 font-roboto uppercase">
        Hello world!
      </h1>
      <Image src={ErrorImage} alt="me" width="1112" height="466" />
    </div>
  )
}