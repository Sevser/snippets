const formatDateTime = (dateString) => {
    if (!dateString) {
        return '';
    }
    const date = new Date(dateString);
    if (date instanceof Date) {
        return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
    return '';
}

export default formatDateTime;