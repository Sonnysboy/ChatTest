 
// toYou e.g (MSG RECIEVED) 
// const toYou = '<info style="color:#AAAAAA">[<info style="color:#55FFFF">me <info style="color:#AAAAAA">\u00bb <info style="color:#FFFF55">Sam<info style="color:#AAAAAA">] <info style="color:#FFFFFF">%message%', 
//   recieved = '<info style="color:#AAAAAA">[<info style="color:#55FFFF">Sam <info style="color:#AAAAAA">\u00bb <info style="color:#FFFF55">me<info style="color:#AAAAAA">] <info style="color:#FFFFFF">%message%';

// class User {
//   #name
//   #uuid

//   constructor(name, uuid, admin) {
//     this.#name = name;
//     this.#uuid = uuid;

//   }  
//   addExp(int) {
    
//   }
//   addMessage(who, what) {
//     // if (!(what instanceof User)) throw Error("what");
//     addMessage({name : who, text: what});
//   }
//   sudo(what) {
//     if (nameField.val().indexOf(this.#name) > -1) {
      
//     $("#messageInput").val(what.toString());
//     $("#messageInput").submit();
//     }

//   }

// }

// class MessageBase {
//   // user = 'testUser'
//   // message = 'testMessage'
// //  reciever = 'testUser'
//   constructor(name) {
//     this.base = 'chat_based_message'
//     this.name = name;
//   }
// }
// class MessageCore extends MessageBase {
//     constructor(sender, reciever) {
//     super('pm_message_base');
//     this.#reciever = reciever
//     this.#sender = sender
    
//   }
//   message
//   #reciever
//   #sender
//   #messageRecievedFormat = `<info style="color:#AAAAAA">[<info style="color:#55FFFF">${this.#sender} <info style="color:#AAAAAA">\u00bb <info style="color:#FFFF55">me<info style="color:#AAAAAA">] <info style="color:#FFFFFF">${this.message}`
//   #messageSentFormat  = `<info style="color:#AAAAAA">[</info><info style="color:#55FFFF">me</info> <info style="color:#AAAAAA">\u00bb</info> <info style="color:#FFFF55">${this.#reciever}</info><info style="color:#AAAAAA"></info>] <info style="color:#FFFFFF">${this.message}`
  
//   #storeRef = 'https://www.jsonstore.io/1f870a5d0362a3b3ed68f1c48ef32f91d54c816aa6685899db6ace6edf355b0b'

//   static startConversation(sender, reciever) {
//     var xhr = new XMLHttpRequest();
//     this(sender, reciever);
//   }
//  sendMessage(message) {
//     this.message = message;

//   }

//   get reciever() {
//     return this.#reciever;
//   }
//   set reciever(who) {
//     this.#reciever = who
//   }

// }