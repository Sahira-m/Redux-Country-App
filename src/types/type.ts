export type  CountryType={
    flags:{png:string;
            svg:string},
    name: { 
        common:string;
        },
    region:string; 
    population:number;
    languages:MyLanguages;
   };

 type MyLanguages={
    [key:string]:string;
}