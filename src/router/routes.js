import Home from "@/views/Home";
import Blog from "@/views/Blog";
import Project from "@/views/Project";
import About from "@/views/About";
import Message from "@/views/Message";


//配置router  匹配规则 
export default [{
        name:"home",
        path: "/",
        component: Home
    },
    {
        name:"blog",
        path: "/blog",
        component: Blog
    },
    {
        name:"project",
        path: "/project",
        component: Project
    },
    {
        name:"about",
        path: "/about",
        component: About
    },
    {
        name:"message",
        path: "/message",
        component: Message
    },
]