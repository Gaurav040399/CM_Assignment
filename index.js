const contacts = [
    {
      id: 1,
      name: "New Name 1",
      email: "new.email1@example.com",
      age: 40, 
      password: "newPassword1", 
      phone: "1234567890", 
    },
    {
      id: 2,
      name: "New Name 2",
      email: "new.email2@example.com",
      age: 25, 
      password: "newPassword2", 
      phone: "9876543210", 
    },
    {
      id: 3,
      name: "New Name 3",
      email: "new.email3@example.com",
      age: 35, 
      password: "newPassword3", 
      phone: "5555555555", 
    },
    {
      id: 4,
      name: "New Name 4",
      email: "new.email4@example.com",
      age: 29, 
      password: "newPassword4", 
      phone: "6666666666", 
    },
    {
      id: 5,
      name: "New Name 5",
      email: "new.email5@example.com",
      age: 33, 
      password: "newPassword5", 
      phone: "7777777777", 
    },
    {
        id: 6,
        name: "New Name 5",
        email: "new.email6@example.com",
        age: 33, 
        password: "newPassword5", 
        phone: "7777777777", 
      },
];

const orders=[
    {
        id: 10,
        orderCount: 2,
        orderValue: 2000,
        products: ["Watch","Earphone"],
        email: "new.email1@example.com",
        orderDate: "2021-05-10",
    },
    {
        id: 11,
        orderCount: 3,
        orderValue: 3000,
        products: ["Watch","Earphone","Airpods"],
        email: "new.email2@example.com",
        orderDate: "2021-05-20",
    },
    {
        id: 12,
        orderCount: 5,
        orderValue: 10000,
        products: ["Watch","Earphone","Airpods","Phone","Mic"],
        email: "new.email3@example.com",
        orderDate: "2021-07-20",
    },
    {
        id: 13,
        orderCount: 4,
        orderValue: 8000,
        products: ["Watch","Earphone","Airpods","Mic"],
        email: "new.email3@example.com",
        orderDate: "2021-08-20",
    },
    {
        id: 14,
        orderCount: 3,
        orderValue: 9000,
        products: ["Watch","Phone","Mic"],
        email: "new.email4@example.com",
        orderDate: "2021-10-20",
    },
    {
        id: 15,
        orderCount: 1,
        orderValue: 2000,
        products: ["Airpods"],
        email: "new.email5@example.com",
        orderDate: "2021-09-20",
    },
    {
        id: 16,
        orderCount: 1,
        orderValue: 2000,
        products: ["Airpods"],
        email: "new.email6@example.com",
        orderDate: "2021-09-20",
    }     
]

function syncOrders(contacts,orders){

    const emailData={}
    for(let i=0; i<contacts.length; i++){
        const contact=contacts[i]
        emailData[contact.email]={...contacts[i],orders:[]}
    }
    for(let i=0; i<orders.length; i++){
        const order=orders[i]
        const contactData=emailData[order.email]
        if(contactData){
            contactData.orders.push(order)
        }
    }
    const result=[]
    for(let key in emailData){
        result.push(emailData[key])
    }
    console.log(result)
    console.log(result.orders)
    // return result;

}
// const data=syncOrders(contacts,orders)
// console.log(data,data.orders)