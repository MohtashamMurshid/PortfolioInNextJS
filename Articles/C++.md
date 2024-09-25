---
title: "Basic To Advance in CPP"
category: "C++"
date: "02-02-2023"
language: "C++"
---


**C++** is a general purpose programming language that is free-form and compiled. It is regarded as an intermediate-level language, as it comprises both high-level and low-level language features. It provides imperative, [[object-oriented programming language]]and generic programming features.

![[Pasted image 20240907160650.png]]
C++ supports the concept of **namespaces**. A namespace is essentially a prefix that is applied to all the names in a certain set. One way to think about namespaces is that they are like toolboxes with different useful tools. The using command tells the compiler to allow all the names in the **“std”** namespace to be usable without their prefix. The **iostream** file defines three names used in this program - **cout**, **cin**, and **endl** - which are all defined in the **std namespace**. “std” is short for **“standard”** since these names are defined in the standard C++ library that comes with the compiler.

Without using the std namespace, the names would have to include the prefix and be written as **std::cout**, **std::cin**, and **std::endl**.

### cin & cout

The name **cout** is short for **“character output”** and **cin**, correspondingly, is an abbreviation for **“character input”.**

In a typical C++ program, most function calls are of the form **object.function_name(argument1, argument2)**.

Symbols such as **<<** can also behave like functions, as illustrated by the use of **cout** above. This capability is called [operator overloading].

### { }

A block of code is defined with the { } tokens. { signifies the start of a block of code, ​and } signifies the end. The { } tokens have other uses as well.

### semicolons

Statements in C++ must be terminated with a semicolon.

### return

The return keyword tells the program to **_return_** a value to the function **int main** that called this function and then to continue execution in the **int main** function from the point at which this function was called.

The type of the value returned by a function must match the type specified in the declaration of the function.

C++ provides a rich set of built-in as well as user defined **data types.** Most of the **built-in** data types are described as follows:

- Int ("%d"): 32 Bit integer
- Long ("%ld"): 64 bit integer
- Char ("%c"): Character type
- Boolean (either true or false)
- Float ("%f"): 32 bit real value
- Double ("%lf"): 64 bit real value

The different types of variables define their bounds. A **char** can range only from **-128 to 127**, whereas a **long** can range from **-9,223,372,036,854,775,808** to **9,223,372,036,854,775,807**. This is because a **char** is represented using only **8** bits of information whereas **long** uses **64** bits of information.

To print **float** and **double** up to specific number of decimal places use:

**cout<<std::fixed << std::setprecision(**_number of decimal places_**)**

**setprecision()**  is available in the **iomanip** library**.**

**User Defined** data types are structures (struct) and classes (class). This will be covered later in the course.

### Type Modifiers

The above types can be modified using the following type modifiers: **signed** and **unsigned short** and **long.**

### Typedefs

Typedefs allow for creating new names (think of them as aliases) for existing types. Following is the simple syntax to define a new type using typedef:

typedef int item  
item number = 0 // number is a integer variable  
// item is equivalent to int, since we have use typedef and created new name for int as item

### Variables

In programming, a variable is a container (storage area) to hold data.

To indicate the storage area, each variable should be given a **unique name** (identifier). For example,

int val = 10;  
// Here, val is a variable of the **int** data type, and we have assigned an integer value 10 to it.  
// Also, we can change the value of the variable  
val = 15;

```c++
#include <iostream>

#include <iomanip>

using namespace std;

int main() {

    int num;

    long lon;

    char cha;

    float flo;

    double dou;

  

    cin >> num >> lon >> cha >> flo >> dou;

  

    cout << num << "\n" << lon << "\n" << cha << "\n";

    cout << fixed << showpoint << setprecision(3) << flo << "\n";

    cout << fixed << showpoint << setprecision(9) << dou << endl;

  

    return 0;

}
```
C++ allows us to convert data of one type to that of another. This is known as **type conversion**.

There are two types of type conversion in C++.

1. Implicit Conversion
2. Explicit Conversion (also known as Type Casting)

### Implicit Type Conversion

The type conversion that is done automatically done by the compiler is known as implicit type conversion. This type of conversion is also known as automatic conversion.

int a = 10;  
char b = 'A';  
a = a + b; // y implicitly converted to int. ASCII value of 'A' is 65  
cout<<a<<endl;  
// value of a is 75(10 + 65)  
  
int num_int;
double num_double = 10.79;  

// implicit conversion  
// assigning a double value to an int variable  
num_int = num_double;  
  
// Value of num_int will be 10  
// Here, the double value is automatically converted to int by the compiler before it is assigned to the num_int variable.  
This is also an example of implicit type conversion.

### Explicit Conversion

When the user manually changes data from one type to another, this is known as **explicit** conversion. This type of conversion is also known as **type casting**.

There are two major ways in which we can use explicit conversion in C++. They are:

1. C-style type casting (also known as cast notation)
2. Type conversion operators

#### C-style Type Casting

This is done by explicitly defining the required type in front of the expression in parenthesis. This can be also considered as forceful casting.

(data_type)expression;

Example:

int a = 10;  
char b = 'A';  
a = a + (int)b;  
cout<<a<<endl;  
// value of a is 75

#### Type conversion operators

C++ also has **four** operators for type conversion:

1. static_cast
2. dynamic_cast
3. const_cast
4. reinterpret_cast

float f = 4.5;     
// using cast operator   
```
int b = static_cast<int>(f);   
cout << b;  
``` 
// value of b is 4


**Try the following example in the editor below.**

You are given a character called **ch****,** print the **ASCII** value of the character.

**Example Input:**

ch = 'a'

**Example Output:**

97

The C++ math library is actually C’s math library. It is easy to use and is accessed by including `cmath`.

```
 <cmath>
```

### Square Root

The function `sqrt` is used to compute the **square root** of a number. It takes only one argument, the number, whose square root needs to be calculated.
```cpp
#include <iostream>  
#include <cmath>  
  
using namespace std;  
  
int main()  
{  
    int val = 10;  
    cout << sqrt(val) << endl;  
    // prints 3.16228   
    return 0;  
}
```
### Powers

The function `pow` is used to​ calculate the **power of a number** in C++. It takes as its first argument the number itself and the value to which it needs to be raised is the second argument.

```cpp
#include <iostream>  
#include <cmath>  
using namespace std;  
  
int main()  
{  
    int val = 5;  
    // we use the pow function to compute the powers of the integer values given  
    cout << pow(val, 2) << endl;  
    // prints 25  
    cout << pow(val, 3) << endl;  
    // prints 125  
    cout << pow(val, 0.5) << endl;  
    // prints 2.23607  
    return 0;  
}
```

### Trigonometry

To perform trigonometric operations, the **cmath** library provides the functions **sin​, cos and tan**. Each of the three takes​ only one argument, the number, on which these operations need to be applied.

```cpp
#include <iostream>  
#include <cmath>  
using namespace std;  
  
int main()  
{  
    float val = 5.7;  
  
    // here the sin, cos and tan functions are being used to compute the trignometric values  
    cout << sin(val) << endl;  
    // prints -0.550686  
    cout << cos(val) << endl;  
    // prints 0.834713  
    cout << tan(val) << endl;  
    // prints -0.659731  
    return 0;  
}
```
**Note**: Trigonometric functions in `cmath` use **RADIANS**.
# File Handling
Files are used to store data in a storage device permanently. File handling provides a mechanism to store the output of a program in a file and to perform various operations on it.

In C++, files are mainly dealt by using three classes **fstream**, **ifstream**, **ofstream** available in **fstream** headerfile.

- **ofstream**: Stream class to write on files
- **ifstream**: Stream class to read from files
- **fstream**: Stream class to both read and write from/to files.

**Opening a file**

A file must be opened before you can read from it or write to it. ?  
Either **ofstream** or **fstream** object may be used to open a file for **writing**. And **ifstream** object is used to open a file for **reading** purpose only.

void open(const char* file_name,ios::openmode mode);

The first argument of the open function defines the name and format of the file with the address of the file.

