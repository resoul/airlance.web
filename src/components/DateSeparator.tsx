interface DateSeparatorProps {
    date: Date;
}

export function DateSeparator({ date }: DateSeparatorProps) {
    const formatDate = (date: Date) => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday';
        } else {
            return date.toLocaleDateString('en-US', { weekday: 'long' });
        }
    };

    return (
        <div className="mx-4 flex items-center space-x-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            <p>{formatDate(date)}</p>
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
    );
}