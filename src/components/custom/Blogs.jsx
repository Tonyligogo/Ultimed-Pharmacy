import Blog1 from "../../assets/blog11.jpg";
import Blog2 from "../../assets/blog22.jpg";
import Blog3 from "../../assets/blog33.jpg";
function Blogs() {
  return (
    <div className="px-[80px] my-[80px]">
      <h2 className="text-2xl mb-6 font-semibold">Articles & Tips</h2>
    <div className="grid grid-cols-3 gap-4 justify-between">
      <div className="flex flex-col gap-2">
        <img
          src={Blog1}
          className="w-[350px] h-[235px] object-cover aspect-auto rounded-lg"
          alt="blog post image"
        />
        <div>
          <h2 className="font-semibold">Covaxin vs Covashield - A detailed comparison</h2>
          <p className="text-sm text-gray-400 mb-2">Treatments that your skin care benefits of and enjoy</p>
          <button className="underline underline-offset-2">Read More</button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img
          src={Blog2}
          className="w-[350px] aspect-auto rounded-lg"
          alt="blog post image"
        />
        <div>
          <h2 className="font-semibold">Brush Your Way to a Brighter Smile</h2>
          <p className="text-sm text-gray-400 mb-2">Discover the secrets to a dazzling grin with our expert brushing guide.</p>
          <button className="underline underline-offset-2">Read More</button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img
          src={Blog3}
          className="w-[350px] aspect-auto rounded-lg"
          alt="blog post image"
        />
        <div>
          <h2 className="font-semibold">Skincare Secrets for a Youthful Glow</h2>
          <p className="text-sm text-gray-400 mb-2">Unlock the secrets to younger-looking skin with our expert advice.</p>
          <button className="underline underline-offset-2">Read More</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Blogs;
