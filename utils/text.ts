export const toTitleCase = (text: string) => {
    const newText = text.toLocaleLowerCase()
                        .replace(/-/g, ' ')
                        .split(' ')
                        .map((word: string) => `${word[0].toUpperCase()}${word.substring(1)}`)
                        .join(' ');
    return newText;
}

export default {
    toTitleCase
}