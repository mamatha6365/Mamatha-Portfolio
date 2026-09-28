import { Project, EducationItem, Internship, Certification, CodeTopic } from '../types';

export const personalInfo = {
  name: 'Mamatha Kuruva',
  title: 'Aspiring Software Developer | B.Tech CSE (AI)',
  tagline: 'Building practical solutions with Java, React, and modern web technologies.',
  status: 'Final-Year B.Tech CSE (AI) Student',
  expectedGraduation: '2027',
  location: 'Andhra Pradesh, India',
  email: 'mamathakuruva6365@gmail.com',
  github: 'https://github.com/mamatha6365',
  linkedin: 'https://linkedin.com/in/mamatha-kuruva',
  bio: `I am a final-year B.Tech student specializing in Computer Science and Engineering (Artificial Intelligence). My interest in software development grew through hands-on project work, where I learned how frontend interfaces, backend services, databases, and APIs work together to create complete applications.

I enjoy solving programming problems, learning new technologies, and building practical web applications. Currently, I am strengthening my Java, React, backend, database, and problem-solving skills while preparing for software development opportunities.`,
  shortIntro: `I am a final-year Computer Science Engineering (Artificial Intelligence) student passionate about software development, web technologies, and building practical solutions. I enjoy turning ideas into functional applications and continuously improving my programming and problem-solving skills.`,
  coreFocus: 'Software Development & Full-Stack Development',
};

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech — Computer Science & Engineering (Artificial Intelligence)',
    field: 'Computer Science & Engineering (AI)',
    institution: 'St. Johns College of Engineering and Science',
    period: '2023 – 2027',
    score: '75%',
    scoreType: 'Current Academic Performance',
    status: 'In Progress',
    highlights: [
      'Core coursework in Object-Oriented Programming (Java), Data Structures, Database Management Systems, and Artificial Intelligence fundamentals.',
      'Active participant in technical hackathons and practical project-based software engineering labs.',
      'Developing full-stack web applications and strengthening object-oriented software engineering principles.',
    ],
  },
  {
    degree: 'Intermediate (MPC - Mathematics, Physics, Chemistry)',
    field: 'Higher Secondary Education',
    institution: 'Narayana Junior College',
    period: '2021 – 2023',
    score: '93%',
    scoreType: 'Board Examination Score',
    status: 'Completed',
    highlights: [
      'Distinction in Mathematics and analytical science subjects.',
      'Strong foundation in mathematical reasoning, algebra, and logic.',
    ],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: 'Secondary Schooling',
    institution: 'Sri Chaitanya School',
    period: '2020 – 2021',
    score: '100%',
    scoreType: 'Board Examination Score (10/10 GPA)',
    status: 'Completed',
    highlights: [
      'Perfect 100% academic record demonstrating discipline, focus, and strong conceptual grasp across all subjects.',
    ],
  },
];

export const skillCategories = [
  {
    name: 'Programming',
    description: 'Core object-oriented programming and problem-solving language',
    skills: ['Java'],
  },
  {
    name: 'Frontend',
    description: 'Building responsive, user-friendly client interfaces',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    name: 'Database',
    description: 'Relational data modeling, table schemas, and SQL queries',
    skills: ['MySQL'],
  },
  {
    name: 'Tools',
    description: 'Everyday developer workflow and version control',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export const projectsData: Project[] = [
  {
    id: 'stylehub',
    name: 'StyleHub',
    category: 'Full-Stack Web Development',
    tagline: 'Modern fashion and apparel e-commerce application with deployed backend',
    description:
      'A modern fashion and apparel web application demonstrating frontend development, product browsing, cart functionality, and exploring backend API and database integration.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
    ],
    features: [
      'Product browsing with fashion collections',
      'Product details and sizing view',
      'Cart management and price calculation',
      'Wishlist selection',
      'User authentication interface',
      'Order placement flow',
      'Backend REST service deployed on Render',
      'Database integration for catalog persistence',
      'Responsive design across devices',
    ],
    githubUrl: 'https://github.com/mamatha6365/STYLEHUB',
    liveUrl: 'https://stylehub-backend-fybo.onrender.com/',
    type: 'Full-Stack',
    architectureOverview:
      'Frontend client integrated with deployed Node.js/Express service on Render (https://stylehub-backend-fybo.onrender.com/) with MongoDB persistence.',
  },
  {
    id: 'freshfood',
    name: 'FreshFood',
    category: 'Web Development / Food Ordering',
    tagline: 'Responsive online food ordering web application with live demo and interactive cart',
    description:
      'A food ordering web application designed to provide users with an easy way to explore restaurants, view menus, manage a cart, and place orders.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Restaurant browsing and cuisine selection',
      'Categorized food menus with pricing',
      'Real-time add to cart functionality',
      'Quantity management (increment, decrement, remove)',
      'Dynamic price and total calculation',
      'Responsive interface optimized for mobile and desktop screens',
    ],
    githubUrl: 'https://github.com/mamatha6365/FreshFood',
    liveUrl: 'https://mamatha6365.github.io/FreshFood/',
    type: 'Frontend',
    architectureOverview:
      'Engineered with semantic HTML5, CSS3 responsive styling, and vanilla JavaScript DOM manipulation. Hosted live on GitHub Pages at https://mamatha6365.github.io/FreshFood/.',
  },
];

