import React from "react";
import Loaders from "../components/Loader.jsx";

export default function FilterCard({ tag }) {
  console.log(tag);

  return (
    <>
      <Loaders />

      <div className="big">
        <div className="postContainer-1">
          {Array.isArray(tag) &&
            tag.map((users, index) => (
              <div className="smallContainer" key={users.id || index}>
                <div className="blue">
                  <h3>Facebook</h3>

                  <div className="icon">
                    <img
                      src="/src/assets/facebook-removebg-preview.png"
                      width="50"
                      alt="Facebook"
                    />

                    <div>
                      <p className="name">{users.tags}</p>
                      <p className="date">Monday at 11:00 AM</p>
                    </div>
                  </div>

                  <h4 className="email">{users.title}</h4>

                  <div className="bigImage">
                    <p className="name">{users.body}</p>
                  </div>

                  <div className="reacts">
                    <p className="put">
                      💗😮👍 Lorem and {users.reactions?.likes}
                    </p>
                    <p className="put">55 comments</p>
                  </div>

                  <hr />

                  <div className="logos">
                    <img
                      className="like"
                      src="/src/assets/thumps_up-removebg-preview.png"
                      alt="Like"
                    />

                    <img
                      className="like"
                      src="/src/assets/comment3-removebg-preview.png"
                      alt="Comment"
                    />

                    <img
                      className="like"
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