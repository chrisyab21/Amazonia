import logo2 from "../assets/images/S-AMZ1.png"
import logo3 from "../assets/images/Arbol4.png";
import { useForm } from "react-hook-form";
import { FormEvent, useEffect, useRef } from "react";

type contactInfo = {
  name: string,
  email: string,
  subject: string,
  message: string

}

type allowedKey = 'Backspace' | 'Tab' | 'ArrowLeft' | 'ArrowRight' | 'Delete' | 'Enter' | 'Shift' | 'Control' | 'Alt' | 'Meta' | 'Escape';

export const FormSection = () => {


  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const subjectInputRef = useRef<HTMLInputElement | null>(null);


  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitted }
  } = useForm<contactInfo>();

  //const [first, setFirst] = useState<boolean>(false)

  const nameRegEx = new RegExp("^[a-zA-Z]+$");





  useEffect(() => {

    if (nameInputRef.current) {

      const handleKeyDown = (event: KeyboardEvent) => {
        // Prevenir la entrada de números

        const allowedKeys: allowedKey[] = [
          'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter',
          'Shift', 'Control', 'Alt', 'Meta', 'Escape'
        ];

        if (!nameRegEx.test(event.key) && !allowedKeys.includes(event.key as allowedKey)) {
          event.preventDefault();
        }

      };

      nameInputRef.current.addEventListener('keydown', handleKeyDown);

      return () => {
        if (nameInputRef.current) {
          nameInputRef.current.removeEventListener('keydown', handleKeyDown);
        }
      };
    }


  }, [nameInputRef.current]);





  // const { ref, ...rest } = register('firstName');


  const onSubmit = (data: contactInfo) => {




  }

  return (
    <section className="h-[600px] p-10 bg-indigo-900">
      <div className=" flex flex-col items-center gap-10">
        <h1 className="text-5xl">Contactanos</h1>
        <form className={`flex flex-col w-full gap-5`} onSubmit={handleSubmit((data) => onSubmit(data))}>
          <div className={`flex flex-col gap-2 ${errors.name && "-mb-2"}`}>
            <input type="text" className="basis-12 w-full rounded-md"
              {...register('name', {
                required: {
                  value: true,
                  message: "Ingrese su nombre"
                },
                minLength: {
                  value: 4,
                  message: 'El nombre debe tener al menos 4 caracteres'
                },
                maxLength: {
                  value: 30,
                  message: 'El nombre no puede tener más de 20 caracteres'
                },
                pattern: {
                  value: nameRegEx,
                  message: 'Nombre no valido'
                }
              })}
              ref={(e) => {
                register('name').ref(e);
                nameInputRef.current = e;
              }}
            />
            {errors.name && <span >{`${errors.name.message}`}</span>}
          </div>
          <div className={`flex flex-col gap-2 ${errors.email && "-mb-2"}`}>
            <input type="email" className="basis-12 w-full rounded-md"
              {...register('email', {
                required: {
                  value: true,
                  message: "Ingrese su correo"
                },
                minLength: 4,
                maxLength: 30,
                pattern: {
                  value: nameRegEx,
                  message: 'Correo no valido'
                }
              })}
              ref={(e) => {
                register('email').ref(e);
                emailInputRef.current = e;
              }}
            />
            {errors.email && <span className="msg">{`${errors.email.message}`}</span>}
          </div>
          <div className={`flex flex-col gap-2 ${errors.subject && "-mb-2"}`}>
            <input type="text" className="basis-12 w-full rounded-md"
              {...register('subject', {
                required: {
                  value: true,
                  message: "Ingrese el titulo"
                },
                minLength: 4,
                maxLength: 20,
                pattern: {
                  value: nameRegEx,
                  message: 'Correo no valido'
                }
              })}
              ref={(e) => {
                register('subject').ref(e);
                subjectInputRef.current = e;
              }}
            />
            {errors.subject && <span className="msg">{`${errors.subject.message}`}</span>}
          </div>
          <textarea title="Hola mi bro" className="w-full rounded-md" name="message" rows={7} placeholder="Message"></textarea>
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
