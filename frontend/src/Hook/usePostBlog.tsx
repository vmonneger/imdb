import {LocalBlogPost} from "../Interface/LocalBlogPost";

export default function usePostBlog() {
    return (token: string, blog: LocalBlogPost) => {
        return fetch('http://localhost:2345/post-blog.php', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: new URLSearchParams({
                title: blog.title,
                content: blog.content
            })
        })
            .then(res => res.json())
    }
}
