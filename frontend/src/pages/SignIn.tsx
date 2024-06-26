import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-clients"
import {  Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";


export type SignFormData= {
    email:string;
    password:string
}
const SignIn = () => {
    const queryClient = useQueryClient()

    const {register, handleSubmit,formState:{errors}} = useForm<SignFormData>()
  const navigate = useNavigate()
  const {showToast} = useAppContext()



    const mutation = useMutation(apiClient.signIn,{
        onSuccess: async()=> {
          
          showToast({message:"Login Success!", type:"SUCCESS"})
          await queryClient.invalidateQueries("validateToken")
          navigate("/")
        },
        onError:(error:Error)=>{
          showToast({message:error.message,type:"ERROR"})
    
        }
      })

      const onSubmit = handleSubmit((data)=>{
        mutation.mutate(data)
        
    
      }) 
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <h2 className="text-3xl font-bold">
      Sign In
    </h2>
    <label className="text-gray-700 text-sm font-bold flex-1">Email
        <input type="email" className="border rounded w-full py-1 px-2 font-normal" {...register("email",{required:"Email is required"})}></input>
        {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">Password
        <input type="password" className="border rounded w-full py-1 px-2 font-normal" {...register("password",{required:"Password is required",minLength:{
          value:6,
          message:"Password must be greater than 6 charcter"
        }})}></input>
         {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </label>
        <span className="flex items-center justify-between">
            <span className="text-sm ">
                Not account yet? <Link className="underline" to={"/register"}>Create an account</Link>
            </span>
          <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl ">Login</button>
        </span>
    </form>

  )
}

export default SignIn