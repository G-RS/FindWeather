export function DateFormat(dateString: string) {
    const options: {} = {
        dateStyle: 'full',
        // weekday: 'long',
        // year: 'numeric',
        // month: 'short',
        // day: 'numeric'
    };

    const date = new Date(dateString);

    return Intl.DateTimeFormat('pt-BR', options).format(date).replace(/\b([a-zÁ-ú]{3,})/g, (l) => l.charAt(0).toUpperCase() + l.slice(1));
};


export function TimeFormat(dateString: string) {
    const options: {} = {
        timeStyle: 'short',
    };

    const date = new Date(dateString);

    return Intl.DateTimeFormat('pt-BR', options).format(date)
};

export function WeekdayFormat(dateString: string) {
    const date = new Date(dateString);

    return Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(date)
            .replace(/\b([a-zÁ-ú]{3,})/g, (l) => l.charAt(0).toUpperCase() + l.slice(1))
            .replace('-Feira', '');
}