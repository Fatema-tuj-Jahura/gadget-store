# Gadget Store

A modern e-commerce website where users can browse, add gadgets to their cart or wishlist, and manage their orders efficiently. Built with React, this application leverages fundamental React concepts for smooth navigation, state management, and user interactions.

## Live Website

**[Gadget Store Live Site](https://jazzy-pika-fc7dd7.netlify.app/)**

## Requirement Document

**[Project Requirement Document](https://docs.google.com/document/d/1ALk5yU9mEePWDHmnYT2AS1o-c789xdsXIai-XP-R788/edit?addon_store&tab=t.0)**

##  Key React Concepts Used

The project showcases the following React fundamentals:

1. **Components and Props**: Breaking down the UI into reusable components and passing data via props.
2. **State Management**: Managing component states for interactive UI, like adding items to the cart or wishlist.
3. **React Router**: Setting up multiple pages, navigation, and dynamic routing for a seamless user experience.
4. **useEffect Hook**: Side effects such as data fetching and updating the component lifecycle based on user interactions.
5. **Context API**: Providing global state to manage cart and wishlist data across the application.
6. **Local Storage**: To persist cart and wishlist data.
7. **react-helmet-async**: For managing dynamic page titles.
8. **react-toastify**: For toast notifications.
9. **useNavigate**: For visiting route.
10. **useState**: Managing component-level state, particularly for tracking items in the cart and wishlist.

## Data Handling and Management

- **Context API**: Used to manage global state and share data between components, providing a smooth and centralized way of handling data across the application.
- **Local Storage**: Some data, like the cart and wishlist, is stored in the browser's local storage to persist user data even after page refresh.

##  Key Features

1. **Dynamic Cart and Wishlist Management**: Users can add or remove items from their cart or wishlist, with persistent storage across sessions.
2. **Product Details Page**: Each gadget has a detailed page showing specifications, price, and a heart icon for adding to the wishlist.
3. **Conditional Navigation Styles**: Navbar changes color based on the current route, using `useLocation()` to track the route and apply relevant styling.
4. **Purchase Modal and Confirmation**: Upon purchase, a modal confirmation with a thank-you message appears, then navigates the user back to the homepage.
5. **Error Handling with 404 Page**: Redirects users to a 404 page if they navigate to an unavailable route, improving overall navigation and user experience.



