

type Base ={
    _createdAt:string
    _id:string
    _rev:string
    _type:string
    _updatedAt:string
}

interface Blog extends Base {
    author:Author;
    body:Block[];
    categories:Category[];
    subCategory:SubCategory;
    mainImage:MainImage;
    slug:Slug;
    title:string;
    description:string;
    video:Video;
    publishedAt:Date;
    views:number;
}

interface Author extends Base {
    bio:Block[];
    image:Image;
    name:string;
    slug:Slug;
    video:string;
}

interface Academy extends Base {
    title:string;
    body:Block[];
    slug:Slug;
    publishedAt:Date;
    mainImage:MainImage;
    excerpt:string;
    categories:Category[];
}


interface Image{
    _type:string;
    asset:Reference;
    alt:string;
}

interface Reference{
    _ref:string;
    _type:"reference";
}

interface Slug {
    _type:"slug";
    current:string;
}

interface Block {
    _key:string;
    _type:string;
    children:Span[];
    markDefs:any[];
    style:"normal" | "h1" | "h2" | "h3" | "h4" | "blockquote" ;
}

interface Category extends Base {
    title:string;
    description:string;
}


interface SubCategory extends Base {
    title:string;
   
    description:string;
}


interface MainImage  {
    _type:"image";
    asset:Reference;
    alt:string;
}

interface Video {
    _type:"file";
    asset:Reference;
    alt:string;
}

interface Title {
    _type: "string";
    current: string;
}

interface Date {
    _type:"date";
    current:string;
}
