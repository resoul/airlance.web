import { useState, useCallback, useEffect } from 'react';

const ACTIVE_CLASS = 'is-active';

interface TabItem {
    id: string;
    label: React.ReactNode;
    content: React.ReactNode;
    activeClass?: string;
    defaultClass?: string;
}

interface UseTabOptions {
    defaultTab?: string;
    onChange?: (tabId: string) => void;
}

interface UseTabReturn {
    activeTab: string;
    setActiveTab: (tabId: string) => void;
    getTabProps: (tabId: string) => {
        onClick: () => void;
        className: string;
        'data-active': boolean;
    };
    getTabPanelProps: (tabId: string, classNames: string) => {
        className: string;
        'data-active': boolean;
    };
}

export const useTab = (
    tabs: TabItem[],
    options: UseTabOptions = {}
): UseTabReturn => {
    const { defaultTab, onChange } = options;
    const [activeTab, setActiveTabState] = useState<string>(
        defaultTab || tabs[0]?.id || ''
    );

    useEffect(() => {
        onChange?.(activeTab);
    }, [activeTab, onChange]);

    const setActiveTab = useCallback((tabId: string) => {
        setActiveTabState(tabId);
    }, []);

    const getTabProps = useCallback(
        (tabId: string) => {
            const tab = tabs.find((t) => t.id === tabId);
            const isActive = tabId === activeTab;

            let className = '';
            if (isActive) {
                className = tab?.activeClass
                    ? `${tab.activeClass} ${ACTIVE_CLASS}`
                    : ACTIVE_CLASS;
            } else {
                className = tab?.defaultClass || '';
            }

            return {
                onClick: () => setActiveTab(tabId),
                className: className.trim(),
                'data-active': isActive,
            };
        },
        [activeTab, tabs, setActiveTab]
    );

    const getTabPanelProps = useCallback(
        (tabId: string, classNames: string) => {
            const isActive = tabId === activeTab;

            return {
                className: `${classNames} ${isActive ? ACTIVE_CLASS : ''}`.trim(),
                'data-active': isActive,
            };
        },
        [activeTab]
    );

    return {
        activeTab,
        setActiveTab,
        getTabProps,
        getTabPanelProps,
    };
};