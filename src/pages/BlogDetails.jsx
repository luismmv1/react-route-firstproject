import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const BlogDetails = () => {
    const params = useParams()
    console.log(params)
    const { data, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if (loading) return <p>Loaging Data....</p>;
    if (error) return <p>Error...</p>;

    return (
        <>
            <h1>
                {data.id} - {data.title}
            </h1>
            <p>{data.body}</p>
            <Link className="btn btn-dark" to="/blog">Volver</Link>
        </>
    );
};
export default BlogDetails;