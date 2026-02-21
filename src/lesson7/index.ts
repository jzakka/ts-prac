export { };

function fetchUser(id: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, name: 'Alice' })
            } else {
                reject(new Error('Invalid ID'))
            }
        }, 1000)
    })
}

function fetchPost(userId: number): Promise<{ id: number; title: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, title: 'Hello World' })
        }, 1000)
    })
}

fetchUser(1)
    .then(user => {
        console.log('User:', user)
        return fetchPost(user.id)
    })
    .then(post => {
        console.log('Post:', post)
    })
    .catch(error => {
        console.error('Error:', error)
    })

async function getUserData(id: number) {
    try {
        const user = await fetchUser(id);
        console.log('User:', user)

        const posts = await fetchPost(user.id);
        console.log('Posts:', posts);

        return { user, posts };
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

const userData = getUserData(1);
console.log('User data promise:', userData)

async function fetchMultipleUsers() {
    const promises = [
        fetchUser(1),
        fetchUser(2),
        fetchUser(3),
    ]

    const users = await Promise.all(promises);
    console.log('All users:', users)
}

async function fetchWithTimeout() {
    const timeoutPromies = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timed out')), 3000)
    })

    const dataPromise = fetchUser(1);

    try {
        const result = await Promise.race([dataPromise, timeoutPromies]);
        console.log('Result:', result)
    } catch (error) {
        console.error('Timeed out or failed:', error)
    }
}

async function fetchAllUsersEventIfFailed() {
    const results = await Promise.allSettled([
        fetchUser(1),
        fetchUser(-1),
        fetchUser(2),
    ])

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`User ${index}:`, result.value)
        } else {
            console.error(`User ${index} failed:`, result.reason)
        }
    })
}

interface User {
    id: number;
    name: string;
    email: string;
}

async function fetchUserFromApi(id: number): Promise<User> {
    const response = await fetch(`https://api.example.com/users/${id}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const user: User = await response.json();
    return user;
}

async function main() {
    try {
        const user = await fetchUserFromApi(1);
        console.log("Fetched user:", user)
    } catch (error) {
        console.error("Error fetching user:", error)
    }
}

async function fetchData1() {
    try {
        const data = await fetchUser(1);
        return data;
    } catch (error) {
        console.error("Error:", error)
        throw error;
    }
}

async function fetchData2() {
    const data = await fetchUser(1).catch(err => {
        console.log('Error:', err)
        return null;
    })
    return data;
}

async function getNumber(): Promise<number> {
    return 42;
}

async function getUser() {
    return { id: 1, name: 'Alice' }
}

const promise = getNumber(); // Promise<number>
// const value = await getNumber(); // number

async function sequential() {
    const user1 = await fetchUser(1);
    const user2 = await fetchUser(2);
    const user3 = await fetchUser(3);

    return [user1, user2, user3];
}

async function parallel() {
    const [user1, user2, user3] = await Promise.all([
        fetchUser(1),
        fetchUser(2),
        fetchUser(3),
    ])
    return [user1, user2, user3];
}

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url: string, maxRetries: number = 3): Promise<any> {
    const result = await fetch(url).catch(err => {
        if (maxRetries == 1) {
            return Promise.resolve({id: 1, name: 'Bob'});
        }
        if (maxRetries > 0) {
            console.log(`Retrying... (${maxRetries} attempts left)`)
            return delay(1000).then(() => fetchWithRetry(url, maxRetries - 1))
        } else {
            throw new Error('Max retries reached');
        }
    })
    return result;
}

fetchWithRetry('https://api.example.com/data')
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error fetching data:', error));