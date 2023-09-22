// Sample data representing Contacts and Deals
const contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
   { id: 3, name: 'Gaurav Asode', email: 'gaurav@example.com' },
];

const deals = [
    { dealId: 101, contactId: 1, amount: 1000, date: '2021-03-15' },
  { dealId: 104, contactId: 1, amount: 1200, date: '2021-03-17' },
    { dealId: 102, contactId: 2, amount: 1500, date: '2022-02-20' },
    { dealId: 103, contactId: 3, amount: 800, date: '2021-05-10' }, 
    { dealId: 106, contactId: 3, amount: 800, date: '2021-05-20' },  
   { dealId: 105, contactId: 1, amount: 1500, date: '2021-03-14' },
];


function syncDealsWithContacts() {
    const syncedDeals = [];
    
    for (const deal of deals) {
        const contact = contacts.find(c => c.id === deal.contactId);
        // console.log(contact)
        if (contact) {
          
            if (!contact.deals) {
                contact.deals = [];
            }
            contact.deals.push({ dealId: deal.dealId, amount: deal.amount, date: deal.date });
            syncedDeals.push(deal);
        } else {
            console.warn(`Deal with ID ${deal.dealId} has no matching contact.`);
        }
    }

    return syncedDeals;
}


const syncedDeals = syncDealsWithContacts();

// Log the synchronized data
// console.log('Synced Contacts:', contacts);
// console.log('Synced Deals:', syncedDeals);


for (const contact of contacts) {
    console.log(`Deals for ${contact.name}:`);
    for (const deal of contact.deals) {
      console.log(deal)
    }
}
