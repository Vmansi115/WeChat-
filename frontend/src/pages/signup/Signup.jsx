import { Link } from 'react-router-dom';
import GenderCheckbox from '../signup/GenderCheckbox';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [inputs,setInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender:'',
  });
  const {loading,signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }
  return ( <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg
    bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Signup
        <span className="text-blue-500">ChatApp</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-200">Fullname</span>
          </label>
          <input type='text' placeholder="Aish Trump" className="w-full input input-bordered h-10" 
          value={inputs.fullName} 
          onChange={((e) => setInputs({...inputs,fullName: e.target.value}))} />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-200">Username</span>
          </label>
          <input type='text' placeholder="aishtrump" className="w-full input input-bordered h-10" 
          value={inputs.userName}
          onChange={((e) => setInputs({...inputs,userName: e.target.value}))}/>
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-200">Password</span>
          </label>
          <input type='password' placeholder="Enter password" className="w-full input input-bordered h-10" 
          value={inputs.password}
          onChange={((e) => setInputs({...inputs,password: e.target.value}))}/>
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-200">Confirm Password</span>
          </label>
          <input type='text' placeholder="Confirm Password" className="w-full input input-bordered h-10"
          value={inputs.confirmPassword}
          onChange={((e) => setInputs({...inputs,confirmPassword: e.target.value}))} />
        </div>

        <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>
        <Link to ={'/login'} className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block text-gray-200">Already have an account?</Link>
        <button className="btn btn-block btn-sm mt-2" disabled={loading}>
          {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default Signup;


/*import GenderCheckbox from '../signup/GenderCheckbox';
const Signup = () => {
  return ( <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg
    bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Signup
        <span className="text-blue-500">ChatApp</span>
      </h1>
      <form>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-200">Fullname</span>
          </label>
          <input type='text' placeholder="Aish Trump" className="w-full input input-bordered h-10" />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-200">Username</span>
          </label>
          <input type='text' placeholder="aishtrump" className="w-full input input-bordered h-10" />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-200">Password</span>
          </label>
          <input type='password' placeholder="Enter password" className="w-full input input-bordered h-10" />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-200">Confirm Password</span>
          </label>
          <input type='text' placeholder="Confirm Password" className="w-full input input-bordered h-10" />
        </div>
        <GenderCheckbox />
        <a href = '#' className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block text-gray-200">Already have an account?</a>
        <button className="btn btn-block btn-sm mt-2">Signup</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;*/
