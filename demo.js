class account {
    constructor(name,email){
        this. acc_Name=name;
        this. acc_Email=email;
        
    }
}
class  Saving_account extends account {
constructor( id,name,email,amount){
    super( name,email)
    this. acc_ID=id;
    this. acc_Amount=amount;

}
}
let a1 =new Saving_account (101, 'Rahul','Rahul@gmail.com',1000)
let a2 =new Saving_account( 102, 'priya', 'priya@gmail.com', 1500)


console.log (a1) 