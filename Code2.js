// const batchSize = 30;
//
// const me = Session.getActiveUser().getEmail();
//
// Logger.log("My Email: " + me);
//
// function findEmailME() {
//
//     const threads = GmailApp.search("to:myunidays.com");
//
//     for (let j = 0; j < threads.length; j += batchSize) {
//
//         const threadSlice = threads.slice(j, j + batchSize);
//         const messages = GmailApp.getMessagesForThreads(threadSlice);
//
//         for (let i = 0; i < messages.length; i++) {
//
//             Logger.log(messages[i][0].getTo());
//         }
//     }
// }
//
// function unflagStale() {
//
//     unflagSearch('is:starred is:read older_than:700d');
//     unflagSearch('is:starred is:read older_than:30d is:Crashlytics');
// }
//
// function cleanupDailyEmails() {
//     archiveSearch('from:(daily-digest@todoist.com) older_than:1d');
//     unflagSearch('from:(daily-digest@todoist.com) older_than:1d');
// }
//
// function quickArchive() {
//     archiveSearch('Yay, all your tests have passed!');
// }
//
// function archiveInboxShit() {
//
//     archiveSearch('older_than:60d');
//
//     if (me === 'matthew.herod@gmail.com') {
//         archiveSearch('to:(matthew.herod@myunidays.com)');
//         archiveSearch('to:(myunidays.com) -from:(matthew.herod@myunidays.com)');
//         archiveSearch('label:crashlytics iOS -Android');
//     }
//
//     archiveSearch('Yay, all your tests have passed!');
// }
//
// function pruneMail() {
//     deleteSearch('from:(matthew.herod) to:(matthew.herod) subject:Alert');
//
//     deleteSearch('label:unsubscribed older_than:7d');
//
//     // deleteSearch('subject:( __hidden) is:Crashlytics -Android');
//     // deleteSearch('to:matthew.herod+2@gmail.com older_than:2d -is:starred');
//     // deleteSearch('to:matthew.herod+api@myunidays.com older_than:2d');
//     // deleteSearch('to:matthew.herod+api@myunidays.com -Android +iOS');
//     // deleteSearch('label:prune older_than:14d');
//     deleteSearch('older_than:1d subject:Notification Google Calendar from:calendar-notification@google.com');
//     // deleteSearch('label:🌤-daily is:read -is:starred older_than:7d');
//     // deleteSearch('label:📰-news is:read -is:starred older_than:7d');
//     // deleteSearch('label:🎭 is:read -is:starred older_than:7d');
//     // deleteSearch('label:📺-watch is:read -is:starred older_than:30d');
//     // deleteSearch('label:🎵-music is:read -is:starred older_than:60d category:promotions');
//     deleteSearch('from:(matthew.herod@gmail.com) subject:(ReadyNAS HerodNAS) older_than:2d');
//     // deleteSearch('list:(<4a8ddf99b65761b69322f43734fd22b82bde629e.google.com>) -is:starred older_than:3d');
//
//     deleteSearch('list:(5d9b50f912e18fb44e8d7b091.565905.list-id.mcsv.net) -is:starred');
//
//     deleteSearch('from:(matthew.herod@gmail.com) subject:TeamCity older_than:1d');
// }
//
// function deleteSearch(search) {
//     deleteThreads(GmailApp.search(search));
// }
//
// function archiveSearch(search) {
//     const searchString = search + " in:inbox";
//     Logger.log("Searching for archive: %s", searchString);
//
//     let tries = 3;
//
//     let threadsForArchive = GmailApp.search(searchString);
//
//     while (threadsForArchive.length > 0 && tries-- > 0) {
//         archiveThreads(threadsForArchive);
//         threadsForArchive = GmailApp.search(searchString)
//     }
// }
//
// function archiveThreads(threads) {
//
//     Logger.log("Archiving %s threads", (threads.length + ""));
//
//     for (j = 0; j < threads.length; j += batchSize) {
//         GmailApp.moveThreadsToArchive(threads.slice(j, j + batchSize));
//     }
// }
//
// function deleteThreads(threads) {
//
//     Logger.log("Deleting %s threads", (threads.length + ""));
//     for (j = 0; j < threads.length; j += batchSize) {
//         GmailApp.moveThreadsToTrash(threads.slice(j, j + batchSize));
//     }
// }
//
// function unflagSearch(search) {
//
//     const threads = GmailApp.search(search + " is:starred");
//
//     for (j = 0; j < threads.length; j += batchSize) {
//
//         const threadSlice = threads.slice(j, j + batchSize);
//         const messages = GmailApp.getMessagesForThreads(threadSlice);
//
//         for (let i = 0; i < messages.length; i++) {
//             GmailApp.unstarMessages(messages[i]);
//         }
//     }
// }
//
// function processInbox() {
//     // get all threads in inbox
//     const threads = GmailApp.getInboxThreads();
//     for (let i = 0; i < threads.length; i++) {
//         // get all messages in a given thread
//         const messages = threads[i].getMessages();
//         // iterate over each message
//         for (let j = 0; j < messages.length; j++) {
//             // log message subject
//             Logger.log(messages[j].getSubject());
//         }
//     }
// }
//
// function processLabel(labelName) {
//     // get the label for given name
//     const label = GmailApp.getUserLabelByName(labelName);
//     // get count of all threads in the given label
//     const threadCount = label.getUnreadCount();
//     Logger.log(threadCount);
// }
//
// function markThreadImportant(threadId) {
//     const thread = GmailApp.getThreadById(threadId);
//     thread.markImportant();
// }
