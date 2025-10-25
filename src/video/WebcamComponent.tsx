import { useRef, useEffect, useState, type JSX } from 'react';

export function WebcamComponent(): JSX.Element {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [isVideoEnabled, setIsVideoEnabled] = useState<boolean>(true);
    const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const startStream = async (): Promise<void> => {
        setIsLoading(true);
        setError(null);

        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: true
            });

            setStream(mediaStream);

            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
        } catch (err) {
            console.error('Ошибка доступа к медиа устройствам:', err);
            const errorMessage = err instanceof Error ? err.message : 'Не удалось получить доступ к камере/микрофону';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const stopStream = (): void => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        }
    };

    const toggleVideo = (): void => {
        if (stream) {
            const videoTrack = stream.getVideoTracks()[0];
            if (videoTrack) {
                videoTrack.enabled = !videoTrack.enabled;
                setIsVideoEnabled(videoTrack.enabled);
            }
        }
    };

    const toggleAudio = (): void => {
        if (stream) {
            const audioTrack = stream.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = !audioTrack.enabled;
                setIsAudioEnabled(audioTrack.enabled);
            }
        }
    };

    useEffect(() => {
        return () => {
            stopStream();
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
                    {/* Header */}
                    <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-700/50">
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-semibold text-white">
                                Веб-камера и микрофон
                            </h1>
                        </div>
                    </div>

                    {/* Video Container */}
                    <div className="relative bg-black aspect-video">
                        {!stream && !isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-slate-400 mb-4">
                                        Нажмите "Запустить камеру" для начала
                                    </p>
                                </div>
                            </div>
                        )}

                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
                                    <p className="text-slate-300">Подключение к камере...</p>
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6 max-w-md">
                                    <p className="text-red-400 text-center">
                                        <strong>Ошибка:</strong> {error}
                                    </p>
                                    <p className="text-slate-400 text-sm mt-2 text-center">
                                        Убедитесь, что вы разрешили доступ к камере и микрофону
                                    </p>
                                </div>
                            </div>
                        )}

                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-full h-full object-cover"
                        />

                        {/* Status indicators */}
                        {stream && (
                            <div className="absolute top-4 right-4 flex gap-2">
                                <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${
                                    isVideoEnabled
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                        : 'bg-red-500/20 text-red-400 border border-red-500/50'
                                }`}>
                                    <div className={`w-2 h-2 rounded-full ${
                                        isVideoEnabled ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                                    }`}></div>
                                    Видео
                                </div>
                                <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${
                                    isAudioEnabled
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                        : 'bg-red-500/20 text-red-400 border border-red-500/50'
                                }`}>
                                    <div className={`w-2 h-2 rounded-full ${
                                        isAudioEnabled ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                                    }`}></div>
                                    Аудио
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700/50">
                        <div className="flex items-center justify-center gap-3">
                            {!stream ? (
                                <button
                                    onClick={startStream}
                                    disabled={isLoading}
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                                >
                                    Запустить камеру
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={toggleVideo}
                                        className={`px-5 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                                            isVideoEnabled
                                                ? 'bg-slate-700 hover:bg-slate-600 text-white'
                                                : 'bg-red-600 hover:bg-red-700 text-white'
                                        }`}
                                    >
                                        {isVideoEnabled ? 'Видео вкл' : 'Видео выкл'}
                                    </button>

                                    <button
                                        onClick={toggleAudio}
                                        className={`px-5 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                                            isAudioEnabled
                                                ? 'bg-slate-700 hover:bg-slate-600 text-white'
                                                : 'bg-red-600 hover:bg-red-700 text-white'
                                        }`}
                                    >
                                        {isAudioEnabled ? 'Микрофон вкл' : 'Микрофон выкл'}
                                    </button>

                                    <button
                                        onClick={stopStream}
                                        className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
                                    >
                                        Остановить
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="mt-4 text-center text-slate-400 text-sm">
                    <p>
                        При первом запуске браузер запросит разрешение на доступ к камере и микрофону
                    </p>
                </div>
            </div>
        </div>
    );
}