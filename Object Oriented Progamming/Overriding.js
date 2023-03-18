/*Constructor merupakan method spesial pada class yang akan dipanggil
pada saat pembuatan instance, lebih tepatnya ketika menggunakan keyword
 new diikuti dengan nama class.*/

//  Example

//superclass
class MailService{
    constructor(sender){
        this.sender = sender;
    }
}

//subclass
class WhatsAppService extends MailService{
    //Overriding Constructor
    constructor(sender,isBusiness){
        //Pengindikasian Properti bisnis
        // super(sender);//Super bertujuan untuk pemanggilan superclass
        this.sender = sender;
        this.isBusiness = isBusiness;
    }
}

const whatsapp = new WhatsAppService('+62813120491',true)
/*ReferenceError: Must call super constructor
in derived class before accessing 'this'*/
//Solve: Dengan menambakan methode super pada line 19
//Example : super(sender)

