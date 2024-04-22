import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border-blue-600 rounded-xl p-2">
                    <img
                        src={appwriteService.previewFile(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6 flex justify-center">
                    <h2 className="text-4xl font-bold font-serif text-blue-700">{post.title}</h2>
                </div>

                <div className="w-full flex justify-center">
                <div className="w-4/5 browser-css text-xl font-normal font-serif text-justify">
                    {parse(post.content)}
                </div>
                </div>
             
                <Link to="/all-blogs" className="text-2xl font-medium font-serif flex justify-end items-center mt-5 text-blue-800 hover:text-blue-500 duration-300">
                <ArrowBackIcon className=""></ArrowBackIcon> Back
                </Link>

            </Container>
        </div>
    ) : null;
}