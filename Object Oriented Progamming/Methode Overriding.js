/*Overriding dapat diterapkan pada methode class biasanya digunakan
untuk penubahan implementasi methode warisan pada superclass */
//EXAMPLE:

class MailService{
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

class WhatsAppService extends MailService{
    constructor(sender, isBussiness){
        super(sender);
        this.isBussiness = isBussiness;
    }

    //Overriding Methode
    sendMessage(message, receiver){
        //memanggil methode sendMessage pada super classs
        // console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`)
        super.sendMessage(message,receiver)
        console.log('Message sent via WhatsApp')
    }
}

//Input
const mailService = new MailService('someSender')
const whatsAppService = new WhatsAppService('+628714287419', true)

mailService.sendMessage('Hai,apa kabar ?','someReceiver')
whatsAppService.sendMessage('Hai, apa kabar?','+628914272134')



