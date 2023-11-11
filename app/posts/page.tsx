import { CardList } from "../components/posts/CardList";
import { ViewUserButton } from "../components/posts/ViewUserButton";

const bsae_url = `https://jsonplaceholder.typicode.com/posts`;
interface Ipost {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = async () => {
  const response = await fetch(bsae_url, {
    cache: 'no-store'
  });
  const post: Ipost[] = await response.json();
  return (
    <>
      <div className=" text-fuchsia-500">POST PAGE</div>
      {
        post.map((posts) => {
            return(
                <CardList key={posts.id}>
                    <h3 className=" font-bold">{posts.title} - {posts.id}</h3>
                    <p>{posts.body}</p>
                    <ViewUserButton userId={posts.userId}/>
                </CardList>
            )
        })
      }
    </>
  );
};

export default Posts;
