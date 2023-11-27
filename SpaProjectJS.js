var app= angular.module('myApp',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/' , {
        templateUrl : 'homecontent' ,
        controller : 'HomeController'
    })
    .when('/ds' , {
        templateUrl : 'dscontent' ,
        controller : 'DSController'
    })
    .when('/oops' , {
        templateUrl : 'oopscontent' ,
        controller : 'oopsController'
    })
    .when('/sql' , {
        templateUrl : 'sqlcontent' ,
        controller : 'sqlController'
    })
    .when('/java' , {
        templateUrl : 'javacontent' ,
        controller : 'javaController'
    })
    .when('/c' , {
        templateUrl : 'ccontent' ,
        controller : 'cController'
    })
    .otherwise({redirectTo : '/'});
});

app.controller('HomeController' , function($scope) {
    $scope.message= " Preparing for an IT (Information Technology) interview involves a combination of technical knowledge, problem-solving skills, and effective communication. Here's a comprehensive guide to help you prepare: "
    $scope.message2= "Technical Knowledge:"
    $scope.message3= "1. Review Core Concepts: Brush up on fundamental concepts in computer science, algorithms, and data structures. Understand key topics like databases, networking, operating systems, and software development methodologies."
    $scope.message4= "2. Programming Languages: Be proficient in at least one programming language commonly used in IT roles (e.g., Python, Java, C++, JavaScript). Know how to write clean and efficient code."
    $scope.message5= " 3. Database Knowledge: Understand database concepts, SQL, and database management systems (e.g., MySQL, PostgreSQL, MongoDB). Know how to design and optimize database schemas."
    $scope.message6= "4. Networking Basics: Familiarize yourself with networking fundamentals, including protocols, IP addressing, routing, and security.  "
    $scope.message7= "5. Operating Systems: Have a good understanding of operating system concepts, including processes, memory management, file systems, and security."
    $scope.message8= " Company-Specific Knowledge:"
    $scope.message9= "  2. Problem Classification:  Classify problems based on their patterns. Recognize common problem-solving techniques. Categories include searching, sorting, dynamic programming, recursion, backtracking, and more. "
    $scope.message10= " 3. Solve Real-World Problems: Relate data structures and algorithms to real-world scenarios. Understand how to apply your knowledge to solve practical problems."
    $scope.message11= " Interview-Specific Tips: "
    $scope.message12= " 1. Research the Company 2. Industry Trends 3. Communication Skills 4. Effective Communication  "
    $scope.message13= " Portfolio and Projects: Showcase relevant projects in your portfolio that demonstrate your skills and problem-solving abilities."
    $scope.message14= "Remember, the goal is not only to demonstrate technical proficiency but also to showcase your problem-solving abilities, communication skills, and cultural fit within the organization. Be confident, stay positive, and approach each interview as an opportunity to learn and grow. "
   
});

app.controller('DSController' , function($scope) {
    $scope.message= "Data Structure is a must to crack your interview! "
    $scope.message2= "Preparing for a data structure interview requires a combination of theoretical knowledge and problem-solving skills. Here are some tips to help you prepare effectively:  "
    $scope.message3= "Theoretical Knowledge" 
    $scope.message4= "1.Understand Core Concepts: " + "Ensure a strong understanding of fundamental data structures like arrays, linked lists, stacks, queues, trees, and graphs. Know the characteristics, use cases, and implementation details of each data structure."
    $scope.message5= " 2. Algorithms: " + "Study commonly used algorithms for searching, sorting, d traversing data structures.Learn algorithmic paradigms like divide and conquer, dynamic programming, and greedy algorithms."
    $scope.message6= "3. Time and Space Complexity: " + " Be familiar with analyzing the time and space complexity of algorithms. Understand Big O notation and be able to evaluate the efficiency of an algorithm.  "
    $scope.message7= "Problem-Solving:  "
    $scope.message8= " 1. Practice Coding: Implement data structures and algorithms in a programming language of your choice. Practice coding problems on platforms like LeetCode, HackerRank, or CodeSignal."
    $scope.message9= "  2. Problem Classification:  Classify problems based on their patterns. Recognize common problem-solving techniques. Categories include searching, sorting, dynamic programming, recursion, backtracking, and more. "
    $scope.message10= " 3. Solve Real-World Problems: Relate data structures and algorithms to real-world scenarios. Understand how to apply your knowledge to solve practical problems."
    $scope.message11= " Interview-Specific Tips: "
    $scope.message12= " Mock Interviews:  Practice coding interviews with a friend or use online platforms that simulate interview conditions.  Get comfortable explaining your thought process aloud."
    $scope.message13= "For Mock Interviews: Use platforms like Pramp, interviewing.io, or schedule mock interviews with friends. " + "\n " + "Additional Tips: 1. Stay Consistent. 2. Learn from Mistakes. 3. Stay Updated."
    $scope.message14= " Remember, the goal is not just to solve problems but to develop a strong problem-solving mindset. Break down problems, communicate your thought process clearly, and continuously seek improvement."

});

