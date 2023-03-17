import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    window.location.href = `mailto:yoavDdev@gmail.com?subject=${formdata.subject}&body=Hi my name is ${formdata.name}.${formdata.message}(${formdata.email})`;
  };
  return (
    <div className="h-screen relative flex flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center text-center">
      <h3 className="absolute top-24 tracking-[20px] text-[rgb(254,231,21)] text-2xl uppercase">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className=" text-4xl font-semibold text-center">
          I have got just waht you need.{" "}
          <span className="text-[rgb(254,231,21)]">Lest Talk.</span>{" "}
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[rgb(254,231,21)] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+972-548132603</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[rgb(254,231,21)] h-7 w-7 animate-pulse" />
            <p className="text-2xl">YoavDdev@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[rgb(254,231,21)] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer lane</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto "
        >
          <div className="sm:space-x-1 space-y-2 justify-evenly">
            <input
              {...register("name")}
              className="contactInput"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            className="bg-[rgb(254,231,21)] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
