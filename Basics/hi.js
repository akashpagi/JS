        let age=20;
		let name="akash";
		console.log(typeof name);

		//converting number to string
		a = age + "" ; //add empty string with number
		console.log("Converting number to string : "+ typeof a );

        
		//converting  number to string
		let n = +"akash"; // add + sign before the string
		console.log(typeof n);
		console.log("Converting  string to nmuber: "+ typeof n);

		console.log('---------------------------');



		//string concatination
		let s1="Akash";
		let s2="Pagi";
		let FullName=s1+" "+s2;
		console.log("Full Name :"+FullName);

		

		let n1="20";
		let n2="20";
		let add= +n1+ +n2;
		console.log("Addtion of two number :"+add);

		//template string 
		// for template string use back track symbol
		let AboutMe=`my name is ${name} and my age is ${age}.`;
		console.log(AboutMe)
		console.log('---------------------------');



       // datatypes in javasript
		// string
		// number


		


		// undefined
		// A varible or an object has an undefined value when no value is assigned before using it.So we can say that lack of value
		let myVar;
		console.log(myVar);

		// null
		//varible does not have any vlaue but it will change later on. A null means absence of a value
		let Var=null;
		console.log(Var);
		Var="asp";
		console.log(Var , typeof Var);
		//typeof null output ---> object <-- it is bug/error till now
		console.log("typeof null --> "+ typeof null);

		console.log('---------------------------');

		// BigInt
		// Two ways to create BigInt
		// 1.BigInt(332)		
		let MyNumber = BigInt(1365);
		console.log(MyNumber);
        // 2.3434n ...(n means BigInt)
		let SecondMyNumber = 2438n;
		console.log(SecondMyNumber);
		//addition of BigInt
		console.log(MyNumber+SecondMyNumber);
         
        console.log('---------------------------');

		// boolean & comparison operator
		// Boolean mean true or false

		let num1=2, num2=7 ,num3="2";

		let values=`num1 = ${num1} , num2 = ${num2}`;
		console.log(values);
		console.log(`${num1}<=${num2} :${num1<=num2}`);
		console.log(`${num1}==${num2} :${num1==num2}`);
		console.log(`${num1}<${num2} :${num1<num2}`);
		console.log(`${num1}>${num2} :${num1>num2}`);


        //In JS not check any datatype , it will just compaire varible values

        //== : equal value  
		console.log(`${num1}==${num3} :${num1==num3} (equal value but not equal type)`);

		//=== : equal value and equal type  
		console.log(`${num1}==${num3} :${num1===num3} (equal value & equal type)`);

		//!= : not equal   
		console.log(`${num1}!=${num2} :${num1!=num2} (not equal )`);

		//!== : not equal value or not equal type   
		console.log(`${num1}!==${num3} :${num1!==num3} (not equal value or not equal type )`);




