import { useMySpotStore } from '@/store';
import { ListPostPropsType } from '@/types';
import React from 'react'
import {z} from "zod";
import {Form, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FormSchema = z.object({
    NumberOfSpots:z.coerce.number({invalid_type_error:"must be a number"}).positive({message:"Value must be positive"}).finite({message:"must be a valid number"})

})

type NumberOfSpotsInput = z.infer<typeof FormSchema>

function NumberOfSpots({onNext, onPrev}:ListPostPropsType) {
    const mySpotStore = useMySpotStore()

    const form = useForm<NumberOfSpotsInput>({
        resolver:zodResolver(FormSchema),
        defaultValues:{
            NumberOfSpots:mySpotStore.data.numberOfSpots
        }
    })

    const onSubmit = (data:NumberOfSpotsInput)=>{
        mySpotStore.updateState({
            numberOfSpots: data.NumberOfSpots,
           
        })
    }

  return (
    <div className="grid w-full gap-1 5">
        <h2 className="text-xl sm:text-2xl py-4">Number of parking spots</h2>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                control={form.control}
                name='NumberOfSpots'
                render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input {...field} placeholder='e.g. 3'/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                 <div className="flex justify-between py-4">
        <Button type='button' variant='ghost' className='py-4 my-2'>Next</Button>
        <Button type='button' variant='ghost' className='py-4 my-2' onClick={onPrev}>Prev</Button>
        </div>

            </form>

        </Form>
    </div>
  )
}

export default NumberOfSpots