import React from 'react';
import SalesCard from "./components/salescard.jsx";
import Input from "./components/input.jsx";
import DropdDown from './components/dropdown-menu.jsx';
import PrimaryButton from './components/primary-button.jsx';
import TextArea from './components/TextArea.jsx';
import LeftSideBar from './components/left-sidebar-button.jsx';
import ReactionBar from './components/ReactionBar.jsx';
import PostHeader from './components/post-Header.jsx';
import MenuItem from './components/MenuItem.jsx';
import ReviewItem from './components/review-card.jsx';
import VideoSection from './components/video-post.jsx';
import Res_c_item from './components/res-card-item.jsx';


const Admin = () => {
  return (
    <div >
      <Res_c_item />
      <DropdDown />
      <Input />
      <PrimaryButton />
      <SalesCard />
      <TextArea />
      <ReactionBar />
      <LeftSideBar />
      <PostHeader />
      <ReviewItem />
      <MenuItem />
      <VideoSection />



    </div>
  );
};



export default Admin;


