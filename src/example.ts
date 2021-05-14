function concat (str1:string, str2:string): string{
    return `${str1} ${str2}`;
}

concat('Hello ', 'World');

interface TsMyHometask { 
    howIDoIt: string, 
    simeArray: any, 
    withData?: any  
};
const myHometask: TsMyHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

myHometask.howIDoIt = 'eslint rygaets9';  

interface MyArray<T> {
	[N: number]: T;

	reduce(fn: (el: T, em: T) => T): T[];
}


const tsArr: MyArray<number> = []; 
tsArr.reduce((acc: number, cur: number) => acc + cur);
