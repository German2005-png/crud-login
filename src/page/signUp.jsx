import {apiRequest} from '../Api/apiConnect.jsx';
import { useForm } from 'react-hook-form';
export const SignUp = ({estado, cambiarEstado}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({username: '', email: '', password: ''});
    return(
        <>
        {estado && 
              <div className='deep-absolute' id='deep-absolute' >
              <div className='flex-form'>
              <form className='form-login' onSubmit={handleSubmit( async (value) => {
                try {
                document.getElementById("btn-form").innerText = "loading";
                document.getElementById("btn-form").setAttribute("type", "button");
                document.getElementById("btn-form").style.cursor = "no-drop";
                const fet = await apiRequest(value);
                console.log(fet)
                window.location.reload()
                } catch (error) {
                  console.error("Error del formulario", error)  
                }
              })}>
                <h1 className='form-title'>Form Sign up!</h1>
                <div className='flex-input'>
                  <div className='lb-input'>
                  <label>Username</label>
                  <input type="text"  placeholder='Writing your username' {...register("username", { required: true, minLength: 4 })} autoComplete='off'/>
                  </div>
                  {errors.username?.type == 'required' && <p>This field is required</p>}
                  {errors.username?.type == 'minLength' && <p>It has to be less than 4 characters.</p>}
                  <div className='lb-input'>
                  <label>Email</label>
                  <input type="email" placeholder='Writing your email' {...register("email", { required: true, minLength: 4})} autoComplete='off'/>
                  </div>
                  {errors.email?.type == 'required' && <p>This field is required</p>}
                  {errors.email?.type == 'minLength' && <p>It has to be less than 4 characters.</p>}
                  <div className='lb-input'>
                  <label>Password</label>
                  <input type="password" placeholder='Writing your password' {...register("password", { required: true, minLength: 4 })} autoComplete='off'/>
                  </div>
                  {errors.password?.type == 'required' && <p>This field is required</p>}
                  {errors.password?.type == 'minLength' && <p>It has to be less than 4 characters.</p>}
                  <button className='form-btn' id='btn-form'>Send</button>
                </div>
              </form>
              </div>
            </div>
        }
        </>
    )
}