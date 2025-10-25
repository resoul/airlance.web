import { Swiper, SwiperSlide } from 'swiper/react';
import type { StoriesProps } from './types';

export function Stories({
                            stories,
                            title = 'History',
                            onAddStory
                        }: StoriesProps) {
    return (
        <div>
            <div className="flex items-center justify-between px-4">
                <span className="text-xs-plus font-medium uppercase">{title}</span>
                {onAddStory && (
                    <div className="-mr-1.5 flex">
                        <button
                            onClick={onAddStory}
                            className="btn size-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            aria-label="Add story"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            <div id="history-slide" className="swiper px-4">
                <Swiper
                    spaceBetween={10}
                    slidesPerGroup={3}
                    slidesPerView="auto"
                >
                    {stories.map((story) => (
                        <SwiperSlide
                            key={story.id}
                            className="swiper-slide flex w-11 shrink-0 flex-col items-center justify-center"
                        >
                            <div
                                className={`size-11 rounded-full p-0.5 ${
                                    story.hasNewStory
                                        ? 'bg-gradient-to-r from-purple-500 to-orange-600'
                                        : 'bg-slate-200 dark:bg-navy-500'
                                }`}
                            >
                                <img
                                    className="h-full w-full rounded-full border-2 border-white object-cover dark:border-slate-700"
                                    src={story.avatar}
                                    alt={story.name}
                                />
                            </div>
                            <p className="mt-1 w-14 break-words text-center text-xs text-slate-600 line-clamp-1 dark:text-navy-100">
                                {story.name}
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}