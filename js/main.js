var app = new Vue({
    el: '#root',
    data: {
        courses: {
            0: {
                name: 'Introduction to Python programming',
                image: 'img/python.jpg',
                description: 'Python is an extremely versatile language and its use is growing more and more nowadays. Despite simplicity and readability are among significant Python strengths, writing a good quality Python code requires some degree of preparation. This course aims to introduce the student to the key topics of the language in order to give a solid basis for further investigations that will be required according to the specific field of application. The exposition of the topics uses several examples and tries as much as possible to highlight good Python programming practices in addition to the simple syntax correctness. To improve understanding, the different modules of the course are immediately put into practice in hands-on sessions in which students and teachers can interact directly on simple but significant concrete problems proposed in the exercise.',
                skills: 'By the end of the course each student should be able to: <ul><li>understand the key features of Python language</li><li>write a Python program/module using the basic syntax elements</li><li>understand the best practices for programming in Python</li></ul>',
                targetAudience: 'Researchers and programmers interested in an introduction to the Python programming language.',
                preRequisites: 'Knowledge of the basic fundamentals of programming is useful but not necessary.',
                more: {
                    area: 'Languages',
                    target: 'Companies, Research Institutions, Universities',
                    providedAs: 'Ordinary Course',
                    length: '5 dd',
                    minimumAttendants: 6,
                    nextStart: '10/09/2021',
                    startingSoon: false,
                }
            },
            1: {
                name: 'Data science with R',
                image: 'img/R.png',
                description: 'The purpose of this course is to present researchers and scientists with R implementation of Machine Learning methods. The first part of the course will consist of introductory lectures on popular Machine Learning algorithms including unsupervised methods (Clustering, Association Rules) and supervised ones (Decision Trees, Naive Bayes, Random Forests and Deep Neural Network). Basic Machine Learning concepts such as training set, test set, validation set, overfitting, bagging, boosting will be introduced as well as performance evaluation for supervised and unsupervised methods.<br>The second part will consist of practical exercises such as reading data, using packages and building machine learning applications. Different options for parallel programming will be shown using specific R packages (parallel, h2o,…). For Deep Learning applications the Keras package will be presented. The examples will cover the analysis of large datasets and images datasets. Participants will use R on Cineca HPC facilities for practical assignments.',
                skills: '<ul>At the end of the course, the student will be expected to have acquired:<li>the ability to perform basic operations on matrices and dataframes</li><li>the ability to manage packages</li><li>the ability to navigate in the RStudio interface</li><li>a general knowledge of Machine and Deep Learning methods</li><li>a general knowledge of the most popular packages for Machine and Deep Learning</li><li>a basic knowledge of different parallel programming techniques</li><li>the ability to build machine learning applications with large datasets and images datasets</li></ul>',
                targetAudience: 'Students and researchers with different backgrounds, looking for technologies and methods to analyze a large amount of data.',
                preRequisites: 'Participants must have a basic statistics knowledge. Participants must also be familiar with basic Linux and R language.',
                more: {
                    area: 'Languages, Techniques, Data',
                    target: 'Companies, Research Institutions, Universities',
                    providedAs: 'Ordinary Course',
                    length: '3 dd',
                    minimumAttendants: 6,
                    nextStart: '15/07/2021',
                    startingSoon: true,
                }
            },
            2: {
                name: 'Introduction to Scientific Computing in C',
                image: 'img/C.png',
                description: 'This course illustrates the key features of C language, with emphasis to modern programming style for scientific and technical applications particularly suitable to HPC environments. After a brief introduction on the C fundamentals we will discuss its flaws and strengths and the conceptual guidelines that allowed C to be one of the most widespread, efficient and general purpose languages even decades after its birth. We will show common idioms and best practices focusing on scientific and technical use cases.',
                skills: '<ul>By the end of the course the student will be able to:<li>understand the principles of scientific oriented programming logic;</li><li>read and write programs in C;</li><li>improve his knowledge about the C language, having reached the necessary starting point;</li><li>use the best C language practices and recognition of typical traps.</li>',
                targetAudience: 'Researchers and programmers interested in reading C codes and writing new programs or modifying and extending existent ones with portable C code. Anyone interested in writing high performance codes at a professional level.',
                preRequisites: 'A basic knowledge of computer architecture and of any programming paradigm is recommended. A basic knowledge of Unix environment would be helpful.',
                more: {
                    area: 'Languages',
                    target: 'Companies, Research Institutions, Universities',
                    providedAs: 'Ordinary Course',
                    length: '3 dd',
                    minimumAttendants: 6,
                    nextStart: '20/10/2021',
                    startingSoon: false,
                }
            },
            3: {
                name: 'Python for Scientific Computing',
                image: 'img/python2.jpg',
                description: 'Python is an increasingly widespread language in various contexts and it is conquering an important space even within the scientific community. Thanks to its extreme readability, it constitutes an important candidate for the writing and management of highly complex algorithms. Its greater limitation compared to the traditionally most used languages ​​in the scientific and technical computing field is the limited performance. However, a wide variety of high quality scientific libraries is available today in Python and allows, through low-level tailored implementations, to make a vast number of highly optimized algorithms usable while maintaining the simplicity of the Python language. In this course, which assumes the knowledge of the fundamental elements of the language, we will discuss the fundamental elements of the most used scientific libraries using Python giving the student a look at the correct setting to be given to a calculation-oriented Python code. To improve understanding, the different modules of the course are immediately put into practice in hands-on sessions in which students and teachers can interact directly on simple but significant concrete problems proposed in the exercise.',
                skills: '<ul>By the end of the course each student should be able to:<li>know the most important numerical libraries available in Python</li><li>write a Python program/module using the most important Python numerical libraries</li><li>understand the best practices for programming scientific applications in Python</li></ul>',
                targetAudience: 'Researchers and programmers who want to use Python to write and manage scientific applications',
                preRequisites: 'Basic knowledge of the Python programming (e.g. from the Cineca course Introduction to Python programming).',
                more: {
                    area: 'Languages, Science',
                    target: 'Companies, Research Institutions, Universities',
                    providedAs: 'Ordinary Course',
                    length: '3 dd',
                    minimumAttendants: 6,
                    nextStart: '06/09/2021',
                    startingSoon: false,
                }
            },
            4: {
                name: 'Introduction to Fortran for Scientific Computing',
                image: 'img/fortran.png',
                description: 'Fortran is among the earliest high level programming languages and the first one to be standardized. The specific features of the language and a widespread experience acquired in coding allow Fortran compilers to build highly optimized executables. The major revisions of the standard (77/90/2003) give the chance to improve more and more the code design, and this, along with the large number of mathematical functions included and an extensive collections of highly tuned scientific packages, make Fortran a good candidate in the area of numerical, scientific, engineering and technical applications.<br>Fortran 90, the ISO standard replacing the previous 77 release, adds many innovations: from the derived types which may be defined by the user, to a specific syntax to handle dynamically allocated memory. Fortran 2003 further enlarges the potentiality of the language by proposing (among other things) the support for object-oriented programming and a standard way to interoperate with C.  Nowadays, Fortran compilers are available for a very large amount of system facilities, from workstations to massively-parallel systems.',
                skills: '<ul>By the end of the course the student will be able to:<li>understand the basic elements of the language (type, variable, operator, expression, function, statement, flow control construct)</li><li>structure a program in code units (program, function, subroutine and module)</li><li>manage arrays and dynamic memory</li><li>define and use derived types with elements of object programming</li><li>understand the best practices on the implementation of some typical scientific cases</li></ul>',
                targetAudience: 'Programmers of scientific and technical computing, which may benefit from the knowledge and usage of the main features available in Fortran.',
                preRequisites: 'Use of basic informatics tools: line commands, editors. Experience with Linux Operative Systems. Elements of procedural programming: variables, expressions, execution flow, functions. Experiences in Fortran 77 may be helpful.<br>THE COURSE WILL BE HELD IN ITALIAN LANGUAGE',
                more: {
                    area: 'Languages',
                    target: 'Companies, Research Institutions, Universities',
                    providedAs: 'Ordinary Course',
                    length: '4 dd',
                    minimumAttendants: 6,
                    nextStart: '06/09/2021',
                    startingSoon: false,
                }
            }
        }
    },
    methods: {
        openHamburger: function() {
            document.getElementById('cloud').classList.remove('display-none');
            document.getElementById('cloud').classList.add('display-block');
        },
        closeHamburger: function() {
            document.getElementById('cloud').classList.remove('display-block');
            document.getElementById('cloud').classList.add('display-none');
        },
        openInfo: function(index) {
            document.getElementsByTagName("BODY")[0].classList.remove('overflow-overlay');
            document.getElementsByTagName("BODY")[0].classList.add('overflow-hidden');

            document.getElementById('layover').classList.remove('display-none');
            document.getElementById('layover').classList.add('display-block');

            document.getElementsByClassName('info')[index].classList.remove('display-none');
            document.getElementsByClassName('info')[index].classList.add('display-block');
        },
        closeInfo: function(index) {
            document.getElementsByTagName("BODY")[0].classList.remove('overflow-hidden');
            document.getElementsByTagName("BODY")[0].classList.add('overflow-overlay');

            document.getElementById('layover').classList.remove('display-block');
            document.getElementById('layover').classList.add('display-none');

            document.getElementsByClassName('info')[index].classList.remove('display-block');
            document.getElementsByClassName('info')[index].classList.add('display-none');
        },
        openLoginForm: function() {
            this.closeHamburger();

            document.getElementsByTagName("BODY")[0].classList.remove('overflow-overlay');
            document.getElementsByTagName("BODY")[0].classList.add('overflow-hidden');
            
            document.getElementById('layover').classList.remove('display-none');
            document.getElementById('layover').classList.add('display-block');
            
            document.getElementById('login-form').classList.remove('display-none');
            document.getElementById('login-form').classList.add('display-block');
        },
        closeLoginForm: function() {
            document.getElementsByTagName("BODY")[0].classList.remove('overflow-hidden');
            document.getElementsByTagName("BODY")[0].classList.add('overflow-overlay');

            document.getElementById('layover').classList.remove('display-block');
            document.getElementById('layover').classList.add('display-none');

            document.getElementById('login-form').classList.remove('display-block');
            document.getElementById('login-form').classList.add('display-none');
        },
        openRegistrationForm: function() {
            this.closeHamburger();

            document.getElementsByTagName("BODY")[0].classList.remove('overflow-overlay');
            document.getElementsByTagName("BODY")[0].classList.add('overflow-hidden');
            
            document.getElementById('layover').classList.remove('display-none');
            document.getElementById('layover').classList.add('display-block');
            
            document.getElementById('registration-form').classList.remove('display-none');
            document.getElementById('registration-form').classList.add('display-block');
        },
        closeRegistrationForm: function() {
            document.getElementsByTagName("BODY")[0].classList.remove('overflow-hidden');
            document.getElementsByTagName("BODY")[0].classList.add('overflow-overlay');

            document.getElementById('layover').classList.remove('display-block');
            document.getElementById('layover').classList.add('display-none');

            document.getElementById('registration-form').classList.remove('display-block');
            document.getElementById('registration-form').classList.add('display-none');
        },
    },
    mounted: function() {
        var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        //console.log(vw);
        let wrapper = document.getElementsByClassName( "ellipsis" );
        let options = {
            callback: function( isTruncated ) {},
            /* Function invoked after truncating the text.
                Inside this function, "this" refers to the wrapper. */
        
            ellipsis: "\u2026 ",
            /* The text to add as ellipsis. */
        
            //height: 150,
            /* The (max-)height for the wrapper:
                null: measure the CSS (max-)height ones;
                a number: sets a specific height in pixels;
                "watch": re-measures the CSS (max-)height in the "watch". */
        
            keep: null,
            /* Query selector for elements to keep after the ellipsis. */
        
            tolerance: 0,
            /* Deviation for the measured wrapper height. */
        
            truncate: "word",
            /* How to truncate the text: "node", "word" or "letter". */
        
            watch: "window",
            /* Whether to update the ellipsis:
                true: Monitors the wrapper width and height;
                "window": Monitors the window width and height. */
        };
        if (vw < 768) {
            options.height = 150;
        }
        else {
            options.height = 180;
        };
        for (let i = 0; i < wrapper.length; i++) {
            new Dotdotdot( wrapper[i], options );
        };
    },
});
Vue.config.devtools = true;
