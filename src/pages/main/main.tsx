import {getDocs, collection, doc} from "firebase/firestore"
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Post{
  id:string;
  userId:string;
  title:string;
  username:string;
  description:string;
}

export const Main = () => {
  const postRef = collection(db,"posts");
  const [postList, setPostList] = useState<Post[] |null>(null);

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]);

  };
  useEffect( () => {
    getPosts();
  } , []);
  return (
  <div className="main">
    {postList?.map((post) => <Post post = {post}/>)}
  </div>);
};
