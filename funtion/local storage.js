
//WEB API:


//local storage    -------->allots a storage space for specific tabs
//1.session storage    ----> when the tab is closed the stored data destroys and then starts recreating newly
//2.local storage   -------> even when the tab is closed the stored data can be restored 

//if we refresh the page both will not be destroyed.
//will destroy only when we use the below clear content.
//the memory storage space alloted is called storage objects.


localStorage.clear();
sessionStorage.clear();


//they both depend on URL but differs in the time they are being stored.