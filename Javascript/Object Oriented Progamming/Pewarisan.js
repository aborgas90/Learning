//Pewarisan (inHeritance)
//Fungsi InHeritance ketika memiliki study case dengan object yang mirip tapi memiliki sedikit perbedaan

//Terdapat Duplikasi Code
// class WhatsAppService {
//     constructor(sender){
//         this.sender = sender;
//     }

//     sendMessage(message,receiver){
//         console.log(`${this.sender} sent ${message} to ${receiver}`);
//     }

//     sendMessageBroadcast(message,receivers){
//         for(const receiver of receivers){
//             this.sendMessage(message,receivers);
//         }
//     }
// }

// class EmailService{
//     constructor(sender){
//         this.sender = sender;
//     }

//     sendMessage(message,receiver){
//         console.log(`${this.sender} sent ${message} to ${receiver}`);
//     }

//     sendDelayedMessage(message,receiver,delay){
//         setTimeout(()=>{
//             this.sendMessage(message,receiver);
//         },delay);
//     }
// }

//Setelah diubah codenya agar tidak terdapat duplikasi

/*class MailService{
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message,receiver){
        console.log(`${this.sender} sent  to `);
    }

    sendDelayedMessage(message,receiver,delay){
        setTimeout(()=>{
            this.sendMessage(message,receiver);
        },delay);
    }

    sendMessageBroadcast(message,receivers){
        for(const receiver of receivers){
            this.sendMessage(message,receiver);
        }
    }
}

const whatsapp = new MailService('+628132812937')
const email = new MailService('kenapa@example.com')*/

/*Kode diatas ada beberapa study case yg tidak membutuhkan seperti whatssapp yg tidak butuh delay*/
/*Solusinya menggunakan super class pada object yang sama dan subclass untuk object yang berbeda*/

//Superclass
class MailService{
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message,receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

//Subclass
class WhatsAppService extends MailService{
    sendMessageBroadcast(message,receivers){
        for(const receiver of receivers){
            this.sendMessage(message,receiver);
        }
    }
}

//Subclass
class EmailService extends MailService{
    sendDelayedMessage(message,receiver,delay){
        setTimeout(()=>{
            this.sendDelayedMessage(message,receiver)
            },delay);
        }
}

//pembuatan dua object
const whatsapp = new WhatsAppService('+6281328129');
const email = new EmailService('kenapa@example.com');

whatsapp.sendMessage('Hello World','+6282491040');
whatsapp.sendMessageBroadcast('Hello World',['+6282491040','+6281328129']);

email.sendMessage('Hello World','kenapa@example.com');
email.sendDelayedMessage('Hello World','kenapa@example.com', 3000);

