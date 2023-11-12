import errorPhoto from '../../assets/404.gif'
const ErrorPage = () => {
    return (
        <div>
            <img src={errorPhoto} alt="" className='w-full'/>
        </div>
    );
};

export default ErrorPage;