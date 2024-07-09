
import { useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import amazonGif from '../assets/images/NFTS S-AMZ.gif'
import emailjs from "@emailjs/browser";
import { ButtonComponent } from "./ButtonComponent";
import toast from 'react-hot-toast';

type contactInfo = {
  name: string,
  email: string,
  subject: string,
  message: string
}

type emailTemplate = {
  from_name: string,
  user_email: string,
  subject: string,
  message: string
}

type allowedKey = 'Backspace' | 'Tab' | 'ArrowLeft' | 'ArrowRight' | 'Delete' | 'Enter' | 'Shift' | 'Control' | 'Alt' | 'Meta' | 'Escape' | ' ';



export const FormSection = () => {


  /*   
    const nameInputRef = useRef<HTMLInputElement | null>(null);
    const emailInputRef = useRef<HTMLInputElement | null>(null);
    const subjectInputRef = useRef<HTMLInputElement | null>(null); */

  // const textAreaRef = useRef<HTMLTextAreaElement>(null);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<contactInfo>();


  const nameRegEx = /^[a-zA-Z\s]*$/;
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  /*   const handleKeyDown = (event: KeyboardEvent) => {
      // Prevenir la entrada de números
  
      const allowedKeys: allowedKey[] = [
        'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter',
        'Shift', 'Control', 'Alt', 'Meta', 'Escape'
      ];
  
      if (!nameRegEx.test(event.key) && !allowedKeys.includes(event.key as allowedKey)) {
        event.preventDefault();
      }
  
    }; */


  const [textAreaValue, setTextAreaValue] = useState<string>('');


  const limitTextAreaRows = (event: ChangeEvent<HTMLTextAreaElement>) => {

    const lines = event.target.value.split('\n');
    if (lines.length > 7) {
      setTextAreaValue(lines.slice(0, 7).join('\n'));
    } else {
      setTextAreaValue(event.target.value);
    }
  };


  const handleOnTyped = (event: React.KeyboardEvent<HTMLInputElement>) => {

    const typed_Key = event.key

    const allowedKeys: allowedKey[] = [
      'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter',
      'Shift', 'Control', 'Alt', 'Meta', 'Escape', ' '
    ];

    if (!nameRegEx.test(typed_Key) && !allowedKeys.includes(typed_Key as allowedKey)) {
      event.preventDefault();
    }


  }



  /*   const formRef = useRef<HTMLFormElement>(null)
  
    useEffect(() => {
  
      if (formRef.current) {
  
        const inputh = formRef.current.querySelectorAll('input')
  
        inputh.forEach((input) => {
  
          input.addEventListener('keydown', handleKeyDown);
  
  
        });
  
        return () => {
  
          inputh.forEach((input) => {
  
            input.removeEventListener('keydown', handleKeyDown);
  
          });
  
        }
  
      }
  
    }, []); */


  // let nameValue = watch('name');


  const [isLoading, setIsLoading] = useState<boolean>(false)


  const onSubmit = async (formData: contactInfo) => {



    setIsLoading(true);

    //const toastId = toast.loading('Sending')

    const template: emailTemplate = {

      from_name: formData.name,
      user_email: formData.email,
      subject: formData.subject,
      message: formData.message,

    }


    try {

      const emailPromise = emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        template,
        {
          publicKey: import.meta.env.VITE_EMAILJS_ACCOUNT_PUBLIC_KEY,
        }
      );


      await toast.promise(emailPromise, {

        loading: 'Sending...',
        success: 'Email sent successfully!',
        error: 'Failed to send email.',

      });

      //console.log('SUCCESS!', result.status, result.text);

      reset();

      setTextAreaValue('');

    } catch (error: any) {

      console.log('FAILED...', error);

    }

    setIsLoading(false);

  }





  return (

    <section id="contact" className="flex py-20 px-14 sm:px-20 lg:px-28  bg-AzulOscuro">
      <div className="flex w-full h-full gap-[5%] lg:pl-[5%]">
        <div className="hidden md:flex flex-col basis-[380px] max-w-sm shrink-[2] gap-10">
          <h3 className="font-rubik text-3xl text-gray-200 font-semibold text-center">NFTs COLLECTION</h3>
          <img src={amazonGif} alt="Logo" className="h-auto rounded-xl" />
        </div>
        <form className={`flex flex-col gap-5 flex-grow`} onSubmit={handleSubmit((data) => onSubmit(data))} /*ref={formRef}*/>
          <div className="flex gap-2 flex-wrap mb-2">
            <h3 className="flex-grow text-center font-rubik font-medium text-3xl text-gray-200 sm:text-4xl self-center">CONTACT US</h3>
            <a href="mailto:contacto@assetxtokens.io" className="flex-grow text-center text-blue-700 content-center hover:text-green-500 underline">contacto@assetxtokens.io</a>
          </div>
          <div className={`flex flex-col w-full gap-5 md:flex-row`}>
            <div className={`flex flex-col gap-2 md:basis-2/6 md:flex-grow ${errors.name && "-mb-2"}`}>
              <input className="basis-12 w-full rounded-md indent-2" type="text" placeholder="Name" required
                {...register('name', {
                  required: {
                    value: true,
                    message: "Enter your name"
                  },
                  minLength: {
                    value: 4,
                    message: 'Name must be at least 4 characters'
                  },
                  maxLength: {
                    value: 30,
                    message: 'Name must be less than 20 characters'
                  },
                  pattern: {
                    value: nameRegEx,
                    message: 'A name cannot have symbols'
                  }
                })}
                ref={(e) => {
                  register('name').ref(e);
                  // nameInputRef.current = e;
                }}
                onKeyDown={(event) => handleOnTyped(event)}
              />
              {errors.name && <span >{`${errors.name.message}`}</span>}
              {/* <span >{`El valor es: ${nameValue}`}</span> */}
            </div>
            <div className={`flex flex-col gap-2 w-full md:basis-2/6 md:flex-grow ${errors.email && "-mb-2"}`}>
              <input className="basis-12 w-full rounded-md indent-2" type="email" placeholder="Email" maxLength={160} required
                {...register('email', {
                  required: {
                    value: true,
                    message: "Enter your email"
                  },
                  maxLength: {
                    value: 150,
                    message: "Email cannot have more than 150 characters"
                  },
                  pattern: {
                    value: emailRegEx,
                    message: 'Invalid email'
                  }
                })}
                ref={(e) => {
                  register('email').ref(e);
                  //emailInputRef.current = e;
                }}
              />
              {errors.email && <span className="msg">{`${errors.email.message}`}</span>}
            </div>
          </div>
          <div className={`flex flex-col w-full gap-2 ${errors.subject && "-mb-2"}`}>
            <input className="basis-12 w-full rounded-md indent-2"
              type="text"
              required
              placeholder="Subject"
              maxLength={70}
              minLength={4}
              {...register('subject', {
                required: {
                  value: true,
                  message: "Enter the subject"
                },
                minLength: {
                  value: 4,
                  message: "Subject cannot be less than 4 characters"
                },
                maxLength: {
                  value: 60,
                  message: "Subject cannot be more than 60 characters"
                },
              })}
              ref={(e) => {
                register('subject').ref(e);
                //subjectInputRef.current = e;
              }}
              onKeyDown={(event) => handleOnTyped(event)}
            />
            {errors.subject && <span className="msg">{`${errors.subject.message}`}</span>}
          </div>
          <textarea className="flex-shrink w-full rounded-md resize-none p-2 mb-2"
            title="Write your message here"
            placeholder="Message"
            required
            value={textAreaValue}
            rows={7}
            maxLength={600}
            {...register('message', {
              required: {
                value: true,
                message: "The message is required"
              },
            })}
            onChange={(event) => limitTextAreaRows(event)}
          ></textarea>
          <ButtonComponent disabled={isLoading} />
        </form>
      </div>
    </section>
  );
};

