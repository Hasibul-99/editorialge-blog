import { CREATE_SUBSCRIBERS } from '@/scripts/api';
import { postData } from '@/scripts/api-service';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
};

export default function SubscribtionForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const [showMessage, setShowMessage] = useState(false);

    const onSubmit = async (data: Inputs) => {
        let res = await postData(CREATE_SUBSCRIBERS, { data: data });

        if (res?.data?.id) {
            alert("Message sent successfully");
            reset();
        } else {
            alert("Message failed to send");
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-grp">
                    <input
                        id="name" placeholder="Name*"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="form-grp">
                    <input
                        id="email"
                        type="email" placeholder="Email*"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <button type="submit" className="btn">Submit Now</button>
            </form>
            <p className='mx-auto'>Your submission was successful.</p>
        </div>
    )
}
