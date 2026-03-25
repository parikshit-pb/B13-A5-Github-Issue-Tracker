# 🌟 Welcome To (সহজ সরল সিম্পল) Assignment - 5

# **📅 Deadline For 60 marks:** 9th March, 2026 (11:59 pm ⏱️)  
#  📅 No Deadline For 50 marks  
# **📅 Deadline For 30 marks:** Any time after 9th March.

---

# Assignment-05: GitHub Issues Tracker


### **API Endpoints:**
###  **All Issues:** 
  - https://phi-lab-server.vercel.app/api/v1/lab/issues 


###  **Single Issue:**
   - https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

   - Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33


###  **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

   - Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications


---

## 📝 Main Requirements

## 🎨 Design Part

## Login Page
- Create a login page containing a logo, title, and sub-title
- Below that, there will be 2 inputs, a sign-in button, and a demo credential to sign in. Follow the Figma for this page 
- Styled as per Figma

## Main Page: 

### Navbar: 

- Navbar with website logo/name on the left
- Search input and button on the right

### Tab Section like Figma: 

- 3 tab ( All, Open, Closed) at the top of this section.(**All**, **Open**, **Closed**)

- Below the tab, there will be an icon, the issue count, some text on the left, and an open and closed marker on the right

- Responsiveness: The website should be responsive for mobile devices. It is totally up to you. 


--- 


## ⚙️ Functionalities
- In login page, there will be default admin credentials (username, password). You need to sign in using these credentials.

- Load all issues and display as per Figma

- On clicking on an open or closed tab, it will load the issues data of the related tab and show it in a display-like card in a 4-column layout like Figma. By default, it will show all data 

- Each card shows:
  - Title
  - Description
  - Status
  - Category
  - Author
  - Priority
  - Label
  - CreatedAt
- Clicking on a tree name in a card will open a modal and show all the information about that Issue. 

### 🚀 Challenges


- Show the card Top border based on their category(open, closed), open card will have Green Boder, closed card will have a purple border on top. 

- Loading spinner on data load

- Show active button on changing category names

- Implement Search Functionality and 8 meaningful github commit.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 
    - 1️⃣ What is the difference between var, let, and const?
    In JavaScript, var, let, and const are used to declare variables, but they have important differences. var is function-scoped, meaning it is accessible within the function where it is declared, while let and const are block-scoped, meaning they are only accessible within the {} block in which they are defined. var allows redeclaration of the same variable, but let and const do not allow redeclaration in the same scope. When it comes to reassignment, both var and let allow their values to be changed after declaration, whereas const does not allow reassignment once a value is assigned. In terms of hoisting, var is hoisted and initialized with undefined, so it can be accessed before declaration without an error, while let and const are also hoisted but remain in the Temporal Dead Zone, which means accessing them before declaration results in an error. In modern JavaScript, const is generally preferred as the default choice, let is used when a variable’s value needs to change, and var is mostly avoided.

    - 2️⃣ What is the spread operator (...)?
    The spread operator (...) in JavaScript is used to expand (spread) elements of an array, object, or iterable into individual elements. It helps in copying, merging, or passing values easily without modifying the original data.

    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    In JavaScript, map(), filter(), and forEach() are array methods, but they are used for different purposes.

map() is used when you want to transform each element of an array and return a new array with the modified values. It always returns a new array of the same length as the original array.

filter() is used to create a new array with only the elements that satisfy a given condition. It returns a subset of the original array based on a test function.

forEach() is used to iterate over each element of an array and perform an action, but it does not return a new array. It is mainly used for side effects like logging or updating variables.

In summary, map() is for transforming data and returns a new array, filter() is for selecting specific elements based on a condition, and forEach() is for looping through elements without returning anything.

    - 4️⃣ What is an arrow function?
    An arrow function is a shorter and more modern way to write functions in JavaScript, introduced in ES6. It uses the => (arrow) syntax instead of the traditional function keyword. Arrow functions make code cleaner and more concise, especially for simple operations.

    - 5️⃣ What are template literals?
Template literals are a feature in JavaScript that allow you to create strings using backticks (`) instead of quotes. They make it easier to include variables, expressions, and multi-line strings inside a string.

---

## 🛠️ Technology Stack

- **HTML**
- **CSS** (Vanilla/Tailwind/DaisyUI)
- **JavaScript** (Vanilla)

---

## 🔑 Demo Credentials

```text
Username: admin
Password: admin123
```


---

### Optional: 
 - No need to show status: Open, Closed styles On modals. 
 - No Need to show icon on labels 
 - No need to apply styles on Priority 
--- 


## 📤 What to submit

- **GitHub Repository Link:**
- **Live Site Link:**

---


