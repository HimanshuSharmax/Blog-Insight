import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import bannerImg from "../assets/aboutImg.png"
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';



function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)


    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full pt-7'>
            <Container>
                <h2 className='text-5xl font-bold font-serif text-gray-300 flex justify-center'>Welcome to Blog Insight</h2>

                <div className='text-2xl font-normal font-serif text-zinc-400 flex justify-center mt-6'>

                    <p className='pl-7 pr-12  text-justify	'>
                    Welcome to our blog platform, where you're the master of your narrative. Seamlessly create, update, and delete posts with ease. Our user-friendly interface puts you in control. Enhance your storytelling with captivating visuals – effortlessly add pictures to your posts. Whether you're a seasoned blogger or a passionate novice.
                    <br/>
                    Our platform empowers you to share your stories authentically. From travel escapades to culinary delights, let your creativity flourish. Start crafting compelling content today and connect with your audience in a meaningful way. Join us and unleash your creativity on the digital stage!
                    </p>

                    <img className='w-4/5 h-60' src={bannerImg} />
                </div>


                {!authStatus ? (
                <h3 className='text-2xl font-medium font-serif flex justify-center mt-5 text-blue-500 hover:text-red-400 hover:scale-105 duration-300'>
                    <Link to="/login">Login to Read and Create Blogs!</Link>
                </h3>        
                ) : (
                    <h3 className='text-2xl font-medium font-serif flex justify-center mt-5 text-blue-500 hover:text-red-400 hover:scale-105 duration-300'>
                    <Link to="/all-blogs">Read all Blogs!</Link>
                    </h3> 
                )}

            </Container>
        </div>
    )
}

export default Home