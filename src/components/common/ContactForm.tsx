import { CREATE_CONTACT } from '@/scripts/api';
import { postData } from '@/scripts/api-service';
import { useForm } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit = async (data: Inputs) => {
        let res = await postData(CREATE_CONTACT, { data: data });

        if (res?.data?.id) {
            alert("Message sent successfully");
            window.location = '/'
        } else {
            alert("Message failed to send");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6">
                    {/* Name */}
                    <div className="form-grp">
                        <input
                            id="name" placeholder="Name*"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                </div>
                <div className="col-md-6">
                    {/* Email */}
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
                </div>
            </div>

            {/* Phone */}
            <div className="form-grp">
                <input
                    id="phone"
                    type="tel" placeholder="Phone"
                    {...register("phone", {
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "Phone number should only contain numbers"
                        }
                    })}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <div className="form-grp">
                <textarea id="message" placeholder="Message*" {...register("message", { required: "Message is required" })} />
                {errors.message && <p>{errors.message.message}</p>}
            </div>

            <button type="submit" className="btn btn-two">Submit</button>
        </form>
    );
}

export default ContactForm;
