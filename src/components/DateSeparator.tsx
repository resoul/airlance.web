interface DateSeparatorProps {
    date: Date;
}

export function DateSeparator({ date }: DateSeparatorProps) {
    const formatDate = (date: Date): string => {
        const now = new Date();
        const messageDate = new Date(date);

        now.setHours(0, 0, 0, 0);
        messageDate.setHours(0, 0, 0, 0);

        const diffTime = now.getTime() - messageDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            return 'Today';
        }

        if (diffDays === 1) {
            return 'Yesterday';
        }

        if (diffDays > 1 && diffDays <= 6) {
            return messageDate.toLocaleDateString('en-US', { weekday: 'long' });
        }

        const day = String(messageDate.getDate()).padStart(2, '0');
        const month = String(messageDate.getMonth() + 1).padStart(2, '0');
        const year = messageDate.getFullYear();

        return `${day}.${month}.${year}`;
    };

    return (
        <div className="mx-4 flex items-center space-x-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            <p>{formatDate(date)}</p>
            <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
    );
}
