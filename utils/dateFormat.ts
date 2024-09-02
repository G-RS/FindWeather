export function DateFormat(dateString: string) {
    const options: {} = {
        dateStyle: 'full',
    };

    const date = new Date(dateString);

    return Intl.DateTimeFormat('pt-BR', options).format(date).replace(/(\b[a-z](?!\s))/, (l) => l.toUpperCase())
};


export function TimeFormat(dateString: string) {
    const options: {} = {
        timeStyle: 'short',
    };

    const date = new Date(dateString);

    return Intl.DateTimeFormat('pt-BR', options).format(date)
};