export const internshipsData: Internship[] = [
  {
    company: 'Data Alcott Systems',
    role: 'Web Development Intern',
    duration: '1 Month',
    description: [
      'Gained practical experience in end-to-end web application development and responsive design.',
      'Implemented frontend components and integrated client interfaces with backend service structures.',
      'Worked on real project development involving modular layouts, event handling, and cross-browser responsiveness.',
    ],
    projectsAssociated: ['FreshFood', 'StyleHub'],
    skillsApplied: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Frontend Implementation'],
  },
  {
    company: 'SkillDzire',
    role: 'Web Development Intern',
    duration: '2 Months',
    description: [
      'Engaged in practical web-development experience focusing on foundational and modern web technologies.',
      'Built responsive web interfaces and practiced clean component structuring.',
      'Completed hands-on practical assignments and projects to sharpen coding and troubleshooting abilities.',
      'Collaborated on improving web layouts, performance, and cross-device usability.',
    ],
    skillsApplied: ['Web Technologies', 'Frontend Development', 'UI Layouts', 'Problem Solving'],
  },
];

export const certificationsData: Certification[] = [
  {
    title: 'Certificate of Web & Technology Training',
    organization: 'Quantum Wiser',
    type: 'Certification',
    description:
      'Completed practical technical coursework covering software development fundamentals, web technologies, and programming implementation.',
  },
  {
    title: 'Smart India Hackathon Participant',
    organization: 'Ministry of Education / AICTE',
    type: 'National Hackathon',
    description:
      'Participated in the prestigious national innovation hackathon, collaborating to formulate technical solutions for real-world challenge statements.',
  },
];

export const whatICanBuildData = [
  {
    title: 'Frontend Applications',
    description: 'Responsive and user-friendly interfaces using HTML, CSS, JavaScript and React.',
    icon: 'layout',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    title: 'Database Applications',
    description: 'Applications using MySQL for relational data storage, schema design, and queries.',
    icon: 'database',
    tags: ['MySQL', 'SQL Queries', 'Relational Schemas', 'CRUD'],
  },
  {
    title: 'Backend & REST APIs (Learning)',
    description: 'Building foundational backend services and REST APIs using Node.js and Express.',
    icon: 'server',
    tags: ['Node.js', 'Express.js', 'REST Endpoints', 'JSON'],
  },
  {
    title: 'Full-Stack Integration (In Progress)',
    description: 'Connecting frontend interfaces with backend services and database storage into working web apps.',
    icon: 'layers',
    tags: ['Client-Server Flow', 'MVC Concept', 'API Integration', 'Full-Stack'],
  },
];

export const currentlyLearningData = [
  {
    topic: 'Backend Development',
    category: 'Currently Learning & Improving',
    focus: 'Server architectures, request lifecycles, routing patterns, and application middleware.',
  },
  {
    topic: 'Node.js',
    category: 'Currently Learning & Improving',
    focus: 'Event-driven JavaScript runtime, asynchronous programming, npm packages, and server setup.',
  },
  {
    topic: 'REST APIs',
    category: 'Currently Learning & Improving',
    focus: 'Designing clean HTTP endpoints, CRUD operations, JSON request/response formats, and status codes.',
  },
  {
    topic: 'MongoDB',
    category: 'Currently Learning & Improving',
    focus: 'Document database fundamentals, collections, schema modeling, and basic database operations.',
  },
  {
    topic: 'Data Structures and Algorithms',
    category: 'Currently Learning & Improving',
    focus: 'Arrays, searching techniques, strings, time complexity, and problem solving in Java.',
  },
];

