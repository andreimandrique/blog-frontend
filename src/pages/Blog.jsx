import { useParams } from "react-router"

function Blog(){

  let { blogId } = useParams();

  return(
  <div>
    {blogId}
  </div>
  )
}

export default Blog