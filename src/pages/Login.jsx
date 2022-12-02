import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate()
  const onChange = (e) => {
    localStorage.setItem('name',e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/')

  }
  return <div class="flex flex-col justify-center items-center min-h-screen bg-black">
    <img src="division.png" alt="" class="object-scale-down h-48 w-64"/>
    <h1 className='pt-7 pb-7 text-white font-sans text-6xl'>비밀투표</h1>
    <form onSubmit={onSubmit}>
    <select onChange={onChange} className='w-56 h-12 text-center text-2xl font-sans rounded-full'>
      <option value="" className='rounded-full' defaultValue="이름">이름</option>
      <option value="" className='rounded-full'>김태경</option>
      <option value="" className='rounded-full'>변찬우</option>
      <option value="" className='rounded-full'>이상협</option>
      <option value="" className='rounded-full'>이효진</option>
    </select>
    <button className='ml-5 w-20 h-12 text-black bg-white rounded-lg text-lg hover:bg-sky-500 hover:text-white'>로그인</button>
    </form>
  </div>;
};

export default Login;
