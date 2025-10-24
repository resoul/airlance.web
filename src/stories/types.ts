export interface Story {
    id: string | number;
    name: string;
    avatar: string;
    hasNewStory?: boolean;
}

export interface StoriesProps {
    stories: Story[];
    title?: string;
    onAddStory?: () => void;
}