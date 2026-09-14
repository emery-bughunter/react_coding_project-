
React TypeScript 50 Task README.md

100%
# React + TypeScript Component Development Guide

This project is designed to guide you through foundational and progressively more advanced tasks using **React** with **TypeScript**, focusing on component creation, props, styling, state management, events, forms, and component communication.

The structure includes five task categories, with a total of **50 tasks**. Complete the tasks in order, as later tasks build on concepts introduced earlier.

## Project Setup

To get started:

**I. Basic Component Creation with TypeScript (10 Tasks)**

1. **Set Up Project (TypeScript):** Create a new React project using `Vite`: `npm create vite@latest my-app -- --template react-ts`
2. **Run Development Server:** Start the development server and confirm that the application runs successfully in the browser.
3. **Clean Starter Project:** Remove unnecessary Vite starter content while keeping the application functional.
4. **Create a Component File:** Create a new file named `TeamDashboard.tsx` inside the `src` folder.
5. **Functional Component (Typed):** Create a functional component in `TeamDashboard.tsx`.
6. **Import Component:** Import `TeamDashboard` into the main `App.tsx` file.
7. **Render Component:** Render `TeamDashboard` inside the `App` component.
8. **JSX Elements:** Add a heading and paragraph describing your group application.
9. **Multiple Elements:** Return multiple JSX elements using a single parent element or a React Fragment (`<> </>`).
10. **Create a Reusable Component:** Create a second component named `MemberCard.tsx` and render it inside `TeamDashboard`.

**II. Props and TypeScript (10 Tasks)**

11. **Component Props (Typed):** Define an interface for `MemberCard` props with `name` and `role` properties.
12. **Display Props:** Display the `name` and `role` values inside `MemberCard`.
13. **Pass Props:** Pass different `name` and `role` values when rendering multiple `MemberCard` components.
14. **Numeric Prop:** Add a numeric prop called `tasksCompleted`.
15. **Boolean Prop:** Add a boolean prop called `isActive`.
16. **Conditional Rendering:** Display `Active` or `Inactive` based on the value of `isActive`.
17. **Optional Props:** Add an optional `bio` prop using the `?` modifier.
18. **Optional Rendering:** Display the `bio` only when one is provided.
19. **Default Values:** Provide a default value for one prop using a default function parameter.
20. **Typed Data Array:** Create a typed array of member objects and use `.map()` to render `MemberCard` components from the array.

**III. Styling Components (10 Tasks)**

21. **External CSS:** Create a separate CSS file for `MemberCard` and import it into the component.
22. **Class Names:** Add appropriate `className` attributes to JSX elements.
23. **CSS Selectors:** Define CSS rules for the card, member name, role, and other content.
24. **Card Styling:** Add padding, borders, spacing, and a background style to the member card.
25. **Multiple Classes:** Apply more than one CSS class to at least one JSX element.
26. **Dynamic Classes:** Apply a different CSS class depending on whether the member is active or inactive.
27. **Inline Styles (Typed):** Add one inline style to a JSX element using React's style attribute.
28. **Component-Specific Styling:** Keep `MemberCard` styling separate from general application styling.
29. **Responsive Design:** Add a media query so the layout adapts on smaller screens.
30. **Dashboard Layout:** Use Flexbox or CSS Grid to arrange multiple member cards in a clean responsive layout.

**IV. React State, Events, and Forms with TypeScript (10 Tasks)**

31. **useState Hook (Typed):** Import `useState` and create a numeric state variable named `teamScore`.
32. **Display State:** Display the value of `teamScore` in `TeamDashboard`.
33. **Update State:** Add a button that increases `teamScore` by 1.
34. **Functional Updates:** Update `teamScore` using the functional form of the state setter.
35. **Decrease State:** Add a second button that decreases the score without allowing it to go below 0.
36. **String State:** Create a state variable to store a new member's name.
37. **Controlled Input (Typed):** Add an input whose value is controlled by the new member name state.
38. **Change Event (Typed):** Type the input `onChange` event appropriately.
39. **Form Submission (Typed):** Place the input inside a form and handle submission using the appropriate TypeScript event type.
40. **Prevent Default and Use Input:** Use `event.preventDefault()` and display or log the submitted member name.

**V. Object State, Array State, and Component Communication (10 Tasks)**

41. **Member Interface:** Define an interface representing a complete team member object.
42. **Array State (Typed):** Move the members array into a typed `useState` variable.
43. **Add Member:** Update the form so that submitting it adds a new member object to the members array.
44. **Render Updated State:** Ensure that newly added members appear automatically in the dashboard.
45. **Remove Member:** Add a button to each `MemberCard` that removes that member from the array.
46. **Callback Props (Typed):** Pass the remove function from `TeamDashboard` to `MemberCard` using a correctly typed function prop.
47. **Toggle Member Status:** Add functionality to switch a member between active and inactive.
48. **Filter Members:** Add controls that allow the user to display `All`, `Active`, or `Inactive` members.
49. **Search Members:** Add a controlled search input that filters members by name.
50. **Final Integration:** Ensure the application combines typed components, props, styling, state, events, forms, filtering, and component communication into one working application without TypeScript errors.
Displaying React TypeScript 50 Task README.md.
