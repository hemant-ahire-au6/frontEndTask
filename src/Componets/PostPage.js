import React, { useEffect } from 'react'
import { Grid } from "@mui/material"
import { API_KEY, API_LINK } from '../api';
import PostPagesCard from './PostPagesCard';


function PostPage() {

    const [postData,setPostData] = React.useState([])

    useEffect(() => {
        fetch(`${API_LINK}/posts/?key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setPostData(data.posts))
    }, [])

    let withoutMetaDescription = postData.filter(data =>{
        return data.meta_description === null
    });

    let withoutFeaturedImage = postData.filter(data =>{
        return data.feature_image === null
    });
  

    let tooLongMetaDescription = postData.filter(data =>{
        return data.meta_description !== null &&  data.meta_description.length >100
    });

    let tooLongUrl = postData.filter(data =>{
        return data.url.length > 100
    });

    let tooShortPost = postData.filter(data =>{
        return data.html.length > 250
    });
;
    let tooLongPost  = postData.filter(data =>{
        return data.html.length > 1500
    });
;

    return (
        <>
            <Grid container className="post-page-container" >
                <Grid item xs={10} >
                    <Grid container >
                        <Grid item xs={12} md={6} xl={4}>
                            <PostPagesCard title="WITHOUT META DESCRIPTION"  data={withoutMetaDescription}/>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <PostPagesCard title="WITHOUT FEATURED IMAGE" data={withoutFeaturedImage}/>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <PostPagesCard  title="TOO SHORT POST,BELOW 250 WORDS"data={tooShortPost}/>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <PostPagesCard title="TOO LONG META DESCRIPTION" data={tooLongMetaDescription}/>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <PostPagesCard  title="TOO LONG URL,MORE THA 100 CHARS"data={tooLongUrl}/>
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <PostPagesCard  title="TOO LONG POST ,ABOVE 1500 CHARS "data={tooLongPost}/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </>
    )
}

export default PostPage;






