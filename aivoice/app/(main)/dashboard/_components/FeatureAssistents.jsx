'use client'
import { Button } from '@/components/ui/button'
import { ExpertsList } from '@/services/Options'
import { useUser } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function FeatureAssistents() {

    const user = useUser()

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='font-medium text-gray-500'>My Workspace</h2>
                    <h2 className='text-3xl font-bold'>Welcome back, {user?.displayName}</h2>
                </div>
                <Button>Profile</Button>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-10 mt-10'>
                {ExpertsList.map((Option,index)=>(
                    <div key={index} className='p-3 bg-secondary rounded-3xl flex flex-col 
                    justify-center items-center'>
                        <Image src={Option.icon} alt={Option.name}
                        width={150}
                        height={150}
                        className='h-[70px] w-[70px]'
                        />
                        <h2 className='mt-2 text-bold'>{Option.name}</h2>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default FeatureAssistents
