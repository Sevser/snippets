const downloadBlob = (filename = 'download', blob) => {
    if (window.navigator.msOpenOrSaveBlob) {
        window.navigator.msOpenOrSaveBlob(blob, filename);
    } else {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

export default downloadBlob;