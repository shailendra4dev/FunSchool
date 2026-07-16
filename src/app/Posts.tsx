import { useEffect, useState } from "react";
import { fetchPosts } from "./services";



const Posts = () => {

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchPosts();
        if (result?.success == true){
          console.log('[API] getPosts success:', result.data);
          setPosts(result.data);
        } else {
          console.error('[API] getPosts failure: API returned unsuccessful response');
        }
      } catch (err) {
        console.error('[API] getPosts failure:', err);
      }
    };
    load();
  }, []);

  return (
    <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: any) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}
            

export default Posts