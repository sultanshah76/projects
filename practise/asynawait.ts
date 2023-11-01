function fetch() {
    return new Promise((resolve, reject) => {
        let text="text";
        let err="no data available";
        setTimeout(() => {
            if (text) {
                resolve(text)}
                else{
                    reject(err)}
        }, 1000)})};
        console.log("before");