app.controller('oopsController' , function($scope) {
    $scope.message= "Object Oriented programming is must to crack your interview! "
    $scope.message2= " Object-Oriented Programming (OOP) is a fundamental concept in software development, and understanding it is crucial for many technical interviews. Here are key Object-Oriented Programming concepts you should be familiar with for interviews:"
    $scope.message3= " 1. Class and Object:"
    $scope.message4= " Class: A blueprint for creating objects. It defines a set of attributes (fields) and methods that describe the behavior of objects."
    $scope.message5= " Object: An instance of a class, representing a real-world entity."
    $scope.message6= " 2. Encapsulation: Bundling of data (attributes) and methods that operate on the data within a single unit (class). Benefits: Encapsulation helps in data hiding, preventing unauthorized access to data, and promoting code organization."
    $scope.message7= " 3. Inheritance: A mechanism where a class (subclass/derived class) inherits properties and behaviors from another class (superclass/base class). Benefits: Code reusability, extensibility, and the ability to model real-world relationships. "
    $scope.message8= " 4. Polymorphism: The ability of a class to take on multiple forms. It can occur through method overloading or method overriding. Types: a). Compile-time Polymorphism: Achieved through method overloading. b). Runtime Polymorphism: Achieved through method overriding. "
    $scope.message9= " 5. Abstraction: The process of hiding complex implementation details and showing only the essential features of an object. Benefits: Reduces code complexity, focuses on relevant details, and facilitates code maintenance."
    $scope.message10= " 6. Association: A relationship between two or more classes, where objects in one class are connected with objects in another class. Types: Aggregation (weaker relationship) and Composition (stronger relationship)."
    $scope.message12= " 7. Dependency: A relationship where a change in one class may affect another class. Types: Tight coupling and Loose coupling."
    $scope.message13= " Real-World Examples: Relate OOP concepts to real-world scenarios. For example, how would you model a car, a bank account, or a student using classes and objects?"
    $scope.message14= " By mastering these OOP concepts and applying them in practical scenarios, you'll be well-prepared for technical interviews that assess your understanding of Object-Oriented Programming."

});

