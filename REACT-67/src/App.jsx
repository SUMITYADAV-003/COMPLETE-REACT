import React from "react";
import "./style.css";

const App = () => {
  return (
    <div className="image">
      <div className="top">
        <button>
          <i class="ri-heart-line"></i> 11
        </button>
        <button>
          <i class="ri-chat-1-line"></i>
        </button>
        <button>
          <i class="ri-share-2-line"></i>
        </button>
        <button>
          <i class="ri-more-fill"></i>
        </button>

        <div className="top-right">
          <button>
            <b>Profile</b> <br /> <i class="ri-arrow-drop-down-line"></i>
          </button>
          <button className="save">save</button>
        </div>
     
      </div>
         <div className="footerright">
          <button>
            <i class="ri-expand-diagonal-s-line"></i>
          </button>
          <button>
            <i class="ri-search-ai-2-line"></i>
          </button>
        </div>
    </div>
  );
};

export default App;