The second argument represents the mode in which the file has to be opened.   
The following modes are used as per the requirements.

|   |   |
|---|---|
|**Modes**|**Description**|
|in|File open for reading: the internal stream buffer supports input operations.|
|out|File open for writing: the internal stream buffer supports output operations.|
|binary|Operations are performed in binary mode rather than text.|
|ate|The output position starts at the end of the file.|
|app|All output operations happen at the end of the file, appending to its existing contents.|
|trunc|Any contents that existed in the file before it is open are discarded.|

**Default Open Modes:**

ifstream       ios::in  
ofstream       ios::out  
fstream        ios::in | ios::out

**Note:** You can combine two or more of these values by **OR**ing them together.

ofstream outfile;  
outfile.open("file.dat", ios::out | ios::trunc );

Example using **ifstream** & **ofstream** classes.
```cpp
#include <iostream>   
#include <fstream>   
    
using namespace std;   
    
// Driver Code   
int main()   
{   
    // Creation of ofstream class object   
    ofstream fout;   
    
    string line;   
    
    // by default ios::out mode, automatically deletes   
    // the content of file. To append the content, open in ios:app   
    // fout.open("sample.txt", ios::app)   
    fout.open("sample.txt");   
    
    // Execute a loop If file successfully opened   
    while (fout) {   
    
        // Read a Line from standard input   
        getline(cin, line);   
    
        // Press -1 to exit   
        if (line == "-1")   
            break;   
    
        // Write line in file   
        fout << line << endl;   
    }   
    
    // Close the File   
    fout.close();   
    
    // Creation of ifstream class object to read the file   
    ifstream fin;   
    
    // by default open mode = ios::in mode   
    fin.open("sample.txt");   
    
    // Execute a loop until EOF (End of File)   
    while (fin) {   
    
        // Read a Line from File   
        getline(fin, line);   
    
        // Print line in Console   
        cout << line << endl;   
    }   
    
    // Close the file   
    fin.close();   
    return 0;   
}
```

#### rand()

**rand()** function is used to generate random numbers. If we generate a sequence of random number with rand() function, it will create the same sequence again and again every time program runs.  
Say if we are generating 5 random numbers in C with the help of rand() in a loop, then every time we compile and run the program our output must be the same sequence of numbers.

**Syntax**

int rand(void):   
returns a pseudo-random number in the range of 0 to RAND_MAX.  
**RAND_MAX:** is a constant whose default value may vary between implementations but it is granted to be at least 32767.  
  
```cpp
cout<<rand()<<endl; // Outputs any random number
```

#### srand()

The **srand()** function sets the starting point for producing a series of pseudo-random integers. If srand() is not called, the rand() seed is set as if srand(1) were called at program start. Any other value for seed sets the generator to a different starting point.

**Syntax**

void srand( unsigned seed ):   
Seeds the pseudo-random number generator used by rand()   
with the value seed.

**Note:** The pseudo-random number generator should only be seeded once, before any calls to rand(), and the start of the program. It should not be repeatedly seeded, or reseeded every time you wish to generate a new batch of pseudo-random numbers.  
Standard practice is to use the result of a call to **srand(time(0))** as the seed. 

```cpp
int main(){   
    // This program will create different sequence of    
    // random numbers on every program run    
    
    // Use current time as seed for random generator   
    srand(time(0));   
    
    for(int i = 0; i<4; i++)   
        cout<<rand()<<" ";   
    return 0;   
}
```

```cpp
int main(){

cout<< rand()%1 <<endl;

}
```

The code will always output `0`.

Here's why:

1. `rand()%1` generates a random number between 0 and 1 (inclusive).
2. Since the range is only 1, the only possible result is 0.

Therefore, the code will always print `0`.

This introduces different comparison operators such as **==, !=, >, <, etc** that can be used in **C++** and which data types they can be applied to.

The conditions tested are specified using **comparison operators**. These operators cause the immediate statement in which they are contained to return a **Boolean** value of either `true` or `false`.

The following **comparison operators** are available:

- **Equality: `==`,** or **Inequality: `!=`** of any primitive data type (`int`, `char`, `float`, `bool`, etc.) These are binary operators (take **two** operands) and are specified using `infix` notation (which means that the operator goes in between the two operands).
- **Greater-than:** `**>**`, **Greater than or equal to:** `**>=**`, **Less-than: `<`** and **Less than or equal to: `<=`** are also binary operators using _infix_ notation. Use only with numeric data types; there are specific functions for comparing other data types.
- **Negation:** `**!**` is a unary operator, and prefixes the operand.

#### Examples

|   |   |
|---|---|
|**Statement**|**Result**|
|10 == 10|true|
|9 != 6|true|
|!true|false|
|10 > 12|false|

Now that you’re familiar with the **comparison** operators let’s look at the **conditional** statements.

As the name implies, **conditional statements** specify whether another statement or block of statements should be executed or not. These are often called **“selection constructs”**. The two general types are:

- **"if…then"**
- the **"switch…case"** construct

### if, if-else and Nested if…else

There are three forms of **if…else** statements in C++.

1. `**if**` statement
2. `**if...else**` statement
3. `**if...else if...else**` statement

**if statement**

The syntax of the `**if**` statement is:

if (condition) {  
   // body of if statement  
}

The `if` statement evaluates the **condition** inside the parentheses ( ).

- If the condition evaluates to `true`, the code inside the body of if is **executed**.
- If the condition evaluates to `false`, the code inside the body of if is **skipped**.

Example:
```cpp
int num1 = 0, num2 = 1;  
if(num1 == 0){  
    cout<<"num1 is equal to 0"<<endl;  
}  
if(num2 == 0){  
    cout<<"num2 is equal to 0"<<endl;  
}  
// Body of **first if** is executed.  
// prints num1 is equal to 0

**if…else statement**

The `**if**` statement can have an optional `**else**` clause. Its syntax is:

if (condition) {  
    // block of code if condition is true  
}  
else {  
    // block of code if condition is false  
}

If the **condition** evaluates `true`,

- the code **inside** the body of **if** is executed
- the code **inside** the body of **else** is skipped from execution

If the **condition** evaluates `false`,

- the code **inside** the body of **else** is executed
- the code **inside** the body of **if** is skipped from execution

Example:

int num = 1;  
if(num == 0){  
    cout<<"num is equal to 0"<<endl;  
}  
else{  
    cout<<"num is not equal to 0"<<endl;  
}  
// Body of else is executed.  
// prints num is not equal to 0

**if…else…else if statement**

The `if...else` statement is used to execute a block of code among two alternatives. However, if we need to make a choice between more than two alternatives, we use the `if...else if...else` statement.

The syntax of the `if...else if...else` statement is:

if (condition1) {  
    // code block 1  
}  
else if (condition2){  
    // code block 2  
}  
else {  
    // code block 3  
}

Here,

- If **condition1** evaluates to `true`, the code block 1 is executed.
- If **condition1** evaluates to `false`, then condition2 is evaluated.
- If **condition2** is `true`, the code block 2 is executed.
- If **condition2** is `false`, the code block 3 is executed

Example:

int num = 0;  
if(num > 0){  
    cout<<"num is greater than 0"<<endl;  
}  
else if(num < 0){  
    cout<<"num is lesser than 0"<<endl;  
}  
else{  
   cout<<"num is equal to 0"<<endl;  
}  
// Body of else is executed.  
// prints num is not equal to 0
```

### switch..case Statement

The `switch` statement allows us to execute a block of code among many alternatives.

The syntax of the `switch` statement in C++ is:

switch (expression) {  
    case constant1:  
        // code to be executed if   
        // expression is equal to constant1;  
        break;  
  
    case constant2:  
        // code to be executed if  
        // expression is equal to constant2;  
        break;  
        .  
        .  
        .  
    default:  
        // code to be executed if  
        // expression doesn't match any constant  
}

The **expression** is evaluated once and compared with the values of each `**case**` label.

- If there is a match, the corresponding code after the matching label is executed. For example, if the value of the variable is equal to **constant2**, the code after `case constant2:` is executed until the `**break**` statement is encountered.
- If there is no match, the code after `**default:**` is executed.

