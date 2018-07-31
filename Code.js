function myFunction() {

    const collectedUrls = [];

    const uriPattern = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;

    const batchSize = 100;

    const threads = GmailApp.search("from:offers@e.myunidays.com");

    for (let thread = 0; thread < threads.length; thread += batchSize) {

        const threadSlice = threads.slice(thread, thread + batchSize);
        const messages = GmailApp.getMessagesForThreads(threadSlice);

        for (let m = 0; m < messages.length; m++) {
            for (let j = 0; j < messages[m].length; j++) {

                const messageBody = messages[m][j].getBody();

                const extractedUrls = messageBody.match(uriPattern);

                for (let k = 0; k < extractedUrls.length; k++) {

                    const extractedUrl = extractedUrls[k];

                    if (extractedUrl.indexOf("http://e") > -1) {
                        if (collectedUrls.indexOf(extractedUrl) === -1) {
                            collectedUrls.push(extractedUrl);
                        }
                    }
                }
            }
        }

    }

    let saveDoc = "";

    for (let p = 0; p < collectedUrls.length; p++) {
        saveDoc += collectedUrls[p] + " \n\n"
    }

    DriveApp.createFile("BrontoUrls.txt", saveDoc)

    //GmailApp.sendEmail("matthew.herod@gmail.com", "Collected Urls", collectedUrls)
}
