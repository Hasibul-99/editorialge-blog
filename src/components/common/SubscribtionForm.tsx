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
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (data: Inputs) => {
        setIsLoading(true);
        setErrorMessage('');
        setShowMessage(false);

        try {
            let res = await postData(CREATE_SUBSCRIBERS, { data: data });

            if (res?.data?.id) {
                setShowMessage(true);
                reset();
            } else {
                setErrorMessage("Failed to subscribe. Please try again.");
            }
        } catch (error) {
            setErrorMessage("Network error. Please check your connection and try again.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-grp">
                    <input
                        id="name" 
                        placeholder="Name*"
                        aria-label="Name"
                        aria-required="true"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="error-message" role="alert">{errors.name.message}</p>}
                </div>
                <div className="form-grp">
                    <input
                        id="email"
                        type="email" 
                        placeholder="Email*"
                        aria-label="Email"
                        aria-required="true"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <p className="error-message" role="alert">{errors.email.message}</p>}
                </div>
                <button type="submit" className="btn" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit Now'}
                </button>
            </form>
            {showMessage && <p className='mx-auto'>Your submission was successful.</p>}
            {errorMessage && <p className='mx-auto text-red-500'>{errorMessage}</p>}
        </div>
    )
}