export const codeTopicsData: CodeTopic[] = [
  {
    id: 'oop-inheritance',
    title: 'OOP & Inheritance in Java',
    category: 'Object-Oriented Programming',
    codeSnippet: `// Demonstrating Java Inheritance & Encapsulation
class Developer {
    protected String name;
    protected String role;

    public Developer(String name, String role) {
        this.name = name;
        this.role = role;
    }

    public void displayProfile() {
        System.out.println("Candidate: " + name + " | Role: " + role);
    }
}

// Subclass extending parent functionality
class StudentDeveloper extends Developer {
    private String degree;
    private int graduationYear;

    public StudentDeveloper(String name, String degree, int graduationYear) {
        super(name, "Aspiring Software Developer");
        this.degree = degree;
        this.graduationYear = graduationYear;
    }

    @Override
    public void displayProfile() {
        super.displayProfile();
        System.out.println("Specialization: " + degree + " ('" + graduationYear + ")");
    }
}

public class Main {
    public static void main(String[] args) {
        StudentDeveloper candidate = new StudentDeveloper(
            "Mamatha Kuruva", "B.Tech CSE (AI)", 2027
        );
        candidate.displayProfile();
    }
}`,
    explanation:
      'Inheritance allows classes to inherit fields and methods from a superclass, fostering code reusability and hierarchical structure. The `@Override` annotation guarantees method contract consistency at compile time.',
    keyTakeaways: [
      'Subclasses use `super()` to invoke parent constructors.',
      'Encapsulation is maintained via access modifiers (protected/private).',
      'Runtime polymorphism allows clean decoupling of interface and implementation.',
    ],
  },
  {
    id: 'method-overloading-overriding',
    title: 'Overloading vs Overriding',
    category: 'Polymorphism',
    codeSnippet: `class MathOperation {
    // Compile-time Polymorphism: Method Overloading
    // Same method name, different parameter signature
    public int calculateSum(int a, int b) {
        return a + b;
    }

    public int calculateSum(int a, int b, int c) {
        return a + b + c;
    }

    public double calculateSum(double a, double b) {
        return a + b;
    }
}

// Runtime Polymorphism: Method Overriding
class Animal {
    void speak() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Dog barks (overridden implementation)");
    }
}

public class Main {
    public static void main(String[] args) {
        MathOperation math = new MathOperation();
        System.out.println("Sum (2 ints): " + math.calculateSum(10, 20));
        System.out.println("Sum (3 ints): " + math.calculateSum(10, 20, 30));

        Animal myPet = new Dog(); // Dynamic method dispatch
        myPet.speak();
    }
}`,
    explanation:
      'Overloading is static/compile-time polymorphism resolved by parameter types. Overriding is dynamic/runtime polymorphism resolved at runtime based on the actual object instance.',
    keyTakeaways: [
      'Overloading requires different method signatures in the same class.',
      'Overriding requires the same signature and return type across inheritance.',
      'Dynamic method dispatch allows flexible object substitution.',
    ],
  },
  {
    id: 'arrays-and-searching',
    title: 'Arrays & Binary Search',
    category: 'Searching & Arrays',
    codeSnippet: `public class SearchAlgorithms {
    // Binary Search on a sorted array - O(log N)
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            // Preventing integer overflow
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid; // Target found
            }

            if (arr[mid] < target) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
        return -1; // Not present
    }

    public static void main(String[] args) {
        int[] sortedNumbers = {10, 24, 38, 45, 59, 72, 88, 93};
        int target = 59;
        int index = binarySearch(sortedNumbers, target);

        System.out.println("Target " + target + " found at index: " + index);
    }
}`,
    explanation:
      'Binary Search is a divide-and-conquer algorithm that cuts the search space in half with every iteration, delivering O(log N) performance on sorted arrays compared to O(N) linear search.',
    keyTakeaways: [
      'Requires the input array to be strictly sorted.',
      'Using `mid = left + (right - left) / 2` avoids potential integer overflow.',
      'Space complexity is O(1) in the iterative implementation.',
    ],
  },
  {
    id: 'strings-and-loops',
    title: 'Strings, Loops & Problem Solving',
    category: 'Strings & Logic',
    codeSnippet: `public class StringProblems {
    // Check if a string is a palindrome using two pointers
    public static boolean isPalindrome(String s) {
        if (s == null) return false;
        
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            // Case-insensitive comparison
            if (Character.toLowerCase(s.charAt(left)) != 
                Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        String testWord = "Radar";
        boolean result = isPalindrome(testWord);
        System.out.println("Is '" + testWord + "' a palindrome? " + result);
    }
}`,
    explanation:
      'Using a two-pointer approach avoids allocating additional string memory and checks palindromes in O(N) time with O(1) auxiliary space.',
    keyTakeaways: [
      'Two-pointer pattern reduces space overhead compared to string reversal.',
      'Safe character normalization handles mixed cases.',
      'Fundamental pattern for string manipulation interview questions.',
    ],
  },
];
