import React from "react";
import Loaders from "../components/Loader.jsx";

export default function FilterCard({ tag }) {
  console.log(tag);

  return (
    <>
      <Loaders />

      <div className="w-[300px] flex flex-wrap ">
        <div className="flex flex-wrap w-[500px] ml-[145px] ">
          {Array.isArray(tag) &&
            tag.map((users, index) => (
              <div className="w-[500px] h-[500px] bg-white mt-[20px] shadow-[0_15px_10px_rgba(0,0,0,0.15)]" key={users.id || index}>
                <div className="w-full h-[60px] bg-[#4866af]">
                  <h3 className="font-bold pl-[30px] text-[20px]">Facebook</h3>

                  <div className="pt-[30px] pl-[20px] flex gap-[20px] m-0 cursor-pointer ">
                    <img
                      src="/src/assets/facebook-removebg-preview.png"
                      width="50"
                      alt="Facebook"
                    />

                    <div>
                      <p className="p-0 mt-[10px] mr-[20px] text-[18px] text-center">{users.tags}</p>
                      <p className="p-0 mt-[3px] mr-[20px] text-[12px] text-gray-700">Monday at 11:00 AM</p>
                    </div>
                  </div>

                  <h4 className="ml-[30px] text-[20px] mt-[10px] ">"{users.title}"</h4>

                  <div className="w-full h-[200px]  border-green-700 bg-[#4866af]">
                    <p className="p-0 mt-[10px] mr-[20px]  text-center">{users.body}</p>
                  </div>

                  <div className="flex justify-around mt-[20px] pb-[20px] ">
                    <p className="text-[15px] mt-[15px]">
                      💗😮👍 Lorem and {users.reactions?.likes}
                    </p>
                    <p className="text-[15px] mt-[15px]">55 comments</p>
                  </div>

                  <hr />

                  <div className="flex w-full h-[70px] justify-evenly ">
                    <img
                      className="cursor-pointer"
                      src="/src/assets/thumps_up-removebg-preview.png"
                      alt="Like"
                    />

                    <img
                      className="cursor-pointer"
                      src="/src/assets/comment3-removebg-preview.png"
                      alt="Comment"
                    />

                    <img
                      className="cursor-pointer"
                      src="/src/assets/share2-removebg-preview.png"
                      alt="Share"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}