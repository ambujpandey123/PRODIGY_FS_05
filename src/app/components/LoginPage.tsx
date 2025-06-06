"use client";
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { API_URL, ValidateDetails } from './validation';
import Link from 'next/link';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation'

async function LoginUser(email: string, password: string, rememberMe: boolean) {
    try {
        const res = await axios.post(`${API_URL}login`, {
            email,
            password,
            rememberMe,

        });
        return res?.data;
    } catch (error) {
        const errorMessage = 'Something went wrong';
        return { success: false, message: errorMessage };
    }
}

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    type DataErrorState = [boolean, string];
    const [DataError, setDataError] = useState<DataErrorState>([false, "Invalid Credentials"]);

    const searchParams = useSearchParams();
    useEffect(() => {
        const error = searchParams.get('error') || 'not-logged-in';
        console.log("Middleware res: ", error);

        if (error === 'not-logged-in') {
            toast.error('You are not logged in');

        }
    }, [searchParams]);

    interface LoginResponse {
        success?: boolean;
        message?: string;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoader(true);
        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }
        const validate: string = ValidateDetails(email, password, 'name');
        if (validate !== "Valid") {
            setDataError([true, validate] as DataErrorState);
            setLoader(false);
            toast.error(validate);
            console.log(validate);
            return;
        }
        setDataError([false, validate] as DataErrorState);

        const LoginResponse = await LoginUser(email, password, rememberMe) as LoginResponse;
        if (LoginResponse.success === false || LoginResponse.success === undefined) {
            setDataError([true, LoginResponse.message ?? "Something went wrong, please try again later"] as DataErrorState);
            toast.error(LoginResponse.message ?? "Something went wrong, please try again later");
            console.log(LoginResponse.message ?? "Something went wrong, please try again later");
            setLoader(false);
            return;
        }
        setLoader(false);
        setDataError([false, LoginResponse?.message ?? ""] as DataErrorState);
        toast.success(LoginResponse.message ?? "Login successful");
        setEmail('');
        setPassword('');
        setTimeout(() => {
             location.replace(window.location.href="/");
        }, 2000);
    };

    return (
        <div className='w-full h-full'>
            <div className="login-container flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <div className='flex items-center justify-center flex-col rounded-lg  p-8 bg-white'>
                    <h3 className="text-2xl font-bold mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-4 relative">
                            <label htmlFor="email" className='text-lg font-medium'>Email</label>
                            <span className='absolute bottom-2'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mx-3 text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </span>
                            <input
                                className="block w-full py-2 text-gray-700 bg-white border-b-2 rounded-lg px-11 focus:border-purple-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                type="email"
                                id="email"
                                placeholder="email@gmail.com"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </div>
                        <div className="flex flex-col mb-4 relative">
                            <label htmlFor="password" className='text-lg font-medium'>Password</label>
                            <span className='absolute bottom-2'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mx-3 text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </span>
                            <input
                                className="block w-full py-2 text-gray-700 bg-white border-b-2 rounded-lg px-11 focus:border-purple-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                type="password"
                                id="password"
                                placeholder="********"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {DataError[0] && <p className=' text-red-400 text-sm mx-20 my-4'>{DataError[1]}</p>}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input type="checkbox"
                                    id="remember" className="mr-2"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="remember" className='text-sm'>Remember me</label>
                            </div>
                            <Link href="#" className='text-sm text-blue-500'>Forgot password?</Link>
                        </div>
                        <button type="submit" className='text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full rounded-2xl p-2'>{loader ? "Loding..." : "Login"}</button>
                    </form>
                    <div className="flex items-center justify-center mt-4">
                        <span className="text-sm">Don't have an account?</span>
                        <Link href="/signup" className='text-sm text-blue-500 ml-2'>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;