import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Watch() {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set loading false after a short delay to ensure the component is mounted
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <div className="container mx-auto px-4 py-4">
                <button
                    onClick={handleGoBack}
                    className="mb-4 flex items-center text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
                >
                    <span className="mr-2">←</span> Back
                </button>
            </div>

            <div className="flex-1 relative w-full">
                {loading ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="w-full h-screen max-h-[calc(100vh-100px)]">
                        <iframe
                            src={`https://vidsrc.xyz/embed/movie/${movieId}`}
                            style={{ width: '100%', height: '100%' }}
                            frameBorder="0"
                            referrerPolicy="origin"
                            sandbox="allow-same-origin allow-scripts allow-forms"
                            allowFullScreen
                            title="Movie Player"
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Watch;
