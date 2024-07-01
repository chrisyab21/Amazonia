
import { useForm } from "react-hook-form";
import { ChangeEvent, FormEvent, KeyboardEventHandler, useEffect, useRef, useState } from "react";
import logo3 from '../assets/images/Arbol3.png'


type contactInfo = {
  name: string,
  email: string,
  subject: string,
  message: string

}

type allowedKey = 'Backspace' | 'Tab' | 'ArrowLeft' | 'ArrowRight' | 'Delete' | 'Enter' | 'Shift' | 'Control' | 'Alt' | 'Meta' | 'Escape' | ' ';



export const FormSection = () => {


  /*   
    const nameInputRef = useRef<HTMLInputElement | null>(null);
    const emailInputRef = useRef<HTMLInputElement | null>(null);
    const subjectInputRef = useRef<HTMLInputElement | null>(null); */

  const textAreaRef = useRef<HTMLTextAreaElement>(null);


  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitted }
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


  const [textAreaValue, setTextAreaValue] = useState('');


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



  const onSubmit = (data: contactInfo) => {




  }



  return (
    
    <section id="contact" className="h-[600px] flex items-center p-12 bg-indigo-900">
      <div className="flex w-full justify-evenly items-center">
        <img src={logo3} alt="Logo" className="hidden h-auto lg:block lg:w-[30%] xl:w-[30%] mr-10" />
        <form className={`flex flex-col basis-full items-center gap-5 lg:basis-6/12`} onSubmit={handleSubmit((data) => onSubmit(data))} /*ref={formRef}*/>
          <h3 className="font-rubik font-medium text-5xl self-center mb-2">Contactanos</h3>
          <div className={`flex flex-col w-full gap-5 md:flex-row`}>
            <div className={`flex flex-col gap-2 md:basis-2/6 md:flex-grow ${errors.name && "-mb-2"}`}>
              <input className="basis-12 w-full rounded-md indent-2" type="text" placeholder="Name"
                {...register('name', {
                  required: {
                    value: true,
                    message: "Enter your name"
                  },
                  minLength: {
                    value: 4,
                    message: 'The name cannot be less than 4 characters'
                  },
                  maxLength: {
                    value: 30,
                    message: 'The name cannot be more than 20 characters'
                  },
                  pattern: {
                    value: nameRegEx,
                    message: 'Name cannot have symbols'
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
              <input className="basis-12 w-full rounded-md indent-2" type="email" placeholder="Email" maxLength={160}
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
          <textarea className="w-full rounded-md resize-none p-2" name="message" title="Well done"
            value={textAreaValue}
            rows={7}
            maxLength={600}
            ref={textAreaRef}
            placeholder="Message"
            onChange={(event) => limitTextAreaRows(event)}
          ></textarea>
          <button className="bg-green-600 basis-12 w-full rounded-md">Enviar</button>
        </form>
      </div>
    </section>
  );
};





export const FormSection2 = () => {

  return (
    <section id="contact" className="contact">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-header">
          <h2>Work with us</h2>
        </div>
        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4">
            <div className="info-container d-flex flex-column align-items-left justify-content-center">

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@tmzn.io</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-8">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input style={{ borderRadius: 0 }} type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input style={{ borderRadius: 0 }} type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input style={{ borderRadius: 0 }} type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3"><textarea style={{ borderRadius: 0 }} className="form-control" name="message" rows={7} placeholder="Message" required></textarea></div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button className="" type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
