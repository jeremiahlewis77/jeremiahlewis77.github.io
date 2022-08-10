import {NextPageWithLayout} from "./_app";
import {ReactElement} from "react";
import Layout from "../components/Layout/Layout";
import PageLayout from "../components/Layout/PageLayout";
import {useState} from "react";
import {ChangeEvent, FormEvent} from "react";

function Header(): JSX.Element {
    return (
        <>
            <div>
                <p className="text-lg">
                    <span>Feel free to reach out to me via my <a href="https://www.linkedin.com/in/jeremiah-lewis-082404186/" className="link">LinkedIn</a>, <a href="https://github.com/jeremiahlewis77" className="link">GitHub</a> or the form below.</span>
                </p>
            </div>
        </>
    )
}

const Contact: NextPageWithLayout = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const endpoint = "https://svyszyvs2a.execute-api.us-east-2.amazonaws.com/default/sendEmail";
        const body = JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
        });

        const requestOptions = {
            method: "POST",
            body
        }

        fetch(endpoint, requestOptions)
            .then((response) => {
                if (!response.ok) throw new Error("Error fetching.");
                return response.json();
            })
            .then((response) => {
                const success = document.getElementById("success");
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                if (success != null) {
                    success.classList.remove("hidden");
                }
            })
            .catch((error) => {
                const err = document.getElementById("error");
                if (err != null) {
                    err.classList.remove("hidden");
                }
            });
        }



    return (
        <>
            <div className="w-full max-w-2xl mb-4">
                <form className="bg-white shadow-md rounded px-8 py-6 mb-4 border" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gunmetal font-bold text-lg mb-2" >Name:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral font-medium text-gray-700 leading-tight"
                               type="text" id="name"
                               name="name"
                               placeholder="Full Name"
                               value={formData.name}
                               onChange={handleChange}
                               required
                        />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-gunmetal font-bold text-lg mb-2">Email:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral font-medium text-gray-700 leading-tight"
                           type="email" id="email"
                           name="email"
                           placeholder="Email Address"
                           value={formData.email}
                           onChange={handleChange}
                           required
                    />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gunmetal font-bold text-lg mb-2">Message:</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral font-medium text-gray-700 leading-tight"
                                  id="message"
                                  name="message"
                                  rows={6}
                                  cols={50}
                                  placeholder="Enter your message here"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                        />
                    </div>
                    <button className="bg-sapphire hover:bg-sapphire-darker text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
                <div id="error" className="hidden font-medium bg-red-500 text-white rounded p-4">
                    <p>Something went wrong. Please try again.</p>
                </div>
                <div id="success" className="hidden font-medium bg-green-500 text-white rounded p-4">
                    <p>Success! I will be in touch shortly. Thank you! &#128516;</p>
                </div>
            </div>
        </>
    )
}

Contact.getLayout = function getLayout(page: ReactElement) {
    const title:string = "Contact Me"
    const header:string = "Get In Touch!"
    return (
        <>
            <Layout title={title}>
                <PageLayout pageTitle={header} headerContent={Header()} headerCSS="flex flex-col justify-center text-center" pageCSS="flex justify-center items-center">
                    {page}
                </PageLayout>
            </Layout>
        </>
    )
}

export default Contact;