app.controller('sqlController' , function($scope) {
    $scope.message= "Structured Query Language is a must to crack your interview! "
    $scope.message2= "Preparing for a SQL (Structured Query Language) interview involves a combination of theoretical knowledge, hands-on practice, and problem-solving skills. Here are tips to help you prepare effectively: "
    $scope.message3= " Theoretical Knowledge: "
    $scope.message4= " 1. Understand Basic Concepts: Ensure a solid understanding of fundamental SQL concepts such as tables, columns, rows, primary keys, foreign keys, and indexes."
    $scope.message5= " 2. Master SQL Statements: Know essential SQL statements: SELECT, INSERT, UPDATE, DELETE. Understand how to use WHERE, GROUP BY, HAVING, ORDER BY clauses effectively."
    $scope.message6= " 3. Normalization: Understand the normalization process and its importance in database design. Be able to identify and explain different normal forms."
    $scope.message7= " 4. Indexes: Understand the purpose of indexes and how they impact query performance. Know when to use indexes and when not to."
    $scope.message8= " 5. Joins: Familiarize yourself with different types of joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN. Practice writing queries involving multiple tables."
    $scope.message9= " 6. Subqueries: Know how to use subqueries in SELECT, FROM, WHERE, and HAVING clauses. Understand the difference between correlated and non-correlated subqueries"
    $scope.message10= " Hands-on Practice: 1. Create and Manipulate Tables 2. Data Manipulation 3. Aggregate Functions 4. Aggregate Functions 5. Solve Real-world Problems 6. Optimize Queries "
    $scope.message12= " Use Database Management Systems (DBMS): Practice using popular database management systems like MySQL, PostgreSQL, or Microsoft SQL Server."
    $scope.message13= " By combining theoretical knowledge, hands-on practice, and problem-solving skills, you'll be well-prepared for SQL interviews. Additionally, practicing in a variety of contexts will help you feel comfortable tackling different types of SQL challenges during the interview."
});
app.controller('javaController' , function($scope) {
    $scope.message= "JAVA can help you to ace your interview "
    $scope.message2= "Preparing for a Java interview requires a combination of theoretical understanding, practical coding skills, and problem-solving ability. Here are some tips to help you prepare effectively:"
    $scope.message3= " Study Core Java Concepts:"
    $scope.message4= " 1. Data Types and Variables: Understand the different data types in Java (e.g., int, float, double, char) and their uses. Know how to declare and initialize variables."
    $scope.message5= " 2. OOP Concepts: Have a strong grasp of Object-Oriented Programming (OOP) concepts: classes, objects, inheritance, polymorphism, encapsulation, and abstraction."
    $scope.message6= " 3. Exception Handling: Know how to handle exceptions using try, catch, finally blocks. Understand the concept of checked and unchecked exceptions."
    $scope.message7= " 4. Collections Framework: Be familiar with common data structures in Java like Lists, Sets, and Maps. Understand the use of the Collections framework and when to use each type."
    $scope.message8= " 5. Multithreading: Understand the basics of multithreading and synchronization. Know how to create and manage threads in Java."
    $scope.message9= " 6. I/O Operations: Understand Java I/O operations, including reading and writing to files. Be familiar with concepts like BufferedReader and BufferedWriter."
    $scope.message10= " Advanced Java Concepts: 1. Java Generics 2. Java Stream API 3. Lambda Expressions 4. Java Annotations"
    $scope.message12= " Coding and Problem-Solving: 1. Practice Coding 2. Code Readability 3. Design Patterns 4. Database Connectivity"
    $scope.message13= " Algorithmic Thinking: Be ready to solve algorithmic problems during the interview. Practice time and space complexity analysis."
    $scope.message14= " By combining theoretical knowledge, hands-on coding practice, and problem-solving skills, you'll be well-prepared for Java interviews. Remember to stay calm, approach each problem methodically, and communicate effectively with the interviewer."

});
app.controller('cController' , function($scope) {
    $scope.message= "C / C++ can make you slay your interview "
    $scope.message2= "Preparing for a C/C++ interview requires a solid understanding of the programming language, problem-solving skills, and the ability to write efficient and readable code. Here are some tips to help you prepare: "
    $scope.message3= "Core Concepts: "
    $scope.message4= "1. Data Types: Know the fundamental data types in C/C++ (int, float, double, char) and their sizes. Understand the concept of signed and unsigned integers. "
    $scope.message5= "2. Pointers and References: Have a strong understanding of pointers in C/C++. Know how to use references in C++. "
    $scope.message6= "3. Memory Management: Understand dynamic memory allocation and deallocation using malloc, free (in C) and new, delete (in C++). Be aware of memory leaks and how to avoid them "
    $scope.message7= "4. Arrays and Strings: Know how to declare, initialize, and manipulate arrays. Understand C-style strings and the <string> library in C++. "
    $scope.message8= "5. Structures and Classes: Understand the difference between structures and classes in C++. Know how to declare and use structures/classes. "
    $scope.message9= "6. OOP Concepts (C++): Familiarize yourself with Object-Oriented Programming concepts in C++, including inheritance, polymorphism, encapsulation, and abstraction. "
    $scope.message10= " Problem-Solving Approach: Clearly articulate your thought process while solving problems. Break down problems into smaller steps and explain your approach before writing code. "
    $scope.message12= " Advanced Concepts: 1. Templates (C++) 2. STL (C++) 3. File I/O"
    $scope.message13= "Coding and Problem-Solving: 1. Practice Coding 2. Data Structures 3. Algorithmic Complexity "
    $scope.message14= " By combining a strong understanding of core concepts, hands-on coding practice, and effective problem-solving skills, you'll be well-prepared for C/C++ interviews. Remember to stay calm, think through each problem systematically, and communicate your thought process to the interviewer."

});
