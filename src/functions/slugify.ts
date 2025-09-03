export const slugify = (str: string): string => {
    return str
        .normalize('NFD')                 // splits accenten (é → e + ́)
        .replace(/[\u0300-\u036f]/g, '') // verwijder accenten
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')     // verwijder speciale tekens
        .replace(/^[^a-z]+/, '')         // laat beginnen met een letter
        .replace(/\s+/g, '-')            // spaties → streepjes
        .replace(/-+/g, '-');            // dubbele streepjes → één
};
