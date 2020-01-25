export const toTitleCase = (text: string) => {
    const newText = text.toLocaleLowerCase()
                        .replace(/\s+(?=\s+)/g, '')
                        .split(' ')
                        .map((word: string) => word && word[0] && `${word[0].toUpperCase()}${word.substring(1)}`)
                        .join(' ');
    return newText;
}

export default {
    toTitleCase
}