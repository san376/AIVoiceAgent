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
            <div>
                {ExpertsList.map((Option,index)=>(
                    <div>
                        <Image src={Option.icon} alt={Option.name}
                        width={150}
                        height={150}
                        />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default FeatureAssistents
