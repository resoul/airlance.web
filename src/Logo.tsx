export function Logo() {
    return (
        <div className="flex pt-4">
            <a href="/">
                <img
                    className="size-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
                    src="/images/app-logo.svg"
                    alt="logo"
                />
            </a>
        </div>
    )
}