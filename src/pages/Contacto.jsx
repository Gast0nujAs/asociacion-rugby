import React from 'react'
import IconInfo from '../components/IconInfo'
import { IconMail } from '../assets/icons/IconMail' 
import { IconPhone } from '../assets/icons/IconPhone'
import { Controller, useForm } from 'react-hook-form'
import { FormElement } from '../components/FormElement'
import { Navigate, useNavigate } from 'react-router-dom';
export const Contacto = () => {

    const navigate = useNavigate();

    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }

        

    });

    const onSubmit = (data) => {
        console.log(data)
    }

    

  return (
    <div>
        <div className='flex justify-center' 
        style={{background: 'radial-gradient(circle, rgb(255, 187, 92)0%, rgb(0, 0, 0) 100%)',
                height: '250px',}}> 

            <h1 className='text-5xl sm:text-7xl font-bold pt-12 text-white '>Contacto</h1>
        </div>
        <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
            <div className='rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6'>
                <div className='grid grid-cols-2 gap-x-6 mb-12 mx-auto'>
                    <IconInfo icon={<IconMail />} text="arprorugby@gmail.com"  />
                    <IconInfo icon={<IconPhone />} text="11-67698456" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller 
                        name='name'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormElement 
                                type="text" 
                                label="Nombre" 
                                placeholder="Escriba su nombre" 
                                fieldRef={field} 
                                hasError={errors.name?.type === 'required'}/>
                        )}
                    />
                    <Controller 
                        name='email'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormElement 
                                type="email" 
                                label="Email" 
                                placeholder="Escriba su email" 
                                fieldRef={field} 
                                hasError={errors.email?.type === 'required'}/>
                        )}
                    />
                    <Controller 
                        name='message'
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormElement 
                                type="textarea" 
                                label="Mensaje" 
                                placeholder="Escriba su mensaje" 
                                fieldRef={field} 
                                hasError={errors.name?.type === 'required'}/>
                        )}
                    />
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Enviar</button>
                </form>
            </div>
        </div>
    </div>
  )
}

