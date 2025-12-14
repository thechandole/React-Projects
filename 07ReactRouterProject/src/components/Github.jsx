import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();

    // const [data, setData] = React.useState([]);
    // // const [profile, setProfile] = React.useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/thechandole')
    //     .then(res => res.json())
    //     .then(res => setData(res))
    //     // && setProfile(res.avatar_url))

    // }, [])
    return (
        <div className='p-4 border bg-gray-200 text-center font-bold'>
        <h1 className='m-4 text-2xl'>Github Followers : {data.followers}</h1>
        <img className='m-auto mb-2 rounded-full w-75' src={data.avatar_url} alt="Akash Chandole" />
        
        </div>
    )
}

export default Github

export const githubLoaderInfo = async() => {
    const res = await fetch('https://api.github.com/users/thechandole');
     return res.json();
}
