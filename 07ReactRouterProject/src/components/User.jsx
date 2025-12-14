import { useParams } from 'react-router-dom'


function User() {

    const {userid} = useParams()
    return (
        <div className='bg-gray-200'>
        <h1 className='text-center p-4 font-bold'>User ID : {userid}</h1>
        </div>
        
    )
}

export default User
