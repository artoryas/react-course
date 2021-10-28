export async function sendDataToAPI(data) {
    const response = await fetch('https://mockserver.com/user/new', {
        method: 'POST',
        body: JSON.stringify(data),
    });

    return await response.json();
}

const mockData = [
    {
        name: 'John',
        age: 21,
    },
    {
        name: 'Alex',
        age: 25,
    },
    {
        name: 'Martha',
        age: 18,
    },
    {
        name: 'Julie',
        age: 36,
    },
    {
        name: 'Cat',
        age: 40,
    },
];

export function getProfileDate(id) {
    return new Promise((resolve, reject) => {
        if (id !== null && id < mockData.length) {
            setTimeout(() => {
                resolve(mockData[id])
            }, 1000);
        } else {
            reject('Out of bounds');
        }   
    })
}