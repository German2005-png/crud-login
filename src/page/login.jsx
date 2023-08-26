import {apiRequest, apiRequest2} from '../Api/apiConnect.jsx';
import { useForm } from 'react-hook-form';
export const Login = ({estado1, cambiarEstado1}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({username: '', password: ''});
    return(
        <>
        {estado1 && 
              <div className='deep-absolute' id='deep-absolute' >
              <div className='flex-form'>
              <form className='form-login' onSubmit={handleSubmit( async (value) => {
                try {
                document.getElementById("btn-form").innerText = "loading";
                document.getElementById("btn-form").setAttribute("type", "button");
                document.getElementById("btn-form").style.cursor = "no-drop";
                const fet1 = await apiRequest2(value);
                console.log(fet1)
                window.location.reload()
                } catch (error) {
                    console.error("Error al enviar el formulario", error)
                }
              })}>
                <h1 className='form-title'>Form Login!</h1>
                <div className='flex-input'>
                  <div className='lb-input'>
                  <label>Username</label>
                  <input type="text"  placeholder='Writing your username' {...register("username", { required: true, minLength: 4 })} autoComplete='off'/>
                  </div>
                  {errors.username?.type == 'required' && <p>This field is required</p>}
                  {errors.username?.type == 'minLength' && <p>It has to be less than 4 characters.</p>}
                  <div className='lb-input'>
                  <label>Password</label>
                  <input type="password" placeholder='Writing your password' {...register("password", { required: true, minLength: 4})} autoComplete='off'/>
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