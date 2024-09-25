---
title: "Object Oreinted Programming"
category: "Java"
date: "02-02-2023"
---


### ***Class***

A [class](https://www.geeksforgeeks.org/classes-objects-java/) is a user-defined blueprint or prototype from which objects are created.  It represents the set of properties or methods that are common to all objects of one type. In general, class declarations can include these components, in order:

1. ****Modifiers**** : A class can be public or has default access. Refer to [access specifiers for classes or interfaces in Java](https://www.geeksforgeeks.org/access-specifiers-for-classes-or-interfaces-in-java/)
2. **Class name:*** The name should begin with an initial letter (capitalized by convention).
3. ***Superclass(if any):** The name of the class’s parent (superclass), if any, preceded by the keyword extends. A class can only extend (subclass) one parent.
4. **Interfaces(if any):*** A comma-separated list of interfaces implemented by the class, if any, preceded by the keyword implements. A class can implement more than one interface.
5. **Body:** The class body is surrounded by braces, { }.

### **. Object***

An [Object](https://www.geeksforgeeks.org/classes-objects-java/) is a basic unit of Object-Oriented Programming and represents real-life entities.  A typical Java program creates many objects, which as you know, interact by invoking methods. An object consists of :

1. ****State** : It is represented by the attributes of an object. It also reflects the properties of an object.
2. **Behavior*** : It is represented by the methods of an object. It also reflects the response of an object to other objects.
3. ***Identity** : It gives a unique name to an object and enables one object to interact with other objects.

### ***. Interface***

Like a class, an [interface](https://www.geeksforgeeks.org/interfaces-in-java/) can have methods and variables, but the methods declared in an interface are by default abstract (only method signature, no body).

- Interfaces specify what a class must do and not how. It is the blueprint of the class.
- An Interface is about capabilities like a Player may be an interface and any class implementing Player must be able to (or must implement) move(). So it specifies a set of methods that the class has to implement.
- If a class implements an interface and does not provide method bodies for all functions specified in the interface, then the class must be declared abstract.
- A Java library example is Comparator Interface . If a class implements this interface, then it can be used to sort a collection.