**Note:** We can do the same thing with the `**if...else..if**` ladder. However, the syntax of the `**switch**` statement is cleaner and much easier to read and write.

#### Flowchart of switch Statement

![](https://imgur.com/pJ9cVkj.jpeg)

#### Example:
```cpp
int x = 2;   
switch (x)   
{   
    case 1:   
        cout << "Choice is 1";   
        break;   
    case 2:   
        cout << "Choice is 2";   
        break;   
    case 3:   
        cout << "Choice is 3";   
        break;   
    default:   
        cout << "Choice other than 1, 2 and 3";   
        break;   
}
```
Notice that the `**break**` statement is used inside each `**case**` block. This terminates the `**switch**` statement.

If the `**break**` statement is not used, all cases after the correct `**case**` are executed.

# Conditional or Ternary Expression

There are expressions of a special kind, the conditional expressions, these are not statements, but they are one sort of contraction of the `**if-then**` construct.

This kind of expression can help to produce highly readable assignment statements fitting onto one line of the source code.

**Syntax:**

**( condition ) ? expressionIfTrue : expressionIfFalse;**

First the condition is evaluated and the side effects of this evaluation carry out their impact on the local environment.

- If the result is **true** then only the `**expressionIfTrue**` is evaluated (causing side effects) and this second result is the value of the whole conditional expression, and the `**expressionIfFalse**` is **not** evaluated (and hence cause no side effects).
- If the condition evaluates to **false**, then the situation is converse, the resulting values is given by the evaluation of the **false** branch of the conditional expression, and the **true** branch is **not** evaluated.

A common use of the conditional expression is to assign the value `x` or `y` to `a`, depending on an easily decidable condition, say `x>y`.

**Example:**
```cpp
int x = 7;  
int y = 5;  
int a = ( x > y ) ? x : y; // here we are using conditional expression to evaluate  
cout << a << endl;  
// The above conditional expression is equivalent to  
/*  
if (x > y){      // here we are usig if-else which will gave same output  
    a = x;  
    cout << a << endl;  
}  
else {  
    a = y;  
    cout << a << endl;  
}  
*/
```

# Loops


In computer programming, loops are used to repeat a block of code.

For example, let’s say we want to show a message 100 times. Then instead of writing the print statement 100 times, we can use a loop.

That was just a simple example; we can achieve much more efficiency and sophistication in our programs by making effective use of loops.

Here we will see 3 types of loops:

- **for** loop
- **while** loop
- **do...while** loop

#### for loop

The syntax of for-loop is:

```cpp
for (initialization; condition; update) {  
    // body of-loop   
}
```

Here,

- `**initialization**` - initializes variables and is executed only once
- `**condition**` - if `true`, the body of `for` loop is executed, if `false`, the for loop is terminated
- `**update**` - updates the value of initialized variables and again checks the condition

**Flowchart of for Loop**

![](https://imgur.com/U1y5LET.jpeg)

**Example:**

```cpp
for(int i = 1; i <= 5; i++){  
   cout<<i<<" ";  
}  
// Prints 1 2 3 4 5 
```

#### While loop

The syntax of `while` loop is:

```cpp
while (condition) {  
    statememt(s);  
}
```

Here, statement(s) may be a single statement or a block of statements. The condition may be any expression, and true is any non-zero value. The loop iterates while the condition is true.

When the condition becomes false, program control passes to the line immediately following the loop.

**Flowchart of while Loop**

**![](https://imgur.com/JtbsFqq.jpeg)**

**Example:**

```cpp
int i = 1;  
  
while(i <= 5){  
    cout<<i<<" ";  
    i++;  
}  
// Prints 1 2 3 4 5 
```

#### do…while loop

The `**do…while**` loop is nearly identical to the `while` loop, but instead of checking the conditional statement before the loop starts, the do…while loop checks the conditional statement after the **first run**, then continuing onto another iteration.

The syntax of `do...while` loop is:

do {  
  //body  
} while (condition);

**Flowchart of do…while loop**

**![](https://imgur.com/hdDC1y7.jpeg)**

**Example:  
**

```cpp
int i = 1;  
do {  
    cout << i << " ";  
    i++;  
} while(i <= 5);   // the contition is being checked after the first run
```

### When is do-while used?

A do-while loop is used where your loop should execute at least one time.

For example, let’s consider a scenario where we want to take an integer input from the user until the user has entered a positive number.  
In this case, we will use a do-while as we have to run loop at-least once because we want input from user at-least once. This loop will continue running until the user enters a positive number.

Jump statements are used to interrupt the normal flow of program.

**Types of Jump Statements**

- break
- continue
- goto
#### Break Statement

The `break` statement is used inside loop or switch statement. When compiler finds the `break` statement inside a loop, compiler will **abort** the loop and continue to execute statements followed by loop.

**Example:**

```cpp
int a = 1;  

while(a <= 10)  
{  
    if(a==5)  
        break;  
    a++;  
}  
cout << "Value of a is " <<a<<endl;  
// Value of a is 5
```

#### Continue Statement

The `continue` statement is also used inside loop. When compiler finds the `continue` statement inside a loop, compiler will skip all the followling statements in the loop and resume the loop.

**Example:**

```cpp
int a = 0;  
while(a < 10)  
{  
    a++;  
    if(a == 5)  
        continue;  

    cout << a << " ";  
}  
// prints 1 2 3 4 6 7 8 9 10 
```

#### Goto Statement

The `goto` statement is a jump statement which jumps from one point to another point within a function.

The syntax of the **`goto`** statement in C++ is:

goto label;  
... .. ...  
... .. ...  
... .. ...  
label:   
statement;  
... .. ...

In the syntax above, **`label`** is an identifier. When `goto label;` is encountered, the control of program jumps to `label:` and executes the code below it.

![](https://imgur.com/FuViVm6.jpeg)

**Example:**

```cpp
num = 10      
if (num % 2 == 0)   
    // jump to even   
    goto even;    
else  
    // jump to odd   
    goto odd;    

even:   
    cout << num << " is even";   
    // return if even   
    return;    
odd:   
    cout << num << " is odd"; 
```

You can write any C++ program without the use of `**goto**` statement and is generally considered a good idea not to use them.

**Reason to Avoid goto Statement**

The goto statement gives power to jump to any part of program but, makes the logic of the program complex and tangled.

In modern programming, goto statement is considered a harmful construct and a bad programming practice.

The goto statement can be replaced in most of C++ program with the use of `break` and `continue` statements.
# Function
A `**function**` is a segment of code that is isolated from the main code segment. A function is called from a _section_ of code. When the function’s code has been executed, it returns to the calling code.

The general form of a function is:

return_type function_name ([arg1_type arg1_name, ...]) { code }

**Example:  
**

```cpp
int addTwoInts(int arg1, int arg2) //function takes two integers arg1,arg2  
{  
   int sum = arg1 + arg2;    // adding both integers together to compute sum  
   return sum;    // retuns the sum of type int which is same as function type  
}  
  
int main() {  
  int answer = addTwoInts(2,4);   //calling our addTwoInts function in main()  
  cout << "Answer is: " << answer << endl;  
  return 0;  
}
```

#### Declaration of Function

Before we discuss calling functions, we must talk about **_declarations_**. Programs written in C++ are executed in logical order from the top down. A statement can only use symbols, or named constructs like functions, that are declared in code that has already been executed.  
Simply put; the compiler must be aware of the name used to describe a function before that function can be called in the code.

For example, to allow `**main**` to call functions that are defined after the `**main**` function itself in the code, we use **forward declarations**. A forward declaration tells the compiler that a function exists and what its arguments look like, but the definition of the function will be elsewhere.

The declaration begins much the same as the definition.

**Example:**

// Definition  
int fctn2(int num1, int num2)  
{ ... }  
  
// Declaration  
int fctn2(int, int);

**Note:** that the argument names are **optional** since the declaration does not need to use the arguments in any way. However, keeping the arguments needed in the declaration may be useful for documentation purposes.

#### Calling

Calling refers to how a function is used from code.

Let’s take a look at how functions that have already been made are called in the `main` function.
```cpp
void fctn1();    // declaring a void function  
int fctn2(int, int);   //declaring int type function taking two int arguments  
  
int main()  
{  
    int sum;  
  
    fctn1();        //calling the void function   
    sum = fctn2(2,3);    // calling the function fctn and saving the value returned in variable 'sum'  
    cout << "The value of sum is: " << sum << endl;  
    return 0;  
}  
  
void fctn1()      // writing the function definition here   
{  
    cout << "This is function 1!" << endl;  // function only couts a string  
}  
  
int fctn2(int num1, int num2)    // writing the function definition   
{  
    //the value 2 has been passed as num1  
    //the value 3 has been passed as num2  
  
    return num1 + num2;      // returning the sum of num1 and num2  
}
```

#### Parameters

**Parameters** are how data is passed between functions through the call of the function.

We learned earlier that we list the data we want to pass to a function in the call between the `( )`. The order of the list is determined by the function definition. The first parameter in the list will be assigned to the variable listed first in the function definition.

**Example:**

int fctn(int arg1, int arg2);  
  
```cpp
int main()  
{  
   int answer;  
   int num1 = 10;  
   answer = fctn(num1, 12);    // num1 and 12 are arguments passed to fctn  
   cout << "Answer is: " << answer << endl;  
}  
  
int fctn(int arg1, int arg2)    // function definition  
{  
  cout << "num1 is assigned to arg1, value of arg1 is: "<<arg1<<endl;  
  cout << "12 is assigned to arg2, value of arg2 is: "<<arg2<<endl;  
  return arg1*arg2;      // mutliplying arg1 and arg2 and returning the answer  
}
```
As you can see above, the contents of the variable `num1` are passed to `arg1` and the integer value `12` is passed to `arg2`. The function `fctn` then returns the product after performing multiplication operation on `arg1` and `arg2`.


#### Passing Methods

Values can be passed to a function through two methods.

By default, values are passed to a function through a method called:

- **pass by value**

This means that:

- value of the variable is passed, not the variable itself.

This would be like giving a person a copy of your driver’s license. They can read all of your information, ​and they can change whatever they want on their copy, but the original is not altered in any way.

If desired, a value can be passed through the other method called:

- **pass by reference**

This means that:

- Function is actually given the `address` of the variable, allowing it direct access to the information.
- Placing a `**&**` after the data type in the function definition allows direct access (this must also be present in any forward declaration).

Let’s look at an example to better understand the concept of **passing values by reference**.

```cpp
void fctn(int& arg1, int arg2){ //passing argument 1 by reference using &  
    arg1 = arg2;    //we equate arg1 to arg2  
    //there is no return as void function  
}  
  
int main() {  
    int num1 = 4; //intializing and decalring num1  
    cout << "num1 before passing to fctn is: "<<num1<<endl;   
    fctn(num1,23); //passing num1 and 23 as arguments to fctn function  
    cout << "Value of num1 (arg1 in function) is: "<<num1<<endl;  
    return 0;  
}
```
In the code above, we pass the argument `**arg1**` by reference. This means that whatever changes we make to the `**arg1**` value in `**fctn**` function will automatically be made to the argument `**num1**` passed in `**main**` function.

#### Default Parameters

It’s possible to assign default values to parameters that are omitted from the function call. The default values are usually defined in the function declaration​ like this example:

int addTwoInts(int arg1 = 4, int arg2 = 5);  
//In this case, if the parameters aren’t provided, they will be assigned 4 and 5 respectively.

#### Scope

**`Scope`** refers to the level of access an object has.

A function can access only [global variables](https://www.learncpp.com/cpp-tutorial/introduction-to-global-variables/) and those that are passed to it through arguments.

**Note:** Any variables declared inside a function are only available to that function.
# Templates

**Templates** are the mechanism by which C++ implements the generic concept.

The following example illustrates **two** non-generic (type-sensitive) functions for adding two numbers, x and y:
```cpp
#include <iostream>  
using namespace std;  
  
int add ( int x, int y ) //add two ints  
{  
    return (x + y);  
}  
  
double add ( double x, double y )  //add two doubles  
{  
    return (x + y);  
}  
  
int main(){  
  int temp1;  
  double temp2;  
  temp1 = add(4,5);  
  temp2 = add(4.5,5.5);  
  cout << "Value of temp1 is: "<< temp1<<endl;  
  cout << "Value of temp2 is: "<<temp2<<endl;  
}
```
Two functions that do exactly the same thing, but cannot be defined as a single function because they use different data types.

**Function Templates**

`Templates` were made to fulfill the need to design a **generic** code, that works the same way in different situations.

Syntax

To start a _template_, you must provide the following declaration:

```cpp
template<class Type>  
// or  
template<typename Type>
```

The keywords `**class**` and `**typename**` have exactly the same meaning in this case, but some compilers may replace the words with each other.

```
Type
```

The following example now illustrates how the **add** function would be written using a template​:
```cpp
#include <iostream>  
using namespace std;  
  
template<class Type>  
Type add ( Type x, Type y )  
{  
    return (x * y);  
}  
  
int main() {  
    int result = add<int> ( 2, 5 ); //calling template type function  
    cout << "Result when integer values are passed is: " << result <<endl;  
    double result2 = add<double>(2.5,5.5);  
    cout << "Result when double values are passed is: "<<result2;  
    return 0;  
}
```
**Class Templates**

As another powerful feature of C++, you can also make **template** classes, which are classes that can have members of the **generic** type.
```cpp
template<class T>  
class Score  
{  
private:  
        T scorenumber;  
public:  
       Score(T args){scorenumber = args;}  
};

This class we defined keeps score in the variable **`scorenumber`** which could be **int**, **float** or **double**.

This is how it’s object will b​e declared:

Score<int> myscore(40);  
// or  
Score<double> myscore(23.9);

Find the **maximum** value by comparing two values.

#include <iostream>  
using namespace std;  
  
template <class T>  
class myvalues {  
    T myval1, myval2; //two values of type T  
  public:  
    myvalues (T arg1, T arg2){myval1=arg1; myval2=arg2;} //constructor  
    T max (); //max function  
};  
  
template <class T>  
T myvalues<T>::max()  //definition of a function with type T  
{  
  if(myval1 > myval2){  
    return myval1;  
  }else{  
    return myval2;  
  }  
}  
  
int main () {  
  myvalues <int> obj(20, 50); //try changing the value and value types to results for different types   
  cout << "Max value is: " << obj.max();  
  return 0;  
}
```
As you can see in the example above this time we declared a function of **type T** in our class.

The definition of the function was outside the class so we had to add the prefix for template class beforehand.

C++ provides a nice alternative data type to manipulate strings, and the data type is conveniently called **string**. Some of its widely used features are the following:

- Declaration:
 ```cpp
   
    string a = "abc";
    
- Size:
    
    int len = a.size();
    
- Concatenate two strings:
    
    string a = "abc";  
    string b = "def";  
    string c = a + b; // c = "abcdef".
    
- Accessing ith element:  
    
    string s = "abc";  
    char c0 = s[0]; // c0 = 'a'  
    char c1 = s[1]; // c1 = 'b'  
    char c2 = s[2]; // c2 = 'c'  
      
    s[0] = 'z'; // s = "zbc"
```

**Stringstream** is a stream class to operate on strings. It implements input/output operations on memory (string) based streams.

**stringstream** can be helpful in different type of parsing. The following operators/functions are commonly used here

- Operator `>>` Extracts formatted data.
- Operator `<<` Inserts formatted data.
- Method str() Gets the contents of underlying string device object.
- Method str(string) Sets the contents of underlying string device object.

Its header file is `**sstream**`.

One common use of this class is to parse comma-separated integers from a string (e.g., “23,4,56”).

stringstream ss("33,7,65");  
```CPP
char ch;  
int a, b, c;  
ss >> a >> ch >> b >> ch >> c; // a = 33, b = 7, c = 65  
```
Here `ch` is a storage area for the discarded commas.

If the `**>>**` operator returns a value, that is a true value for a conditional. Failure to return a value is false.

# Pointer
A pointer is a special kind of variable that stores the **address** in memory of another variable and can be used to manipulate that variable.

In general, whenever a variable is used in C++, it must exist somewhere in the host computer’s memory and pointers can store the location of a particular variable.

**Pointers** associate **two** pieces of information:

- The **memory address**, which is the "value" of the pointer itself.
- The **data type** of the variable pointed to, which is the kind of variable located at that address.

#### Declaring pointers

**Declaring** a pointer is similar to declaring a regular variable, although the name is preceded by an **asterisk**:

int *ptr;  
void *vp;

In the example above

- `ptr` is a pointer to an **integer**.
- `vp` is a `void` pointer, which does not require a specific data type.

#### Assigning Addresses to Pointers

int* ptr, var;  
var = 5;  
// assign address of var to ptr pointer  
ptr = &var;

Here, `**5**` is assigned to the variable `**var**`. And, the address of `**var**` is assigned to the `**ptr**` pointer with the code `**ptr = &var**`.

#### Dereferencing Pointers

Pointers can be **dereferenced** to access the value of the variable at the pointer’s address​.

void f(int* p)  
{  
    // The code "*p" takes the value of the data at location stored in p  
    int n = *p;  
}

**Note:** Unlike references, pointers are not guaranteed to be initialized. As such, they should only be used when they are known to point to an existing object.

#### Malloc() and Free()

The `**malloc()**` function in C++ allocates a block of uninitialized memory and returns a **void** pointer to the first byte of the allocated memory block if the allocation succeeds.

If the size is zero, the value returned depends on the implementation of the library. It may or may not be a **null** pointer.

void* malloc(size_t size);

The **free()** function in C++ deallocates a block of memory previously allocated, making it available for further allocations.

The free() function does not change the value of the pointer, that is it still points to the same memory location.

void free(void *ptr);

**Example**


```cpp
int main()  
{  
    int *ptr;  
    ptr = (int*) malloc(5*sizeof(int));  
  
    if(!ptr){  
        cout << "Memory Allocation Failed";  
        return 0;  
    }  
    // Initialize values  
    for (int i=0; i<5; i++){  
        ptr[i] = i+i;  
    }  
  
    // Initialized values"  
    for (int i=0; i<5; i++){  
        /* ptr[i] and *(ptr+i) can be used interchangeably */  
        cout << *(ptr+i) << " ";  
    }  
    cout<<endl;  
    // output: 0 2 4 6 8  
  
    free(ptr);  
    // If we again prints the value it will print some garbage value  
       
    for (int i=0; i<5; i++){  
        cout << *(ptr+i) << " ";  
    }  
    // This will not give any error but prints some garbage value  
    return 0;  
}
```

#### Common mistakes when working with pointers

Suppose, we want a pointer `**varPoint**` to point to the address of `**var**`. Then,

int var, *varPoint;  
  
```cpp
// Wrong!   
// varPoint is an address but var is not  
varPoint = var;  
  
// Wrong!  
// &var is an address  
// *varPoint is the value stored in &var  
*varPoint = &var;  
  
// Correct!   
// varPoint is an address and so is &var  
varPoint = &var;  
  
// Correct!  
// both *varPoint and var are values  
*varPoint = var;
```

# Array
An `**array**` is a collection of similar data types under the same **name**.

In C++, arrays are declared in the following way​:

```cpp
//dataType arrayName[arraySize];  
```
int arr[5]; //int is the datatype, arr is the name, 5 is the size of array

The above statement declares a `static` array of 5 elements, which can be accessed individually.

**Note:** Although arr behaves like a pointer, its value **cannot** be changed as it references a specific region in memory.

#### Initializing​ Arrays
```cpp
int main() {  
    int arr[5] = {19, 10, 5, 6, 14}; //initializing the array with 5 values  
    cout << "The value of arr[0], that is, the first value in the array is: " << arr[0] << endl;  
    cout<< "The value of arr[1], that is, the second value in the array is: " << arr[1] << endl;  
    cout<< "The value of arr[2], that is, the third value in the array is: " << arr[2] << endl;  
    cout<< "The value of arr[3], that is, the fourth value in the array is: " << arr[3] << endl;  
    cout<< "The value of arr[4], that is, the fifth value in the array is: " << arr[4] << endl;  
    int arr2[] = {1,2,3,4}; //we don't specify the size and the compiler assumes a size of 4  
    
    //we calculate size of the arr2 using the inbuilt **sizeof** function   
    //divide the total size of the array by the size of the array element to claculate the size  
    cout << "The size of arr2 is: "<<sizeof(arr2)/sizeof(arr2[0])<<endl;                               
}
```

In the above example, we have an array `arr` of size 5. We use **indexing** to refer to the location of the values in an array. For example:

- The value **19** is present at the index **0** of the array. This is written as `arr[0]` = **19**. Here, by using `arr[0]` we are referring to the location of **19**.
- Similarly, the index of the value **10** in the array will be **1**. It’ll be written `arr[1]` = **10**.
- The index of the value **5** is **2** in the array. So `arr[2]` = 5.

**Note:** Arrays have 0 as the first index not 1.

#### Accessing Array Values

We use **indexing** to access arrays values just like we did in the example above.

Suppose you declared an array of 15 elements.

You can use the array members from `**arr[0]**` to **`arr[14]`**.

**Note:** If you try to access array elements outside of its bound, let’s say `arr[20]`, the compiler may not show any error. However, this may cause unexpected output (undefined behavior).

```cpp
int arr[15] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};  
cout << "The value of arr[20] is: "<< arr[20] <<endl;  
```
// We will get a garbage value at arr[20] which is an index that is **out of bounds**.

#### Iterate over array

We can also iterate over the whole array and access any value easily using any loop.  
Below is an example that use `**for**` loop to iterate over the array.

```cpp
int main() {  
    int arr[5] = {}; // no values stored in array by default  
    int num = 1;  
    for (int i=0; i<5; i++){  
        arr[i] = num; //setting index i of array arr equal to num  
        num++;        //incrementing num  
        cout << "The value of arr["<<i<<"] is equal to: "<< arr[i]<<endl;  
    }  
    return 0;  
}
```

## Reverse Array
Complete the given function named ‘**reverseArray**’ containing an integer array ‘**arr**’ and length of arr **N**. Reverse the array ‘**arr**’.

```cpp
void reverseInteger(int arr[], int N){
	int start = 0;
	int end = N-1;
			//N= 5
	while(start<end){
		int temp = arr[start];
		arr[start] = arr[end];
		//arr[0] = arr[4];
		arr[end] = temp;
		//arr[4] = arr[0]
		start++;
		end--;
		}
}
```


#### Allocating variables

In C++, a new object, variable or array can be created using the **`new`** operator, and free with the `**delete**` operator.

```cpp
int *ptr = new int;  
  /* ... */  
delete ptr;
```
The `**new**` operator allocates an object from the `heap` and optionally initializes it. When you have finished using it, you must `**delete**` it. Otherwise, the pointed memory is inaccessible, and the result is [`memory leak`](https://ptolemy.berkeley.edu/ptolemyclassic/almagest/docs/prog/html/ptlang.doc7.html#:~:text=Memory%20leaks%20occur%20when%20new,deallocated%20by%20the%20free%20function.&text=The%20problem%20with%20memory%20leaks,or%20even%20crash%20a%20program.).

#### Referencing variables

The **`&`** operator is used to reference an object. When using this operator on an object, you are provided with a pointer to that object. This new pointer can be used as a parameter or be assigned to a variable.

```cpp
int num;    
int *ptr;    //declaring int type pointer  
ptr = #    //setting pointer equal to the address of num  
cout << "Address stored in ptr is: "<< ptr<<endl;  
*ptr = 7;    //setting value of *ptr to 7  
cout << "value of num is: "<< num <<endl;  
// value of num is: 7
```

#### Pointers to Arrays

C++ allows us to create arrays and then use **pointers** to carry out operations on those arrays.

**Example:**
```cpp
int main() {  
    //first we declare an array  
    int arr[4];  
    //next we declare a pointer   
    int *ptr;  
    //now we make the pointer ptr point to the first element of the array arr  
    ptr = arr;  
    //next we set the value of the first element of arr, that is, arr[0] equal to 3  
    *ptr = 3;  
    //now we increment the pointer ptr to point to second element of the array arr  
    ptr++;  
    //next we update the value of the second element of arr, that is, arr[1] being pointed at by ptr  
    *ptr = 5;  
    //to directly store a value at some index in arr, e.g at the 3rd index of array we first get the address   
    ptr = &arr[3];  
    //now storing a value at arr[3] location  
    *ptr = 10;  
    //moving pointer back to arr[0]  
    ptr = arr;  
    //storing value at arr[2] now  
    *(ptr+2) = 8;  
    //now lets display all the values we stored in our array  
    for (int i=0; i<4; i++){  
        cout<< "value at arr["<<i<<"] is: "<<arr[i]<<endl;  
    }  
    return 0;  
}
```

#### Multi-dimensional arrays

A multidimensional array allows nesting arrays:

```cpp
int grid[3][3];
```
//This allocates 3*3 elements in one memory block.

**Note:** Even though arrays behave similarly to pointers, a multidimensional array is **not** a **pointer-to-a-pointer**.

Here is a visual representation of the multi-dimensional array `grid[3][3]`:

![](https://imgur.com/QMg5Cmv.jpeg)

- The objects `grid`, `grid[0]` and `grid[0][0]` are always at the **same** location (but different types).
- The objects of variable `pptr` and pointer `*pptr`, `**pptr` are at different locations.

When evaluating `grid[0][0]`

- The array grid (which is an `int[3][3]`) is first converted to a pointer of type `int( * )[3]`.
- Then taking the element at **offset 0** yields an object of `int[3]`.
- Then it is converted to `int*` again and the element at **offset 0** is taken, generating an object of type `int&`.

#### Pointer to a pointer

A pointer contains a reference to another variable. It may also point to a pointer:

int **pptr;

![](https://imgur.com/Q63u3Q8.jpeg)

For `**pptr[0][0]**`, the address stored in `pptr` is taken and the address stored in that address is taken, ​and it is the result of the expression.

**Example:**
```cpp
int main() {  
    int x=1;  
    int *ptr1;  
    int **ptr2;   
    
    ptr1 = &x;    //getting address of x  
    ptr2 = &ptr1;  //getting address of ptr1  
    
    cout << "Value of x is: "<<x<<endl;  
    
    //let's print the value being pointed to by ptr1  
    cout << "The value being pointed to by ptr1 is: "<<*ptr1<<endl;  
    
    //let's print the address being pointed to by ptr2  
    cout << "The address being pointed to by ptr2 is: "<<*ptr2<<endl;  
    
    //let's print the value being pointed by ptr2  
    cout << "The value being pointed to by ptr2 is: "<<**ptr2<<endl;  
    
    return 0;  
}
```
- In the example above `*ptr2` will give the value of the address at which our number is stored, this will also be the address of `ptr1`.
- `**ptr2` then further dereferences and gives the value stored at that address which is 1.

You are given an integer N, create a 2D array named ‘**grid**’ of size **N x N.** 

- The diagonal of the grid should be filled with 0.
- The lower side should be filled with -1s.
- The upper side should be filled with 1s.

```cpp
int main() {
    int N;
    cin >> N;

    int arr[N][N];  // Declare a 2D array of size N x N

    // Initialize the 2D array to 1
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (i==j){
                arr[i][j] = 0;
            }
            else if(i>j){
                arr[i][j] = -1;
        
            }
            else if(j>i){
                arr[i][j] = 1;
            }
            
            
        }
    }

    // Print the 2D array
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            cout << arr[i][j] << " ";  // Print each element in the row
        }
        cout << endl;  // Move to the next line after each row
    }

    return 0;
}
/*
0   1  1  1 1 
-1  0  1  1 1 
-1 -1  0  1 1 
-1 -1 -1  0 1 
-1 -1 -1 -1 0 
*/

```

# Structure
**Structure** is a collection of variables of different data types under a single name. It is similar to a class in that, both holds a collection of data of different data types.

**For example:** You want to store some information about a person: his/her name, citizenship number and salary. You can easily create different variables `name, citNo, salary` to store these information separately.

However, in the future, you would want to store information about multiple persons. Now, you’d need to create different variables for each information per person: `name1, citNo1, salary1, name2, citNo2, salary2`

You can easily visualize how big and messy the code would look. Also, since no relation between the variables (information) would exist, it’s going to be a daunting task.

A better approach will be to have a collection of all related information under a single name `Person`, and use it for every person. Now, the code looks much cleaner, readable and efficient as well.

This collection of all related information under a single name `Person` is a structure.

#### Declaration

The `**struct**` keyword defines a structure type followed by an identifier (name of the structure).

Then inside the curly braces, you can declare one or more members (declare variables inside curly braces) of that structure.

**For example:  
**

```c++
struct Person  
{  
    char name[50];  
    int age;  
    float salary;  
};
```

Here a structure **person** is defined which has three members: `name, age` and `salary`.  
When a structure is created, **no memory** is allocated.  
The structure definition is only the blueprint for the creating of variables. You can imagine it as a datatype.

**Note:** Remember to end the declaration with a semicolon `**(;)**`

**Definition**

Once you declare a structure **person** as above. You can define a structure variable as:

Person x;

Here, a structure variable `**bill**` is defined which is of type structure `**Person**`.

When structure variable is defined, only then the required memory is allocated by the compiler.

#### Access Members

The members of structure variable is accessed using a dot `**(.)**` operator.

Suppose, you want to access `**age**` of structure variable `**x**` and assign it 30 to it. You can perform this task by using following code below:

x.age = 30;


# Class
**Classes** are the building blocks of programs built using the **object-oriented** methodology. Such programs consist of independent, self-managing modules and their interactions. An object is an instance of such module, and a class is its definition.

```c++
class className   
{  
  variable var1;         // variables names can be of type string, int, float  
  variable var2;           
};                       // class body always terminates with ';' 
```

A Keyword `class` is used with every declaration of class followed by the name of the class. You can use any **className** as you want.

**Example**
```cpp
class Person  
{  
public:  
    char name[25];  
    string gender;  
    int age;  
    int weight;  
    bool healthy;  
};  
```
  
```cpp
int main(){  
  Person personObj;     // creating an object of Person class called personObj  
  //using the dot operator to access members of a class  
  personObj.gender;  //using object personObj to access certain accessible variables of the class  
}
```

**Explanation**

A person has several member variables listed such a:

- name,
- the gender of the person,
- the age of the person,
- its weight,
- whether it is healthy or not.

These variables are called `properties` declared inside the class.

An instance of a _person_, say, a person named **Robin**, would be an object. So would a person named **Rahul**. Hence, you can have multiple instances of a class, just like there can be multiple person.

Properties are like “**inner variables**” of each object made of type Person. We used the dot operator to access members of a class object.

**Private Members**

As you can see above, we have used the word `public` before declaring the class members. The reason being:

C++ restricts the program from directly referencing the member variables.

By default, all _members_ declared inside a class are considered `private`. Which means:

- they can only be referenced within the definitions of member functions
- If a program tried to access `private` variables directly it will get a **compiler error**.

**Note:** Private members can be variables or functions.

**Public Members**

The keyword `public` identifies members of a class that can be accessed from outside of the class.

Members that follow the keyword `public` are **public members** of the class.

#### Definig Member Functions

Member functions are declared in the class declaration. Member function definitions identify the class in which the function is a member.

```cpp
class DayOfYear {  
public:  
    void output(); //member function  
    int month;  
    int day;  
};  
void DayOfYear::output(){   //indicates function output is member of DayOfYear class  
  cout << "Month =  " << month <<endl;  
  cout << "Day =  " << day <<endl;  
}
```
  


#### Setters and Getters

As we discussed above, `private` member variables cannot be accessed directly in any other function.

In order to access or change their values, we need to define `public` member functions. These functions can be used to _set_ the values of the `private` variables as well as to _get_ their values since being `private` these members cannot be accessed directly.
```cpp
//Class with Private Members   
//Program to demonstrate the class DayOfYear.  
#include <iostream>  
using namespace std;  
  
class DayOfYear  
{  
public:  
      int myVar;  
    void output( );  
  
    void set(int new_month, int new_day);  
    //Precondition: new_month and new_day form a possible date.  
    //Postcondition: The date is reset according to the arguments.  
  
    int get_month( );  
    //Returns the month, 1 for January, 2 for February, etc.  
  
    int get_day( );  
    //Returns the day of the mont  
private:  //private variables not accessible directly in main  
    void check_date( );  //checks the date  
    int month;      
    int day;  
};  
  
int main( )  
{  
    DayOfYear today, birthday; //making two objects of DayOfYear class  
    //setting today object's month and day  
    today.set(11,23);   
    cout << "Today's date is ";  
    today.output( );    //calling output to display today object's month and day  
      
    //setting birthday object's month and day  
    birthday.set(3, 21);  //try setting these values same as one passed for today.   
                            //also try passing invalid values here and then run code  
    cout << "Birthday date is ";  
    birthday.output( );  //calling output to display birthday object's month and day  
  
    if (today.get_month() == birthday.get_month() //if condition to check if today object's month/day   
       && today.get_day() == birthday.get_day() ) //equals birthday object's month/day  
        cout << "Happy Birthday!\n";    //if matched it's your birthday  
    else  
        cout << "It's not your birthday\n";  //if dates don't match it's not your birthday  
    return 0;  
}  
  
```

```cpp
//function definitions  
  
void DayOfYear::output()  
 {  
  //displays the set month and day  
    
    cout << "month = " << month  
         << ", day = " << day << endl;  
    
}  
  
void DayOfYear::set(int new_month, int new_day) //setting  
{  
    month = new_month; //sets private variable month equal to argument new_month  
    day = new_day;  //sets private variable day equal to argument new_day  
    check_date(); //calling check_date to see if the month and date entered are valid  
}  
  
void DayOfYear::check_date( )  
{  
  //checking to see if month and date values are valid  
    if ((month < 1) || (month > 12) || (day < 1) || (day > 31))   
    {  
        cout << "Illegal date. Aborting program.\n";  
        exit(1);  //program exits if values are invalid  
    }  
}  
  
int DayOfYear::get_month( )  
{  
    return month;    //retuns the private variable month  
}  
  
int DayOfYear::get_day( )  
{  
    return day;    //returns the private variable day  
}
```
**Explanation**

- First we make a class named `DayOfYear` and declare the `public` and `private` variables.
- `Public` variables include:
    - Variable myVar
    - The functions `output`, `set`, `get_month`, `get_day`
- `Private` variables include:
    - Variables `month`, `day`
    - Fucntions `check_date`

Let’s take a look at all the functions one by one.

**check_date()**

- It checks whether the values of **month** and **day** are valid, if they are not, it gives an **error** and aborts the program.

**set(int new_month, int new_day)**

- In the example before when member variables were `public`, we set the `date` and `month` of an object by directly accessing these member variables in our `main` function using the dot operator.
- However, we can’t set `private` variables directly in the `main` hence we use the `public` function `set` which can access these `private` variables. It takes the input arguments `new_month` and `new_day` and sets the values of `month` and `day` equal to them.
- It then calls the `check_date()` function to see if both values are valid.

**get_month()**

- Returns the value of month as it is a private can’t be accessed directly in the main function.

**get_day()**

- Returns the value of day as it is a private can’t be accessed directly in the main function.

**output()**

- Displays the month and day.

**main()**

- Declares **two** objects `today` and `birthday` for class `DayofYear`.
- Calls `set` function to update the values of `day` and `month` for both the objects.
- Calls the `output` function to display `today` date and `birthday` date.
- Lastly, it checks whether `today` date matches `birthday` date, if it does, it means it’s their birthday.
# Inheritance
Provides a way to create a **new** class from an **existing** class.  
**New** class is a specialized version of the **existing** class.

- **Base Class**(or Parent): `inherited` by **child** class.
- **Derived Class**(or child): `inherits` from **base** class.

```cpp
class Student{ //base class  
 //body  
};   
  
class UnderGrad : public Student{  //derived class  
  //body  
};
```
Inheritance establishes an “**is a**” relationship between classes.

An object of the derived class “**is a**” object of the base class. For example:

- An UnderGrad is Student.

A derived object has **all​ characteristics of the base class**.

An object of **child** class has:

- All members defined in the **child** class.
- All ​members declared in the **parent** class.

An object of child class can use:

- All `public` members defined in the **child** class.
- All `public` members defined in the **parent** class.

**Protected Members**

- `protected` member access specification: similar to `private`, but accessible by objects of _derived_ class.

**Class Access Specifiers**

- `public`: the object of the derived class can be treated as an object of the base class.
- `protected`: more restrictive than public, but allows derived classes to know details of parents.
- `private`: prevents objects of the derived class to be treated as objects of base class.
```cpp
#include <iostream>  
using namespace std;  
  
// Base class  
class Shape {  
   public:  
      Shape(){length = 0; width = 0;} //default constructor  
      void setlength(int l, int w) {length = l; width = w;}  
  protected:  
      int length, width;  
};  
  
// Derived class  
class Square: public Shape {  
   public:  
      Square() : Shape() {} //declaring and initializing derived class constructor   
      int get_Area(){ return (length * width); }  
};  
  
int main(void) {  
   Square sq; //making object of child class Square  
   sq.setlength(5, 5); //setting length equal to 5  
   // Print the area of the object.  
   cout << "Total area of square is: " << sq.get_Area() << endl;  
  
   return 0;  
}
```

As you can see in the example above,

- The **shape** class is the parent class whereas the **Square** class is the child class derived from it.
- In our child class **Square**, we use members from the parent class such as
    - the **protected length and width** variable which gets initialized to **zero** in the default constructor.
    - **Length and width** also gets used in child class function **get_Area** to compute the area of the square.
- In **main** the **setlength** function which is a **public** member function of the parent class is accessible to the child class object **sq**
    - The **dot** operator is used to access **setlength** in the **main**.

# Polymorphism

The term `Polymorphism` means the ability to take many forms. It occurs if there is a hierarchy of classes which are all related to each other by inheritance.  
C++ polymorphism means that a call to a member function will cause a different function to be executed depending on the type of object that invokes the function.

The **`+`** operator in C++ is used to perform two specific functions. When it is used with numbers (integers and floating-point numbers), it performs addition.

int a = 5;  
int b = 6;  
int sum = a + b; // sum = 11

And when we use the `**+**` operator with strings, it performs string concatenation.

string firstName = "Samad ";  
string lastName = "Sharma";  
// name = "Samad Sharma"  
string name = firstName + lastName;

In **C++ polymorphism** is mainly divided into two types:

- Compile time Polymorphism
- Runtime Polymorphism

![](https://imgur.com/jc5YKD6.jpeg)

**Function Overloading**

In C++, we can use two functions having the **same name** if they have different parameters (either types or number of arguments).

And, depending upon the number/type of arguments, different functions are called.

// C++ program to overload sum() function  
  ```cpp
#include <iostream>  
using namespace std;  
  
// Function with 2 int parameters  
int sum(int num1, int num2) {  
 return num1 + num2;  
}  
  
// Function with 2 double parameters  
double sum(double num1, double num2) {  
 return num1 + num2;  
}  
  
// Function with 3 int parameters  
int sum(int num1, int num2, int num3) {  
 return num1 + num2 + num3;  
}  
  
int main() {  
 // Call function with 2 int parameters  
 cout << "Sum 1 = " << sum(5, 6) << endl;  
  
// Call function with 2 double parameters  
 cout << "Sum 2 = " << sum(5.5, 6.6) << endl;  
  
// Call function with 3 int parameters  
 cout << "Sum 3 = " << sum(5, 6, 7) << endl;  
  
return 0;  
}
```

It’s a **compile-time polymorphism** because the compiler knows which function to execute **before** the program is compiled.

**Operator Overloading**

In C++, we can overload an operator as long as we are operating on user-defined types like objects or structures.  
We cannot use operator overloading for basic types such as **int**, **double**, etc.

Operator overloading is basically function overloading, where different operator functions have the same symbol but different operands.  
And, depending on the operands, different operator functions are executed.

**Syntax**

To overload an operator, we use a special `**operator**` function.

```cpp
class className {  
    ... .. ...  
    public  
        returnType operator symbol (arguments) {  
            ... .. ...  
        }   
    ... .. ...  
};
```
- `**returnType**` is the return type of the function.
- operator is a keyword.
- `**symbol**` is the operator we want to overload. Like: `**+**`, `**<**`, `**-**`, `**++**`, etc.
- `**arguments**` is the arguments passed to the function.

Since operator overloading allows us to change how operators work, we can redefine how the **`+`** operator works and use it to add the complex numbers of c1 and c2 by writing the following code:
```cpp
#include<iostream>   
using namespace std;   
    
class Complex {  
private:   
    int real, imag;   
public:  
    Complex(int r = 0, int i =0)  {real = r;   imag = i;}   
        
    // This is automatically called when '+' is used with   
    // between two Complex objects   
    Complex operator + (Complex const &obj) {   
         Complex res;   
         res.real = real + obj.real;   
         res.imag = imag + obj.imag;   
         return res;   
    }   
    void print() { cout << real << " + i" << imag << endl; }   
};   
    
int main()   
{   
    Complex c1(10, 5), c2(2, 4);   
    Complex c3 = c1 + c2; // An example call to "operator+"   
    c3.print();   
}
```

## **Function Overriding**

In C++ inheritance, we can have the same function in the base class as well as its derived classes.

When we call the function using an object of the derived class, the function of the derived class is executed instead of the one in the base class.

So, different functions are executed depending on the object calling the function.

This is known as `**function overriding**` in C++. The function in derived class overrides the function in base class.

// C++ program to demonstrate function overriding  
  ```cpp
#include <iostream>  
using namespace std;  
  
class Base {  
   public:  
    void print() {  
        cout << "Base Function" << endl;  
    }  
};  
  
class Derived : public Base {  
   public:  
    void print() {  
        cout << "Derived Function" << endl;  
    }  
};  
  
int main() {  
    Derived derived1;  
    derived1.print();  
    return 0;  
}  
// Output: Derived Function
```

Here, the same function **print()** is defined in both **Base** and **Derived** classes.  
So, when we call **print()** from the **Derived** object **derived1**, the **print()** from **Derived** is executed by overriding the function in **Base**.

**Virtual Functions**

A `**virtual**` function is a member function which is declared in the **base** class using the keyword `**virtual**` and is re-defined (Overriden) by the **derived** class.  
In C++ what this means is that if we call a member function then it could cause a different function to be executed instead depending on what type of object invoked it.

Let’s look at an example to understand it better.
```cpp
// Without virtual function  
#include <iostream>  
using namespace std;  
  
// Base class  
class Shape {  
   public:  
      Shape(int l, int w){
      length = l; 
      width=w;} //default constructor  
      int get_Area(){
      cout << "This is call to parent class area"<<endl;}  
  protected:  
      int length,width;  
};  
  
// Derived class  
class Square: public Shape {  
   public:  
      Square(int l=0, int w=0) : Shape(l,w) {} //declaring and initializing derived class constructor   
      int get_Area(){  
        cout << "Square area: " << length*width << endl;  
        return (length * width);    
      }  
};  
// Derived class  
class Rectangle: public Shape {  
   public:  
      Rectangle(int l=0, int w=0) : Shape(l,w) {} //declaring and initializing derived class constructor   
      int get_Area(){ cout << "Rectangle area: " << length*width << endl;return (length * width); }  
};  
  
int main(void) {  
   Shape *s;  
   Square sq(5,5); //making object of child class Sqaure  
   Rectangle rec(4,5); //making object of child class Rectangle  
     
   s = &sq;  
   s->get_Area();  
   s= &rec;  
   s->get_Area();  
   return 0;  
}  
// Output  
// This is call to parent class area  
// This is call to parent class area
```

In the above function,

- we store the address of each child class **Rectangle** and **Square** object in **s** and
- then we call the **get_Area()** function on it,
- ideally, it should have called the respective **get_Area()** functions of the child classes but
- instead it calls the **get_Area()** defined in the base class.
- This happens due **static linkage** which means the call to **get_Area()** is getting set only once by the compiler which is in the base class.

We can overcome **static linkage**​ problem by the use of `**virtual**` functions.  
If we define a `virtual` function in the base class, with another version in a derived class, it will signal the compiler that we don’t want **static linkage** for this function.

**Look at the modified code below:**
```cpp
#include <iostream>  
using namespace std;  
  
// Base class  
class Shape {  
   public:  
      Shape(int l, int w){length = l; width=w;} //default constructor  
      //changing get_Area() to virtual type function  
      virtual int get_Area(){cout << "This is call to parent class area"<<endl;}   
  protected:  
      int length,width;  
};  
  
// Derived class  
class Square: public Shape {  
   public:  
      Square(int l=0, int w=0) : Shape(l,w) {} //declaring and initializing derived class constructor   
      int get_Area(){  
        cout << "Square area: " << length*width << endl;  
        return (length * width);    
      }  
};  
// Dreived class  
class Rectangle: public Shape {  
   public:  
      Rectangle(int l=0, int w=0) : Shape(l,w) {} //declaring and initializing derived class constructor   
      int get_Area(){ cout << "Rectangle area: " << length*width << endl;return (length * width); }  
};  
  
int main(void) {  
   Shape *s;  
   Square sq(5,5); //making object of child class Sqaure  
   Rectangle rec(4,5); //making object of child class Rectangle  
     
   s = &sq;  
   s->get_Area();  
   s= &rec;  
   s->get_Area();  
   return 0;  
}  
// Output  
// Square area: 25   
// Rectangle area: 20
```

Now when addresses of objects of **Rectangle** and **Square**​ classes are stored in ***s** the respective **get_Area()** function is called since this time, the compiler looked at the contents of the pointer rather than its type.
## Vectors
**Vectors** are same as dynamic arrays with the ability to **resize itself** automatically when an element is inserted or deleted, with their storage being handled automatically by the container.  
Vector elements are placed in contiguous storage so that they can be accessed and traversed using iterators.

- Declaration
    
    ```cpp
	vector<int>v; (creates an empty vector of integers)  
    vector<int>v(10); (creates an integer vector of size 10)  
    vector<int>v(10, 0); (creates an integer vector of size 10, containing 0)
```
    
- Size:
    
```cpp
int size = v.size();
```

    
- Pushing an integer into a vector:
    
```cpp
    v.push_back(x); (where x is an integer.The size increases by 1 after this.)
```
    
- Popping the last element from the vector:
    
```cpp
    v.pop_back(); (After this the size decreases by 1)
```
    
- Sorting a vector:
    
```cpp
sort(v.begin(), v.end()); (Will sort all the elements in the vector)  
    // begin() - Returns an iterator pointing to the first element in the vector  
    // end() – Returns an iterator pointing to the theoretical element that follows the last element in the vector
```

    
```cpp
- erase(int position):
```

    
    Removes the element present at position.  
    Ex: v.erase(v.begin()+4); (erases the fifth element of the vector v)
    
```cpp
	erase(int start,int end):
```

    
Removes the elements in the range from start to end inclusive of the start and exclusive of the end.  
    Ex: v.erase(v.begin()+2,v.begin()+5); (erases all the elements from the third element to the fifth element.)


# References
	https://www.interviewbit.com/


