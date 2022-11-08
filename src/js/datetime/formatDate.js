const formatDate = (dateString) => {
    if (!dateString) {
        return '';
    }
    const date = new Date(dateString);
    if (date instanceof Date) {
        return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
    }
    return '';
}

export default formatDate;