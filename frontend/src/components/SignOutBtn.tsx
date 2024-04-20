import {  useMutation, useQueryClient } from "react-query"
import * as apiClient from '../api-clients'
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext"

const SignOutBtn = () => {
    const queryClient = useQueryClient()

    const {showToast} = useAppContext()

    const navigate = useNavigate()
    const mutation = useMutation(apiClient.signOut,{
        onSuccess: async()=> {
            await queryClient.invalidateQueries("validateToken")
          showToast({message:"Logout successfully!", type:"SUCCESS"})
          navigate("/")
        },
        onError:(error:Error)=>{
          showToast({message:error.message,type:"ERROR"})
    
        }
      })

      const handleClick = () => {
        mutation.mutate()
      }

     
  return (
    <button onClick={handleClick} className="px-3 bg-white text-blue-600 font-bold hover:bg-gray-100 hover:text-green-500">Sign out</button>  )
}

export default SignOutBtn