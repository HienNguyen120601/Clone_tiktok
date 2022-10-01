import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import { upload } from '@testing-library/user-event/dist/upload';
const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/following', component: Following
    },
    {
        path: '/profile', component: Profile
    },
    {
        path: '/upload', component: Upload, layout: null
    }

]


const privateRoutes = []


export { publicRoutes, privateRoutes }