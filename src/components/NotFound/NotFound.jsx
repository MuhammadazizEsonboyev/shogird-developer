import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-5xl bg-gray-100 shadow-xl rounded-md">
                    <div className="px-4 py-6">
                        <h1 className="text-3xl font-bold text-gray-800">404</h1>
                        <p className="text-lg text-gray-600">The page you are looking for could not be found.</p>
                        <button onClick={() => navigate("jobs")} className="text-blue-500 hover:text-blue-700">Go Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
