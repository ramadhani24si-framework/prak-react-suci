import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({ email: "", password: "" });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        axios.post("https://dummyjson.com/user/login", {
            username: dataForm.email, // Sesuai dummyjson (username: emilys)
            password: dataForm.password,
        })
        .then((response) => {
            if (response.status === 200) navigate("/");
        })
        .catch((err) => {
            setError(err.response?.data?.message || "Login Gagal!");
        })
        .finally(() => setLoading(false));
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Welcome Back 👋</h2>
            {error && (
                <div className="bg-red-100 mb-5 p-4 text-sm text-red-600 rounded flex items-center">
                    <BsFillExclamationDiamondFill className="me-2" /> {error}
                </div>
            )}
            {loading && (
                <div className="bg-gray-100 mb-5 p-4 text-sm rounded flex items-center">
                    <ImSpinner2 className="me-2 animate-spin" /> Mohon Tunggu...
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input name="email" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="emilys" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" name="password" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="emilyspass" />
                </div>
                <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                    Login
                </button>
            </form>
        </div>
    );
}