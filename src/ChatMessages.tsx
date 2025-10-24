import { useAvatar } from "./avatar/useAvatar.ts";

export function ChatMessages() {
    const { avatar } = useAvatar();
    const avatarSrc = avatar ?? "/images/200x200.png"

    return (
        <div className="scrollbar-sm grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]">
            <div className="space-y-5">
                <div className="mx-4 flex items-center space-x-3">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                    <p>Sunday</p>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                </div>
                <div className="flex items-start space-x-2.5 sm:space-x-5">
                    <div className="avatar">
                        <img className="rounded-full" src="/images/avatar/avatar-19.jpg" alt="avatar"/>
                    </div>
                    <div className="flex flex-col items-start space-y-3.5">
                        <div className="mr-4 max-w-lg sm:mr-10">
                            <div
                                className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-xs dark:bg-navy-700 dark:text-navy-100"> Hello
                                My Dear. Lorem ipsum dolor sit amet, consectetur.
                            </div>
                            <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                    <div className="flex flex-col items-end space-y-3.5">
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Assumenda necessitatibus,
                                ratione. Voluptatum.
                            </div>
                        </div>
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> And
                                that’s why a 15th century
                            </div>
                            <p className="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                    <div className="avatar">
                        <img className="rounded-full" src={avatarSrc} alt="avatar"/>
                    </div>
                </div>
                <div className="flex items-start space-x-2.5 sm:space-x-5">
                    <div className="avatar">
                        <img className="rounded-full" src="/images/avatar/avatar-19.jpg" alt="avatar"/>
                    </div>
                    <div className="flex flex-col items-start space-y-3.5">
                        <div className="mr-4 max-w-lg sm:mr-10">
                            <div
                                className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-xs dark:bg-navy-700 dark:text-navy-100"> Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Eius.
                            </div>
                            <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                        <div className="mr-4 max-w-lg sm:mr-10">
                            <div className="grid grid-cols-12 gap-2">
                                <div className="group relative col-span-12 sm:col-span-4">
                                    <img className="h-full rounded-lg object-cover" src="/images/800x600.png"
                                         alt="image"/>
                                    <div
                                        className="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                        <button
                                            className="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-12 grid grid-cols-2 gap-2 sm:col-span-8">
                                    <div className="group relative">
                                        <img className="h-full rounded-lg object-cover" src="/images/800x600.png"
                                             alt="image"/>
                                        <div
                                            className="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                            <button
                                                className="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5"
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <img className="h-full rounded-lg object-cover" src="/images/800x600.png"
                                             alt="image"/>
                                        <div
                                            className="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                            <button
                                                className="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5"
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <img className="h-full rounded-lg object-cover" src="/images/800x600.png"
                                             alt="image"/>
                                        <div
                                            className="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                            <button
                                                className="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5"
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <img className="h-full rounded-lg object-cover" src="/images/800x600.png"
                                             alt="image"/>
                                        <div
                                            className="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                            <button
                                                className="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5"
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"> 08:21 </p>
                        </div>
                    </div>
                </div>
                <div className="mx-4 flex items-center space-x-3">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                    <p>Monday</p>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                </div>
                <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                    <div className="flex flex-col items-end space-y-3.5">
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div className="group relative">
                                <img className="h-48 rounded-lg object-cover" src="/images/800x600.png"
                                     alt="image"/>
                                <div
                                    className="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <button
                                        className="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> Please
                                Download This File
                            </div>
                            <p className="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                    <div className="avatar">
                        <img className="rounded-full" src={avatarSrc} alt="avatar"/>
                    </div>
                </div>
                <div className="mx-4 flex items-center space-x-3">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                    <p>Yesterday</p>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                </div>
                <div className="flex items-start space-x-2.5 sm:space-x-5">
                    <div className="avatar">
                        <img className="rounded-full" src="/images/avatar/avatar-19.jpg" alt="avatar"/>
                    </div>
                    <div className="flex flex-col items-start space-y-3.5">
                        <div className="mr-4 max-w-lg sm:mr-10">
                            <div
                                className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-xs dark:bg-navy-700 dark:text-navy-100"> Hello
                                My Dear. Lorem ipsum dolor sit amet, consectetur.
                            </div>
                            <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                    <div className="flex flex-col items-end space-y-3.5">
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Assumenda necessitatibus,
                                ratione. Voluptatum.
                            </div>
                        </div>
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> And
                                that’s why a 15th century
                            </div>
                            <p className="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                    <div className="avatar">
                        <img className="rounded-full" src={avatarSrc} alt="avatar"/>
                    </div>
                </div>
                <div className="mx-4 flex items-center space-x-3">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                    <p>Sunday</p>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                </div>
                <div className="flex items-start space-x-2.5 sm:space-x-5">
                    <div className="avatar">
                        <img className="rounded-full" src="/images/avatar/avatar-19.jpg" alt="avatar"/>
                    </div>
                    <div className="flex flex-col items-start space-y-3.5">
                        <div className="mr-4 max-w-lg sm:mr-10">
                            <div
                                className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-xs dark:bg-navy-700 dark:text-navy-100"> Hello
                                My Dear. Lorem ipsum dolor sit amet, consectetur.
                            </div>
                            <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                    <div className="flex flex-col items-end space-y-3.5">
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Assumenda necessitatibus,
                                ratione. Voluptatum.
                            </div>
                        </div>
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> And
                                that’s why a 15th century
                            </div>
                            <p className="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                    <div className="avatar">
                        <img className="rounded-full" src={avatarSrc} alt="avatar"/>
                    </div>
                </div>
                <div className="flex items-start space-x-2.5 sm:space-x-5">
                    <div className="avatar">
                        <img className="rounded-full" src="/images/avatar/avatar-19.jpg" alt="avatar"/>
                    </div>
                    <div className="flex flex-col items-start space-y-3.5">
                        <div className="mr-4 max-w-lg sm:mr-10">
                            <div
                                className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-xs dark:bg-navy-700 dark:text-navy-100"> Ei
                                eum populo dictas, ad sed tempor minimum voluptatibus,
                            </div>
                            <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                    <div className="flex flex-col items-end space-y-3.5">
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> No
                                mei stet periculis consequat, agam nostro
                            </div>
                        </div>
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> at
                                has eius harum
                            </div>
                            <p className="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                    <div className="avatar">
                        <img className="rounded-full" src={avatarSrc} alt="avatar"/>
                    </div>
                </div>
                <div className="mx-4 flex items-center space-x-3">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                    <p>Today</p>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                </div>
                <div className="flex items-start space-x-2.5 sm:space-x-5">
                    <div className="avatar">
                        <img className="rounded-full" src="/images/avatar/avatar-19.jpg" alt="avatar"/>
                    </div>
                    <div className="flex flex-col items-start space-y-3.5">
                        <div className="mr-4 max-w-lg sm:mr-10">
                            <div
                                className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-xs dark:bg-navy-700 dark:text-navy-100"> Recusabo
                                mandamus cum ex, ius unum nibh an, usu liber oratio liberavisse ea.
                            </div>
                            <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                    <div className="flex flex-col items-end space-y-3.5">
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> Ocurreret
                                rationibus intellegebat eu eos,
                            </div>
                        </div>
                        <div className="ml-4 max-w-lg sm:ml-10">
                            <div
                                className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white"> Veri
                                dolorum cu ius. Vim id nullam putent invidunt.
                            </div>
                            <p className="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300"> 08:16 </p>
                        </div>
                    </div>
                    <div className="avatar">
                        <img className="rounded-full" src={avatarSrc} alt="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}