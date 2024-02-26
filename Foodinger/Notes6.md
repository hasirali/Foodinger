# MONOLITH AND MICROSERVICE ARCHITECTURE AND USE EFFECT HOOKS

## Monolith Architecture:

### What is it?

- A monolith is like a big, single book that contains everything.
In the context of software, a monolith is an application where all the components (front-end, back-end, database, etc.) are tightly connected and packaged together.
- Think of a bookstore where all the sections (fiction, non-fiction, children's books) are in one giant bookshelf.
If you want to change something in the fiction section, you have to touch the entire bookshelf.
- Challenges => Maintenance: Changing something in one section might affect the entire bookshelf, making updates trickier.


## Microservice Architecture:

### What is it?

- Microservices are like separate books, each covering a specific topic.
- In software, microservices architecture breaks down an application into smaller, independent services that can operate on their own.

- Think of a library where each genre (e.g., fiction, non-fiction) has its own section.
If you want to change something in the fiction section, you only need to update that section without affecting others.

### Advantages:

- Scalability: Each section can grow independently. If fiction becomes popular, you can expand only the fiction section.
- Flexibility: Easier to update and deploy because changes in one microservice don't impact others.


# Part 6

## In this we will fetch Data from Swiggy API

### there are Two Approaches

1) As Soon as our page load , we will make an API call and wait for data to come and then render the UI.

2)  As Soon as our page load , we will just render a UI , after we will render then we will make API call and then we will render our API once again.[In react we will using this approach] but we are rendering twice but react rendering mechanism is fast, this is better approach it gives better UX? HOW.. => we can see the skeleton .
- it is done by useEffect


# USE EFFECTS HOOK

- use effect is a normal function with a call back function and a dependeny array
- useEffect( ()=>{} , []   )
- this will be called after your components render, when render cycle is finished then it will call the useEffect.
- In short pehle body render hogi uske baad useEffect wala part render hoga

- use kaha hua?

- |Loads|-> |Render| ->|API | -> |Re Render |
- API fetch hogi wo useEffect mai hogi
- and fetching is same as javascript


```
 useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    console.log(json);
  };

``` 
use this to fetch Swiggy API

- and i want the new fetch data on my app and not the Ui made by mock data

# Cros 
- Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers to restrict webpages from making requests to a different domain than the one that served the original web page. It is a security measure to prevent potential malicious attacks, such as cross-site request forgery.